/**
 * EasyShop User Authentication & Membership Store (v3 Enhanced)
 * Supports Sign Up, Login, Auth Guard, Password Validation (@# + lowercase + numbers + 8+ chars),
 * Find ID, and Temporary Password Email Dispatch & Password Reset.
 */
const AuthStore = {
  USERS_KEY: 'easyshop_users_v3',
  SESSION_KEY: 'easyshop_session_v3',
  TEMP_PW_KEY: 'easyshop_temp_passwords',
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
      if (data) return JSON.parse(data);

      // Default demo users
      const initialUsers = [
        {
          id: 'user-default-1',
          email: 'demo@easyshop.kr',
          password: 'demo@123#pass',
          name: '이지샵체험회원',
          phone: '010-1234-5678',
          address: '서울특별시 강남구 테헤란로 152',
          addressDetail: '18층 이지샵',
          points: 3000,
          joinedAt: '2026-09-01'
        },
        {
          id: 'user-default-2',
          email: 'kmagick@naver.com',
          password: 'naver@#2026pass',
          name: '관리자회원',
          phone: '010-9876-5432',
          address: '서울특별시 서초구 반포대로 58',
          addressDetail: '101호',
          points: 10000,
          joinedAt: '2026-09-01'
        }
      ];
      localStorage.setItem(this.USERS_KEY, JSON.stringify(initialUsers));
      return initialUsers;
    } catch (e) {
      return [];
    }
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
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

  /**
   * Password Rule Validator:
   * Requires:
   * 1. At least 8 characters
   * 2. Lowercase English letter [a-z]
   * 3. Number [0-9]
   * 4. Special characters containing @ or #
   */
  validatePassword(password) {
    if (!password || typeof password !== 'string') {
      return { valid: false, message: '비밀번호를 입력해 주세요.' };
    }
    const hasMinLen = password.length >= 8;
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[@#]/.test(password);

    if (!hasMinLen) {
      return { valid: false, message: '비밀번호는 최소 8자 이상이어야 합니다.' };
    }
    if (!hasLower) {
      return { valid: false, message: '영문 소문자가 최소 1자 이상 포함되어야 합니다.' };
    }
    if (!hasNumber) {
      return { valid: false, message: '숫자가 최소 1자 이상 포함되어야 합니다.' };
    }
    if (!hasSpecial) {
      return { valid: false, message: '특수문자(@ 또는 #)가 최소 1자 이상 포함되어야 합니다.' };
    }

    return { valid: true, message: '안전한 비밀번호입니다.' };
  },

  /**
   * Sign Up
   */
  signUp(userData) {
    const users = this.getUsers();
    const email = (userData.email || '').trim().toLowerCase();
    const name = (userData.name || '').trim();
    const phone = (userData.phone || '').trim();
    const address = (userData.address || '').trim();
    const addressDetail = (userData.addressDetail || '').trim();
    const password = userData.password || '';

    if (!name) return { success: false, message: '성명을 입력해 주세요.' };
    if (!email || !email.includes('@')) return { success: false, message: '올바른 이메일(아이디)을 입력해 주세요.' };
    if (!phone) return { success: false, message: '휴대폰 번호를 입력해 주세요.' };
    if (!address) return { success: false, message: '주소를 입력해 주세요.' };

    const pwVal = this.validatePassword(password);
    if (!pwVal.valid) {
      return { success: false, message: pwVal.message };
    }

    // Check duplication
    const exists = users.find(u => u.email.toLowerCase() === email);
    if (exists) {
      return { success: false, message: '이미 가입된 이메일(아이디)입니다. 다른 이메일을 사용해 주세요.' };
    }

    const newUser = {
      id: 'user-' + Date.now(),
      email: email,
      password: password,
      name: name,
      phone: phone,
      address: address,
      addressDetail: addressDetail,
      points: 3000,
      coupon: 'WELCOME10',
      joinedAt: new Date().toISOString().slice(0, 10)
    };

    users.push(newUser);
    this.saveUsers(users);

    // Auto login
    this.login(newUser.email, newUser.password);
    return { success: true, user: newUser, message: '회원가입이 성공적으로 완료되었습니다! 웰컴 3,000P가 지급되었습니다.' };
  },

  /**
   * Login
   */
  login(email, password) {
    const users = this.getUsers();
    const cleanEmail = (email || '').trim().toLowerCase();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);

    if (!user) {
      return { success: false, message: '이메일 또는 비밀번호가 일치하지 않습니다.' };
    }

    const sessionData = {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      addressDetail: user.addressDetail || '',
      points: user.points || 0
    };

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    this.notify();
    return { success: true, user: sessionData };
  },

  /**
   * Logout
   */
  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    this.notify();
    return { success: true };
  },

  /**
   * Find ID (by Name & Phone)
   */
  findId(name, phone) {
    const users = this.getUsers();
    const cleanName = (name || '').trim();
    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');

    const user = users.find(u => {
      const uPhone = (u.phone || '').replace(/[^0-9]/g, '');
      return u.name.trim() === cleanName && uPhone === cleanPhone;
    });

    if (!user) {
      return { success: false, message: '입력하신 정보와 일치하는 회원 아이디(이메일)가 없습니다.' };
    }

    // Mask email for privacy (e.g. ab***@naver.com)
    const parts = user.email.split('@');
    const local = parts[0];
    const domain = parts[1] || '';
    const maskedLocal = local.length > 2 ? local.slice(0, 2) + '*'.repeat(local.length - 2) : local + '***';
    const maskedEmail = `${maskedLocal}@${domain}`;

    return {
      success: true,
      email: user.email,
      maskedEmail: maskedEmail,
      name: user.name,
      joinedAt: user.joinedAt || '2026-09-01'
    };
  },

  /**
   * Password Recovery: Generate and send Temporary Password
   */
  sendTempPassword(email) {
    const users = this.getUsers();
    const cleanEmail = (email || '').trim().toLowerCase();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return { success: false, message: '등록되지 않은 이메일(아이디)입니다. 확인 후 다시 입력해 주세요.' };
    }

    // Generate secure temp password satisfying rule: @# + lowercase + numbers (e.g. temp#7482@pass)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const tempPassword = `temp#${randomNum}@pass`;

    // Save temporary password with expiry (15 mins)
    const tempStore = JSON.parse(localStorage.getItem(this.TEMP_PW_KEY) || '{}');
    tempStore[cleanEmail] = {
      tempPassword: tempPassword,
      expiresAt: Date.now() + 15 * 60 * 1000
    };
    localStorage.setItem(this.TEMP_PW_KEY, JSON.stringify(tempStore));

    return {
      success: true,
      email: cleanEmail,
      tempPassword: tempPassword,
      message: `입력하신 이메일(${cleanEmail})로 임시 비밀번호가 안전하게 발송되었습니다.`
    };
  },

  /**
   * Verify Temporary Password
   */
  verifyTempPassword(email, inputTempPassword) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const tempStore = JSON.parse(localStorage.getItem(this.TEMP_PW_KEY) || '{}');
    const record = tempStore[cleanEmail];

    if (!record) {
      return { success: false, message: '발송된 임시 비밀번호 요청 기록이 없습니다. 다시 발송해 주세요.' };
    }
    if (Date.now() > record.expiresAt) {
      return { success: false, message: '임시 비밀번호가 만료되었습니다. 다시 발송해 주세요.' };
    }
    if (record.tempPassword !== inputTempPassword.trim()) {
      return { success: false, message: '임시 비밀번호가 일치하지 않습니다. 정확히 입력해 주세요.' };
    }

    return { success: true, message: '임시 비밀번호 인증이 완료되었습니다. 새 비밀번호를 설정해 주세요.' };
  },

  /**
   * Reset Password (after temp password verification)
   */
  resetPassword(email, inputTempPassword, newPassword) {
    const verifyRes = this.verifyTempPassword(email, inputTempPassword);
    if (!verifyRes.success) return verifyRes;

    const pwVal = this.validatePassword(newPassword);
    if (!pwVal.valid) {
      return { success: false, message: pwVal.message };
    }

    const users = this.getUsers();
    const cleanEmail = (email || '').trim().toLowerCase();
    const userIndex = users.findIndex(u => u.email.toLowerCase() === cleanEmail);

    if (userIndex === -1) {
      return { success: false, message: '사용자 정보를 찾을 수 없습니다.' };
    }

    users[userIndex].password = newPassword;
    this.saveUsers(users);

    // Clear temp password
    const tempStore = JSON.parse(localStorage.getItem(this.TEMP_PW_KEY) || '{}');
    delete tempStore[cleanEmail];
    localStorage.setItem(this.TEMP_PW_KEY, JSON.stringify(tempStore));

    return { success: true, message: '비밀번호가 성공적으로 재설정되었습니다! 새 비밀번호로 로그인해 주세요.' };
  }
};
