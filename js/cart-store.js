/**
 * EasyShop Cart & Wishlist Store
 * LocalStorage 기반 사용자별(회원별/비회원) 반응형 상태 관리
 */
const CartStore = {
  listeners: [],

  // Backward compatibility getters
  get CART_KEY() {
    return this.getCartKey();
  },
  get WISHLIST_KEY() {
    return this.getWishlistKey();
  },

  // Subscribe to changes
  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    this.listeners.forEach(fn => {
      try { fn(this.getItems(), this.getWishlist()); } catch(e) { console.error(e); }
    });
    // Dispatch custom DOM event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cart-updated', {
        detail: { cart: this.getItems(), count: this.getTotalCount() }
      }));
    }
  },

  /**
   * Get active user identity key
   * Returns normalized user email if logged in, otherwise 'guest'
   */
  getCurrentUserKey() {
    try {
      if (typeof AuthStore !== 'undefined' && AuthStore.getCurrentUser) {
        const u = AuthStore.getCurrentUser();
        if (u && u.email) {
          return u.email.trim().toLowerCase();
        }
      }
    } catch (e) {
      // fallback
    }
    return 'guest';
  },

  getCartKey() {
    return `easyshop_cart_${this.getCurrentUserKey()}`;
  },

  getWishlistKey() {
    return `easyshop_wishlist_${this.getCurrentUserKey()}`;
  },

  /**
   * Distinct sample initial cart items for default demo accounts
   * Gives an immediate rich experience for testing account switching
   */
  getInitialItems(userKey) {
    if (userKey === 'kks@do-best.co.kr') {
      return [
        {
          id: 'prod-01',
          name: '프리미엄 캐시미어 블렌드 오버핏 코트',
          category: '패션 / 의류',
          price: 289000,
          originalPrice: 389000,
          thumbnail: 'https://images.unsplash.com/photo-1539533018447-63fcce667883?w=800&auto=format&fit=crop&q=80',
          selectedOption: '차콜 블랙 / L (105)',
          quantity: 1,
          selected: true
        },
        {
          id: 'prod-03',
          name: '엑스트라 파인 메리노울 터틀넥 니트',
          category: '패션 / 의류',
          price: 89000,
          originalPrice: 119000,
          thumbnail: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
          selectedOption: '오트밀 베이지 / L',
          quantity: 1,
          selected: true
        }
      ];
    } else if (userKey === 'demo@easyshop.kr') {
      return [
        {
          id: 'prod-02',
          name: '프렌치 린넨 100% 루즈핏 스트라이프 셔츠',
          category: '패션 / 의류',
          price: 79000,
          originalPrice: 99000,
          thumbnail: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80',
          selectedOption: '스카이블루 / M (100)',
          quantity: 2,
          selected: true
        },
        {
          id: 'prod-04',
          name: '컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스',
          category: '패션 / 의류',
          price: 64000,
          originalPrice: 84000,
          thumbnail: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
          selectedOption: '다크 네이비 / 32',
          quantity: 1,
          selected: true
        }
      ];
    } else if (userKey === 'kmagick@naver.com') {
      return [
        {
          id: 'prod-05',
          name: '헤비웨이트 950g 프렌치테리 오버핏 후드 집업',
          category: '패션 / 의류',
          price: 78000,
          originalPrice: 98000,
          thumbnail: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
          selectedOption: '멜란지 그레이 / XL',
          quantity: 1,
          selected: true
        }
      ];
    }
    return [];
  },

  // Cart Methods
  getItems() {
    try {
      const key = this.getCartKey();
      const userKey = this.getCurrentUserKey();
      const data = localStorage.getItem(key);
      if (data !== null) {
        return JSON.parse(data);
      }

      // If legacy single-user cart exists and current is guest, migrate it
      if (userKey === 'guest') {
        const legacy = localStorage.getItem('easyshop_cart');
        if (legacy !== null) {
          localStorage.setItem(key, legacy);
          return JSON.parse(legacy);
        }
      }

      // If newly accessed by a known demo user, seed initial items
      const initial = this.getInitialItems(userKey);
      if (initial.length > 0) {
        localStorage.setItem(key, JSON.stringify(initial));
        return initial;
      }
      return [];
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    try {
      localStorage.setItem(this.getCartKey(), JSON.stringify(items));
    } catch (e) {
      console.error('Error saving cart items:', e);
    }
  },

  addItem(product, optionName = '', quantity = 1) {
    const items = this.getItems();
    const existingIndex = items.findIndex(
      item => item.id === product.id && item.selectedOption === optionName
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        originalPrice: product.originalPrice || product.price,
        thumbnail: product.thumbnail || (product.images && product.images[0]) || '',
        selectedOption: optionName,
        quantity: Math.max(1, quantity),
        selected: true
      });
    }

    this.saveItems(items);
    this.notify();
    return true;
  },

  updateQuantity(id, optionName, quantity) {
    let items = this.getItems();
    const target = items.find(item => item.id === id && item.selectedOption === optionName);
    if (target) {
      target.quantity = Math.max(1, quantity);
      this.saveItems(items);
      this.notify();
    }
  },

  toggleSelect(id, optionName) {
    let items = this.getItems();
    const target = items.find(item => item.id === id && item.selectedOption === optionName);
    if (target) {
      target.selected = !target.selected;
      this.saveItems(items);
      this.notify();
    }
  },

  toggleSelectAll(selectAll) {
    let items = this.getItems();
    items.forEach(i => i.selected = selectAll);
    this.saveItems(items);
    this.notify();
  },

  removeItem(id, optionName) {
    let items = this.getItems();
    items = items.filter(item => !(item.id === id && item.selectedOption === optionName));
    this.saveItems(items);
    this.notify();
  },

  removeSelected() {
    let items = this.getItems();
    items = items.filter(item => !item.selected);
    this.saveItems(items);
    this.notify();
  },

  clearCart() {
    try {
      localStorage.removeItem(this.getCartKey());
    } catch (e) {}
    this.notify();
  },

  getTotalCount() {
    const items = this.getItems();
    return items.reduce((acc, item) => acc + item.quantity, 0);
  },

  getSummary(couponDiscount = 0) {
    const items = this.getItems();
    const selectedItems = items.filter(item => item.selected !== false);
    
    const productTotal = selectedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const originalTotal = selectedItems.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
    const totalSavings = originalTotal - productTotal;

    // 50,000원 이상 무료배송 (미만 시 3,000원)
    const freeShippingThreshold = 50000;
    const shippingFee = (productTotal >= freeShippingThreshold || productTotal === 0) ? 0 : 3000;
    const finalAmount = Math.max(0, productTotal + shippingFee - couponDiscount);

    return {
      totalCount: selectedItems.reduce((acc, item) => acc + item.quantity, 0),
      productTotal,
      originalTotal,
      totalSavings,
      shippingFee,
      freeShippingThreshold,
      remainingForFreeShipping: Math.max(0, freeShippingThreshold - productTotal),
      couponDiscount,
      finalAmount,
      selectedItems
    };
  },

  // Wishlist Methods
  getWishlist() {
    try {
      const data = localStorage.getItem(this.getWishlistKey());
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveWishlist(list) {
    try {
      localStorage.setItem(this.getWishlistKey(), JSON.stringify(list));
    } catch (e) {}
  },

  toggleWishlist(product) {
    let wishlist = this.getWishlist();
    const index = wishlist.findIndex(item => item.id === product.id);
    let isAdded = false;

    if (index > -1) {
      wishlist.splice(index, 1);
      isAdded = false;
    } else {
      wishlist.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        thumbnail: product.thumbnail || (product.images && product.images[0]) || ''
      });
      isAdded = true;
    }

    this.saveWishlist(wishlist);
    this.notify();
    return isAdded;
  },

  isWishlisted(productId) {
    const wishlist = this.getWishlist();
    return wishlist.some(item => item.id === productId);
  },

  /**
   * Merge guest items into logged-in user's cart on login
   */
  mergeGuestCartToUser(userEmail) {
    try {
      const guestKey = 'easyshop_cart_guest';
      const guestData = localStorage.getItem(guestKey);
      if (!guestData) return;
      const guestItems = JSON.parse(guestData);
      if (!Array.isArray(guestItems) || guestItems.length === 0) return;

      const userKey = `easyshop_cart_${userEmail.trim().toLowerCase()}`;
      let userItems = [];
      const stored = localStorage.getItem(userKey);
      if (stored !== null) {
        userItems = JSON.parse(stored);
      } else {
        userItems = this.getInitialItems(userEmail.trim().toLowerCase());
      }

      guestItems.forEach(gItem => {
        const existIdx = userItems.findIndex(u => u.id === gItem.id && u.selectedOption === gItem.selectedOption);
        if (existIdx > -1) {
          userItems[existIdx].quantity += gItem.quantity;
        } else {
          userItems.push(gItem);
        }
      });

      localStorage.setItem(userKey, JSON.stringify(userItems));
      localStorage.removeItem(guestKey);
    } catch (e) {
      console.warn('Cart merge notice:', e);
    }
  },

  init() {
    if (typeof window !== 'undefined') {
      // Listen to auth changes from AuthStore (login, logout, switch user)
      window.addEventListener('auth-changed', (e) => {
        const user = e && e.detail && e.detail.user;
        if (user && user.email) {
          this.mergeGuestCartToUser(user.email);
        }
        this.notify();
      });

      // Storage event across tabs
      window.addEventListener('storage', (e) => {
        if (e.key && (e.key.startsWith('easyshop_cart_') || e.key.startsWith('easyshop_wishlist_'))) {
          this.notify();
        }
      });
    }
  }
};

// Initialize CartStore event listeners
CartStore.init();
