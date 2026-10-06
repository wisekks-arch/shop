/**
 * EasyShop Global UI Components
 * Header, Footer, Cart Drawer, Toast System
 */
const ShopUI = {
  // Format KRW currency
  formatPrice(num) {
    return (Number(num) || 0).toLocaleString('ko-KR') + '??;
  },

  // Render Global Navigation
  renderNavbar(active = '') {
    const root = document.getElementById('navbar-root');
    if (!root) return;

    const cartCount = CartStore.getTotalCount();
    const wishlistCount = CartStore.getWishlist().length;

    root.innerHTML = `
      <!-- Top Promotion Banner Bar -->
      <div class="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-indigo-900/40">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[10px] tracking-wide uppercase border border-amber-400/30">F/W Special</span>
            <span class="text-slate-200 hidden sm:inline">?좉퇋 媛????<strong>10,000???곗뺨 荑좏룿??/strong> 利됱떆 吏湲?</span>
            <span class="text-slate-300 sm:hidden">5留뚯썝 ?댁긽 臾대즺諛곗넚 ?쒗깮</span>
          </div>
          <div class="flex items-center gap-4 text-slate-300 text-[11px]">
            <a href="/order-lookup.html" class="hover:text-white transition flex items-center gap-1">
              <i data-lucide="truck" class="w-3.5 h-3.5 text-indigo-400"></i> 二쇰Ц/諛곗넚 議고쉶
            </a>
            <span class="text-slate-600">|</span>
            <a href="/admin.html" class="hover:text-amber-300 font-semibold text-amber-400 transition flex items-center gap-1">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> 愿由ъ옄 ?대뱶誘?            </a>
          </div>
        </div>
      </div>

      <!-- Main Sticky Navbar -->
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20 gap-4">
            
            <!-- Logo -->
            <a href="/index.html" class="flex items-center gap-3 shrink-0 group">
              <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition">
                <i data-lucide="shopping-bag" class="w-6 h-6"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition font-heading">EASY<span class="text-indigo-600">SHOP</span></span>
                <span class="text-[10px] font-bold text-slate-400 tracking-widest uppercase -mt-1">Premium Lifestyle</span>
              </div>
            </a>

            <!-- Search Bar -->
            <div class="flex-1 max-w-xl hidden md:block">
              <form id="global-search-form" action="/products.html" method="GET" class="relative">
                <input 
                  type="text" 
                  name="search"
                  id="global-search-input"
                  placeholder="李얠쑝?쒕뒗 ?곹뭹紐낆씠??釉뚮옖?쒕? 寃?됲빐蹂댁꽭??.." 
                  class="w-full pl-11 pr-24 py-2.5 rounded-full bg-slate-100 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none text-sm transition"
                />
                <i data-lucide="search" class="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
                <button type="submit" class="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-semibold shadow-xs transition">
                  寃??                </button>
              </form>
            </div>

            <!-- Action Icons -->
            <div class="flex items-center gap-2 sm:gap-4">
              <!-- Search (Mobile) -->
              <a href="/products.html" class="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-full md:hidden" title="寃??>
                <i data-lucide="search" class="w-5 h-5"></i>
              </a>

              <!-- Wishlist -->
              <a href="/products.html?filter=wishlist" class="p-2.5 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition relative group" title="?꾩떆由ъ뒪??>
                <i data-lucide="heart" class="w-5 h-5"></i>
                <span id="nav-wishlist-badge" class="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ${wishlistCount > 0 ? '' : 'hidden'}">
                  ${wishlistCount}
                </span>
              </a>

              <!-- Cart Drawer Trigger Button -->
              <button 
                type="button" 
                onclick="ShopUI.openCartDrawer()"
                class="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition shadow-xs group"
              >
                <div class="relative">
                  <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                  <span id="nav-cart-badge" class="absolute -top-2 -right-2.5 px-1.5 py-0.2 bg-amber-400 text-slate-950 text-[10px] font-black rounded-full shadow-xs">
                    ${cartCount}
                  </span>
                </div>
                <span class="hidden sm:inline">?λ컮援щ땲</span>
              </button>

              <!-- Mobile Menu Toggle -->
              <button id="mobile-menu-btn" class="p-2 text-slate-600 hover:text-slate-900 lg:hidden">
                <i data-lucide="menu" class="w-6 h-6"></i>
              </button>
            </div>

          </div>

          <!-- Secondary Category Nav -->
          <nav class="hidden lg:flex items-center gap-8 py-3 text-sm font-medium border-t border-slate-100">
            <a href="/products.html" class="flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition ${active === 'all' ? 'text-indigo-600' : ''}">
              <i data-lucide="layout-grid" class="w-4 h-4 text-indigo-500"></i> ?꾩껜 移댄뀒怨좊━
            </a>
            <a href="/products.html?category=?⑥뀡 / ?섎쪟" class="text-slate-600 hover:text-indigo-600 transition ${active === 'fashion' ? 'text-indigo-600 font-bold' : ''}">?⑥뀡 / ?섎쪟</a>
            <a href="/products.html?category=?붿???/ 媛?? class="text-slate-600 hover:text-indigo-600 transition ${active === 'digital' ? 'text-indigo-600 font-bold' : ''}">?붿???/ 媛??/a>
            <a href="/products.html?category=酉고떚 / 耳?? class="text-slate-600 hover:text-indigo-600 transition ${active === 'beauty' ? 'text-indigo-600 font-bold' : ''}">酉고떚 / 耳??/a>
            <a href="/products.html?category=由щ튃 / ?명뀒由ъ뼱" class="text-slate-600 hover:text-indigo-600 transition ${active === 'living' ? 'text-indigo-600 font-bold' : ''}">由щ튃 / ?명뀒由ъ뼱</a>
            <a href="/products.html?category=?몃뱶 / ?ㅼ튇" class="text-slate-600 hover:text-indigo-600 transition ${active === 'food' ? 'text-indigo-600 font-bold' : ''}">?몃뱶 / ?ㅼ튇</a>
            <div class="ml-auto flex items-center gap-4">
              <a href="/products.html?isBest=true" class="text-amber-600 font-bold flex items-center gap-1 hover:text-amber-700 transition">
                <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i> 踰좎뒪????궧
              </a>
              <a href="/products.html?isSale=true" class="text-rose-600 font-bold flex items-center gap-1 hover:text-rose-700 transition">
                <i data-lucide="tag" class="w-4 h-4 text-rose-500"></i> ??꾩꽭???밴?
              </a>
            </div>
          </nav>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          <a href="/products.html" class="block py-2 text-slate-800 font-bold">?꾩껜 ?곹뭹 ?먯깋</a>
          <a href="/products.html?category=?⑥뀡 / ?섎쪟" class="block py-2 text-slate-600">?⑥뀡 / ?섎쪟</a>
          <a href="/products.html?category=?붿???/ 媛?? class="block py-2 text-slate-600">?붿???/ 媛??/a>
          <a href="/products.html?category=酉고떚 / 耳?? class="block py-2 text-slate-600">酉고떚 / 耳??/a>
          <a href="/products.html?category=由щ튃 / ?명뀒由ъ뼱" class="block py-2 text-slate-600">由щ튃 / ?명뀒由ъ뼱</a>
          <a href="/products.html?category=?몃뱶 / ?ㅼ튇" class="block py-2 text-slate-600">?몃뱶 / ?ㅼ튇</a>
          <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a href="/cart.html" class="py-2 text-indigo-600 font-semibold flex items-center gap-2">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i> ?λ컮援щ땲 諛붾줈媛湲?            </a>
            <a href="/order-lookup.html" class="py-2 text-slate-700 font-medium flex items-center gap-2">
              <i data-lucide="truck" class="w-4 h-4"></i> 二쇰Ц 諛?諛곗넚議고쉶
            </a>
            <a href="/admin.html" class="py-2 text-amber-600 font-bold flex items-center gap-2">
              <i data-lucide="shield-check" class="w-4 h-4"></i> 愿由ъ옄 ?대뱶誘???쒕낫??            </a>
          </div>
        </div>
      </header>

      <!-- Cart Drawer Overlay & Panel -->
      <div id="cart-drawer-backdrop" class="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 hidden opacity-0 transition-opacity duration-300" onclick="ShopUI.closeCartDrawer()"></div>
      <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col">
        <!-- Header -->
        <div class="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div class="flex items-center gap-2">
            <i data-lucide="shopping-bag" class="w-5 h-5 text-indigo-600"></i>
            <h3 class="font-bold text-slate-900 text-lg">?λ컮援щ땲 (<span id="drawer-cart-count">0</span>)</h3>
          </div>
          <button onclick="ShopUI.closeCartDrawer()" class="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Free shipping meter -->
        <div class="px-5 py-3 bg-indigo-50/70 border-b border-indigo-100">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span id="drawer-shipping-text" class="font-bold text-indigo-950">50,000???댁긽 臾대즺諛곗넚</span>
            <span id="drawer-shipping-badge" class="font-semibold text-indigo-600">3,000??/span>
          </div>
          <div class="w-full h-2 bg-indigo-200/60 rounded-full overflow-hidden">
            <div id="drawer-shipping-bar" class="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500" style="width: 0%"></div>
          </div>
        </div>

        <!-- Item List Body -->
        <div id="drawer-item-list" class="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
          <!-- Dynamically populated -->
        </div>

        <!-- Footer / Checkout button -->
        <div class="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-500">?좏깮 ?곹뭹 ?⑷퀎</span>
            <span id="drawer-product-total" class="font-bold text-slate-900 text-base">0??/span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-500">諛곗넚鍮?/span>
            <span id="drawer-shipping-fee" class="font-bold text-slate-900">0??/span>
          </div>
          <div class="flex items-center justify-between text-base font-black pt-2 border-t border-slate-200">
            <span class="text-slate-900">理쒖쥌 寃곗젣 湲덉븸</span>
            <span id="drawer-final-amount" class="text-indigo-600 text-xl font-heading">0??/span>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-2">
            <a href="/cart.html" class="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-center rounded-xl transition text-sm">
              ?λ컮援щ땲 媛湲?            </a>
            <a href="/checkout.html" class="py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-center rounded-xl shadow-lg shadow-indigo-600/30 transition text-sm">
              諛붾줈 二쇰Ц?섍린
            </a>
          </div>
        </div>
      </div>
    `;

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Subscribe to cart updates for badges
    CartStore.subscribe(() => {
      this.updateNavBadges();
      this.renderDrawerItems();
    });
  },

  updateNavBadges() {
    const cartBadge = document.getElementById('nav-cart-badge');
    const wishlistBadge = document.getElementById('nav-wishlist-badge');
    const drawerCount = document.getElementById('drawer-cart-count');

    const totalCount = CartStore.getTotalCount();
    const wishlistCount = CartStore.getWishlist().length;

    if (cartBadge) cartBadge.innerText = totalCount;
    if (drawerCount) drawerCount.innerText = totalCount;

    if (wishlistBadge) {
      wishlistBadge.innerText = wishlistCount;
      if (wishlistCount > 0) {
        wishlistBadge.classList.remove('hidden');
      } else {
        wishlistBadge.classList.add('hidden');
      }
    }
  },

  // Drawer Open / Close
  openCartDrawer() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const drawer = document.getElementById('cart-drawer');
    if (!backdrop || !drawer) return;

    this.renderDrawerItems();
    backdrop.classList.remove('hidden');
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      drawer.classList.remove('translate-x-full');
    }, 10);
  },

  closeCartDrawer() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const drawer = document.getElementById('cart-drawer');
    if (!backdrop || !drawer) return;

    backdrop.classList.add('opacity-0');
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  },

  renderDrawerItems() {
    const container = document.getElementById('drawer-item-list');
    if (!container) return;

    const items = CartStore.getItems();
    const summary = CartStore.getSummary();

    // Free shipping calculation
    const progress = Math.min(100, (summary.productTotal / summary.freeShippingThreshold) * 100);
    const meterBar = document.getElementById('drawer-shipping-bar');
    const meterText = document.getElementById('drawer-shipping-text');
    const meterBadge = document.getElementById('drawer-shipping-badge');

    if (meterBar) meterBar.style.width = `${progress}%`;
    if (meterText) {
      if (summary.remainingForFreeShipping > 0) {
        meterText.innerHTML = `<strong>${ShopUI.formatPrice(summary.remainingForFreeShipping)}</strong> ???댁쑝硫?臾대즺諛곗넚!`;
        if (meterBadge) meterBadge.innerText = '諛곗넚鍮?3,000??;
      } else {
        meterText.innerHTML = `<span class="text-emerald-600 font-bold">?럦 臾대즺諛곗넚 ?쒗깮 ?곸슜 ?꾨즺!</span>`;
        if (meterBadge) meterBadge.innerText = '臾대즺';
      }
    }

    // Totals
    const pTotal = document.getElementById('drawer-product-total');
    const sFee = document.getElementById('drawer-shipping-fee');
    const fAmount = document.getElementById('drawer-final-amount');

    if (pTotal) pTotal.innerText = ShopUI.formatPrice(summary.productTotal);
    if (sFee) sFee.innerText = summary.shippingFee === 0 ? '臾대즺' : ShopUI.formatPrice(summary.shippingFee);
    if (fAmount) fAmount.innerText = ShopUI.formatPrice(summary.finalAmount);

    if (items.length === 0) {
      container.innerHTML = `
        <div class="py-16 text-center text-slate-400">
          <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto stroke-1 mb-3 text-slate-300"></i>
          <p class="font-medium text-slate-600">?λ컮援щ땲媛 鍮꾩뼱 ?덉뒿?덈떎.</p>
          <p class="text-xs text-slate-400 mt-1">留덉쓬???쒕뒗 ?곹뭹???댁븘蹂댁꽭??</p>
          <a href="/products.html" onclick="ShopUI.closeCartDrawer()" class="inline-block mt-4 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-100 transition">
            ?곹뭹 ?섎윭蹂닿린
          </a>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = items.map((item, index) => `
      <div class="flex gap-3 pt-3 first:pt-0">
        <img src="${item.thumbnail}" alt="${item.name}" class="w-16 h-16 object-cover rounded-xl border border-slate-200 shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-800 line-clamp-1">${item.name}</h4>
          ${item.selectedOption ? `<p class="text-[11px] text-slate-400 mt-0.5">${item.selectedOption}</p>` : ''}
          <div class="flex items-center justify-between mt-2">
            <span class="text-xs font-black text-indigo-600">${ShopUI.formatPrice(item.price)}</span>
            <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
              <button onclick="CartStore.updateQuantity('${item.id}', '${item.selectedOption}', ${item.quantity - 1})" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100">-</button>
              <span class="px-2 text-xs font-bold">${item.quantity}</span>
              <button onclick="CartStore.updateQuantity('${item.id}', '${item.selectedOption}', ${item.quantity + 1})" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100">+</button>
            </div>
            <button onclick="CartStore.removeItem('${item.id}', '${item.selectedOption}')" class="text-slate-400 hover:text-rose-500 p-1">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  // Render Footer
  renderFooter() {
    const root = document.getElementById('footer-root');
    if (!root) return;

    root.innerHTML = `
      <footer class="bg-slate-900 text-slate-400 text-sm mt-20 border-t border-slate-800">
        <!-- Trust badge bar -->
        <div class="border-b border-slate-800/80 py-8 bg-slate-950/40">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <i data-lucide="shield-check" class="w-5 h-5"></i>
              </div>
              <div>
                <h5 class="text-slate-200 font-bold text-xs">100% ?뺥뭹 蹂댁옣</h5>
                <p class="text-[11px] text-slate-400">泥좎???寃?섎? 嫄곗튇 ?뺥뭹 ?먮ℓ</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <i data-lucide="truck" class="w-5 h-5"></i>
              </div>
              <div>
                <h5 class="text-slate-200 font-bold text-xs">?덉떖 鍮좊Ⅸ 諛곗넚</h5>
                <p class="text-[11px] text-slate-400">?ㅽ썑 2???댁쟾 二쇰Ц ?뱀씪 異쒓퀬</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <i data-lucide="refresh-cw" class="w-5 h-5"></i>
              </div>
              <div>
                <h5 class="text-slate-200 font-bold text-xs">7??臾대즺 諛섑뭹</h5>
                <p class="text-[11px] text-slate-400">?⑥닚 蹂?щ룄 ?먯돩??諛섑뭹 ?좎껌</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <i data-lucide="headphones" class="w-5 h-5"></i>
              </div>
              <div>
                <h5 class="text-slate-200 font-bold text-xs">24/7 怨좉컼 留뚯” ?쇳꽣</h5>
                <p class="text-[11px] text-slate-400">1:1 ?ㅼ떆媛??곷떞 諛??좎냽 ?묐?</p>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="space-y-4">
              <div class="flex items-center gap-2 text-white font-black text-xl font-heading">
                <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                  <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                </div>
                EASY<span class="text-indigo-400">SHOP</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                ?댁???EasyShop)? ?쇱긽?????밸퀎?섍쾶 留뚮뱾?댁＜???꾨━誘몄뾼 ?쇱씠?꾩뒪????먮젅?댁뀡 ?쇳븨紐곗엯?덈떎.
              </p>
              <div class="text-xs text-slate-500">
                짤 2026 EasyShop Inc. All Rights Reserved.
              </div>
            </div>

            <div>
              <h4 class="text-white font-bold text-xs uppercase tracking-wider mb-4">怨좉컼?쇳꽣 ?덈궡</h4>
              <p class="text-2xl font-black text-indigo-400 font-heading">1588-0000</p>
              <p class="text-xs text-slate-400 mt-2">?댁쁺?쒓컙: ?됱씪 09:00 ~ 18:00 (?먯떖 12:00 ~ 13:00)</p>
              <p class="text-xs text-slate-400">二쇰쭚 諛?怨듯쑕???대Т (1:1 臾몄쓽 寃뚯떆???댁슜)</p>
            </div>

            <div>
              <h4 class="text-white font-bold text-xs uppercase tracking-wider mb-4">?쇳븨 媛?대뱶</h4>
              <ul class="space-y-2 text-xs">
                <li><a href="/products.html" class="hover:text-white transition">移댄뀒怨좊━ ?꾩껜蹂닿린</a></li>
                <li><a href="/order-lookup.html" class="hover:text-white transition">二쇰Ц / 諛곗넚 ?ㅼ떆媛?議고쉶</a></li>
                <li><a href="/cart.html" class="hover:text-white transition">?λ컮援щ땲 愿由?/a></li>
                <li><a href="/admin.html" class="hover:text-amber-400 transition font-semibold text-amber-400">愿由ъ옄 ??쒕낫??/a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-bold text-xs uppercase tracking-wider mb-4">?ъ뾽???뺣낫</h4>
              <div class="text-[11px] text-slate-400 space-y-1 leading-relaxed">
                <p>?곹샇紐? (二??댁???| ??? ?띻만??/p>
                <p>?ъ뾽?먮벑濡앸쾲?? 123-45-67890</p>
                <p>?듭떊?먮ℓ?낆떊怨? ??026-?쒖슱媛뺣궓-01234??/p>
                <p>二쇱냼: ?쒖슱?밸퀎??媛뺣궓援??뚰뿤?濡?152 18痢?/p>
                <p>媛쒖씤?뺣낫梨낆엫?? info@easyshop.kr</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  // Toast Notification
  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-slate-900 text-white border-emerald-500/40' :
                    type === 'error' ? 'bg-rose-600 text-white border-rose-400' :
                    'bg-indigo-600 text-white border-indigo-400';
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info';

    toast.className = `${bgClass} border shadow-2xl px-4 py-3 rounded-2xl flex items-center gap-3 pointer-events-auto transition-all duration-300 transform translate-y-4 opacity-0 text-sm font-semibold max-w-sm`;
    toast.innerHTML = `
      <i data-lucide="${icon}" class="w-5 h-5 shrink-0"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};