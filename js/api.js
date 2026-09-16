/**
 * EasyShop REST API Client Module (v5 Enhanced Cache Busting)
 * Supports Local REST API and GitHub Pages Static Fallback + Dynamic Sync
 */
const ShopAPI = {
  BASE_URL: window.location.origin,

  async request(endpoint, options = {}) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // If on GitHub Pages, directly use static fallback / localStorage
    if (window.location.hostname.includes('github.io')) {
      return await this.fallback(endpoint, options);
    }

    try {
      const response = await fetch(`${this.BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.warn(`API fetch fallback for ${endpoint}:`, error.message);
      return await this.fallback(endpoint, options);
    }
  },

  async fallback(endpoint, options) {
    try {
      // 1. Categories
      if (endpoint.startsWith('/api/categories')) {
        try {
          const res = await fetch('data/categories.json?_t=' + Date.now());
          const data = await res.json();
          localStorage.setItem('easyshop_categories_v5', JSON.stringify(data));
          return data;
        } catch (e) {
          const stored = localStorage.getItem('easyshop_categories_v5');
          if (stored) return JSON.parse(stored);
          return [];
        }
      }

      // 2. Products
      if (endpoint.startsWith('/api/products')) {
        let list = [];
        const method = (options.method || 'GET').toUpperCase();
        const urlObj = new URL('http://dummy.com' + endpoint);
        const id = urlObj.searchParams.get('id');

        // Always fetch fresh 50 products list from server / data folder
        try {
          const res = await fetch('data/products.json?_t=' + Date.now());
          list = await res.json();

          // Sync with any custom user-added products in admin
          const localCustom = localStorage.getItem('easyshop_custom_products');
          if (localCustom) {
            const customs = JSON.parse(localCustom);
            customs.forEach(cp => {
              if (!list.some(p => p.id === cp.id)) {
                list.push(cp);
              }
            });
          }

          // Clear old obsolete cache
          localStorage.removeItem('easyshop_products');
          localStorage.removeItem('easyshop_products_v2');
          localStorage.removeItem('easyshop_products_v3');
          localStorage.setItem('easyshop_products_v5', JSON.stringify(list));
        } catch (e) {
          const stored = localStorage.getItem('easyshop_products_v5') || localStorage.getItem('easyshop_products_v3');
          if (stored) list = JSON.parse(stored);
        }

        if (method === 'GET') {
          if (id) {
            const item = list.find(p => p.id === id);
            return item || null;
          }

          const category = urlObj.searchParams.get('category');
          const search = urlObj.searchParams.get('search');
          const isBest = urlObj.searchParams.get('isBest');
          const isNew = urlObj.searchParams.get('isNew');
          const isSale = urlObj.searchParams.get('isSale');

          let result = [...list];
          if (category && category !== '전체') {
            result = result.filter(p => p.category === category);
          }
          if (search) {
            const q = search.toLowerCase();
            result = result.filter(p => p.name.toLowerCase().includes(q) || (p.summary && p.summary.toLowerCase().includes(q)));
          }
          if (isBest === 'true') result = result.filter(p => p.isBest);
          if (isNew === 'true') result = result.filter(p => p.isNew);
          if (isSale === 'true') result = result.filter(p => p.isSale);

          return result;
        }

        if (method === 'POST') {
          const newProd = JSON.parse(options.body || '{}');
          newProd.id = newProd.id || 'prod-' + Date.now();
          list.unshift(newProd);
          
          let customs = JSON.parse(localStorage.getItem('easyshop_custom_products') || '[]');
          customs.unshift(newProd);
          localStorage.setItem('easyshop_custom_products', JSON.stringify(customs));
          localStorage.setItem('easyshop_products_v5', JSON.stringify(list));
          return { success: true, product: newProd };
        }

        if (method === 'PUT') {
          const updateData = JSON.parse(options.body || '{}');
          const idx = list.findIndex(p => p.id === id);
          if (idx > -1) {
            list[idx] = { ...list[idx], ...updateData };
            localStorage.setItem('easyshop_products_v5', JSON.stringify(list));
          }
          return { success: true };
        }

        if (method === 'DELETE') {
          list = list.filter(p => p.id !== id);
          localStorage.setItem('easyshop_products_v5', JSON.stringify(list));
          return { success: true };
        }
      }

      // 3. Orders
      if (endpoint.startsWith('/api/orders')) {
        let orders = [];
        const stored = localStorage.getItem('easyshop_orders');
        if (stored) {
          orders = JSON.parse(stored);
        } else {
          try {
            const res = await fetch('data/orders.json');
            orders = await res.json();
          } catch(e) { orders = []; }
          localStorage.setItem('easyshop_orders', JSON.stringify(orders));
        }

        const urlObj = new URL('http://dummy.com' + endpoint);
        const orderId = urlObj.searchParams.get('orderId');
        const method = (options.method || 'GET').toUpperCase();

        if (method === 'GET') {
          if (orderId) return orders.find(o => o.orderId === orderId) || null;
          return orders;
        }

        if (method === 'POST') {
          const newOrder = JSON.parse(options.body || '{}');
          newOrder.orderId = 'ORD-' + Date.now().toString().slice(-8);
          newOrder.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
          newOrder.status = newOrder.status || '결제완료';
          orders.unshift(newOrder);
          localStorage.setItem('easyshop_orders', JSON.stringify(orders));
          return { success: true, order: newOrder };
        }

        if (method === 'PUT') {
          const updateData = JSON.parse(options.body || '{}');
          const target = orders.find(o => o.orderId === orderId);
          if (target) {
            if (updateData.status) target.status = updateData.status;
            if (updateData.trackingNumber !== undefined) target.trackingNumber = updateData.trackingNumber;
            localStorage.setItem('easyshop_orders', JSON.stringify(orders));
          }
          return { success: true };
        }
      }

      // 4. Inquiries
      if (endpoint.startsWith('/api/inquiries')) {
        let inquiries = [];
        const stored = localStorage.getItem('easyshop_inquiries');
        if (stored) {
          inquiries = JSON.parse(stored);
        } else {
          try {
            const res = await fetch('data/inquiries.json');
            inquiries = await res.json();
          } catch(e) { inquiries = []; }
          localStorage.setItem('easyshop_inquiries', JSON.stringify(inquiries));
        }

        const urlObj = new URL('http://dummy.com' + endpoint);
        const inqId = urlObj.searchParams.get('id');
        const method = (options.method || 'GET').toUpperCase();

        if (method === 'GET') return inquiries;

        if (method === 'POST') {
          const newInq = JSON.parse(options.body || '{}');
          newInq.id = 'inq-' + Date.now();
          newInq.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
          newInq.status = '답변대기';
          inquiries.unshift(newInq);
          localStorage.setItem('easyshop_inquiries', JSON.stringify(inquiries));
          return { success: true, inquiry: newInq };
        }

        if (method === 'PUT') {
          const updateData = JSON.parse(options.body || '{}');
          const target = inquiries.find(i => i.id === inqId);
          if (target) {
            target.answer = updateData.answer;
            target.status = '답변완료';
            target.answeredAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
            localStorage.setItem('easyshop_inquiries', JSON.stringify(inquiries));
          }
          return { success: true };
        }
      }

      // 5. Stats
      if (endpoint.startsWith('/api/stats')) {
        const prods = JSON.parse(localStorage.getItem('easyshop_products_v5') || localStorage.getItem('easyshop_products_v3') || '[]');
        const orders = JSON.parse(localStorage.getItem('easyshop_orders') || '[]');
        const inqs = JSON.parse(localStorage.getItem('easyshop_inquiries') || '[]');
        const totalSales = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
        return {
          success: true,
          totalSales,
          orderCount: orders.length,
          productCount: prods.length,
          pendingOrders: orders.filter(o => o.status === '결제완료' || o.status === '상품준비중').length,
          completedOrders: orders.filter(o => o.status === '배송완료').length,
          pendingInquiries: inqs.filter(i => i.status === '답변대기').length
        };
      }
    } catch (e) {
      console.error('Fallback execution error:', e);
    }
    return [];
  },

  // Categories
  async getCategories() {
    return await this.request('/api/categories');
  },

  // Products
  async getProducts(params = {}) {
    const query = new URLSearchParams();
    if (params.category && params.category !== '전체') query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.sort) query.append('sort', params.sort);
    if (params.minPrice) query.append('minPrice', params.minPrice);
    if (params.maxPrice) query.append('maxPrice', params.maxPrice);
    if (params.isBest) query.append('isBest', 'true');
    if (params.isNew) query.append('isNew', 'true');
    if (params.isSale) query.append('isSale', 'true');
    if (params.isFreeShipping) query.append('isFreeShipping', 'true');

    const qs = query.toString() ? `?${query.toString()}` : '';
    return await this.request(`/api/products${qs}`);
  },

  async getProductById(id) {
    return await this.request(`/api/products?id=${encodeURIComponent(id)}`);
  },

  async createProduct(productData) {
    return await this.request('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData)
    });
  },

  async updateProduct(id, productData) {
    return await this.request(`/api/products?id=${encodeURIComponent(id)}`, {
      method: 'PUT',
      body: JSON.stringify(productData)
    });
  },

  async deleteProduct(id) {
    return await this.request(`/api/products?id=${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
  },

  // Orders
  async getOrders(params = {}) {
    const query = new URLSearchParams();
    if (params.status && params.status !== '전체') query.append('status', params.status);
    if (params.search) query.append('search', params.search);
    const qs = query.toString() ? `?${query.toString()}` : '';
    return await this.request(`/api/orders${qs}`);
  },

  async getOrderById(orderId) {
    return await this.request(`/api/orders?orderId=${encodeURIComponent(orderId)}`);
  },

  async createOrder(orderData) {
    return await this.request('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  },

  async updateOrderStatus(orderId, status, trackingNumber = '') {
    return await this.request(`/api/orders?orderId=${encodeURIComponent(orderId)}`, {
      method: 'PUT',
      body: JSON.stringify({ status, trackingNumber })
    });
  },

  // Inquiries
  async getInquiries() {
    return await this.request('/api/inquiries');
  },

  async createInquiry(inquiryData) {
    return await this.request('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(inquiryData)
    });
  },

  async answerInquiry(id, answer) {
    return await this.request(`/api/inquiries?id=${encodeURIComponent(id)}`, {
      method: 'PUT',
      body: JSON.stringify({ answer, status: '답변완료', answeredAt: new Date().toISOString().replace('T', ' ').substring(0, 16) })
    });
  },

  // Admin Stats
  async getStats() {
    return await this.request('/api/stats');
  }
};
