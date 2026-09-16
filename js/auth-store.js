/**
 * EasyShop User Authentication & Membership Store
 * LocalStorage 기반 회원가입, 로그인, 세션 관리 모듈
 */
const AuthStore = {
  USERS_KEY: 'easyshop_users',
  SESSION_KEY: 'easyshop_session',
  listeners: [],

  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    const user = this.getCurrentUser();
    this.listeners.forEach(fn => {
      try { fn(user); } catch (e) { console.error(e); }
    });
    window.dispatchEvent(new CustomEvent('auth-changed', { detail: { user } }));
  },

  getUsers() {
    try {
      const data = localStorage.getItem(this.USERS_KEY);
      return data ? JSON.parse(data) : [
        {
          id: 'user-default-1',
          email: 'demo@easyshop.kr',
          password: 'password123',
          name: '이지샵체험회원',
          phone: '010-1234-5678',
          address: '서울특별시 강남구 테헤란로 152 18층',
          points: 3000,
          joinedAt: '2026-09-01'
        }
      ];
    } catch (e) {
      return [];
    }
  },

  getCurrentUser() {
    try {
      const data = localStorage.getItem(this.SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  signUp(userData) {
    const users = this.getUsers();
    
    // Check duplication
    const exists = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (exists) {
      return { success: false, message: '이미 가입된 이메일 계정입니다.' };
    }

    const newUser = {
      id: 'user-' + Date.now(),
      email: userData.email.trim(),
      password: userData.password,
      name: userData.name.trim(),
      phone: userData.phone.trim(),
      address: userData.address ? userData.address.trim() : '',
      points: 3000, // 웰컴 마일리지
      coupon: 'WELCOME10', // 10% 웰컴 쿠폰
      joinedAt: new Date().toISOString().slice(0, 10)
    };

    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    // Auto login
    this.login(newUser.email, newUser.password);
    return { success: true, user: newUser, message: '회원가입이 완료되었습니다! 웰컴 마일리지 3,000P가 지급되었습니다.' };
  },

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );

    if (!user) {
      return { success: false, message: '이메일 또는 비밀번호가 일치하지 않습니다.' };
    }

    const sessionData = {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      points: user.points || 0
    };

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    this.notify();
    return { success: true, user: sessionData };
  },

  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    this.notify();
    return { success: true };
  }
};
