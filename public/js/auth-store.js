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
      let users = data ? JSON.parse(data) : null;

      // Base default users
      const initialUsers = [
        {
          id: 'user-default-2',
          email: 'kmagick@naver.com',
          password: 'naver@#2026pass',
          name: '관리자회원(kmagick)',
          phone: '010-9876-5432',
          address: '서울특별시 서초구 반포대로 58',
          addressDetail: '101호',
          points: 10000,
          grade: 'VIP',
          status: '정상',
          orderCount: 15,
          totalSpent: 1850000,
          device: 'PC (Windows)',
          lastLogin: '2026-10-09 16:30:00',
          joinedAt: '2026-09-01'
        },
        {
          id: 'user-default-3',
          email: 'kks@do-best.co.kr',
          password: 'kks@#2026pass',
          name: '관리자회원(kks)',
          phone: '010-5555-7777',
          address: '서울특별시 강남구 테헤란로 152',
          addressDetail: '1802호',
          points: 10000,
          grade: 'VIP',
          status: '정상',
          orderCount: 22,
          totalSpent: 2940000,
          device: 'PC (Windows)',
          lastLogin: '2026-10-09 16:45:00',
          joinedAt: '2026-09-01'
        },
        {
          id: 'user-default-1',
          email: 'demo@easyshop.kr',
          password: 'demo@123#pass',
          name: '이지샵체험회원',
          phone: '010-1234-5678',
          address: '서울특별시 강남구 테헤란로 152',
          addressDetail: '18층 이지샵',
          points: 3000,
          grade: '일반',
          status: '정상',
          orderCount: 2,
          totalSpent: 128000,
          device: 'Mobile (iOS)',
          lastLogin: '2026-10-08 14:10:00',
          joinedAt: '2026-09-01'
        },
        {
          id: 'usr-1001',
          email: 'kim.minjun@gmail.com',
          name: '김민준',
          phone: '010-3849-1928',
          grade: 'VIP',
          points: 45000,
          orderCount: 18,
          totalSpent: 2450000,
          status: '정상',
          device: 'Mobile (iOS)',
          lastLogin: '2026-10-06 17:35:12',
          joinedAt: '2026-03-15',
          address: '서울특별시 강남구 테헤란로 152',
          addressDetail: '강남파이낸스센터 12층'
        },
        {
          id: 'usr-1002',
          email: 'lee.seoyeon@naver.com',
          name: '이서연',
          phone: '010-9281-4710',
          grade: 'GOLD',
          points: 21000,
          orderCount: 9,
          totalSpent: 1120000,
          status: '정상',
          device: 'Mobile (Android)',
          lastLogin: '2026-10-06 16:50:20',
          joinedAt: '2026-04-02',
          address: '경기도 성남시 분당구 판교역로 235',
          addressDetail: '에이치스퀘어 N동 801호'
        },
        {
          id: 'usr-1003',
          email: 'park.dohyun@kakao.com',
          name: '박도현',
          phone: '010-7712-3948',
          grade: 'VIP',
          points: 68000,
          orderCount: 24,
          totalSpent: 3890000,
          status: '정상',
          device: 'PC (Windows)',
          lastLogin: '2026-10-06 17:42:05',
          joinedAt: '2026-02-10',
          address: '부산광역시 해운대구 센텀중앙로 78',
          addressDetail: '센텀타워 1503호'
        }
      ];

      if (!users || !Array.isArray(users) || users.length === 0) {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(initialUsers));
        return initialUsers;
      }

      // Ensure admin accounts exist in users list
      const adminEmails = ['kmagick@naver.com', 'kks@do-best.co.kr'];
      adminEmails.forEach(admEmail => {
        if (!users.some(u => (u.email || '').toLowerCase() === admEmail)) {
          const defaultAdmin = initialUsers.find(u => u.email === admEmail);
          if (defaultAdmin) users.push(defaultAdmin);
        }
      });

      // Normalize missing admin attributes for all users
      users.forEach(u => {
        if (!u.grade) u.grade = '일반';
        if (!u.status) u.status = '정상';
        if (typeof u.orderCount !== 'number') u.orderCount = 0;
        if (typeof u.totalSpent !== 'number') u.totalSpent = 0;
        if (!u.joinedAt) u.joinedAt = '2026-09-01';
        if (!u.device) u.device = 'PC (Web)';
      });

      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      return users;
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

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = dateStr + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');

    const newUser = {
      id: 'usr-' + Date.now().toString().slice(-6),
      email: email,
      password: password,
      name: name,
      phone: phone,
      address: address,
      addressDetail: addressDetail,
      points: 3000,
      coupon: 'WELCOME10',
      grade: '일반',
      status: '신규',
      orderCount: 0,
      totalSpent: 0,
      device: typeof navigator !== 'undefined' && /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'PC (Web)',
      lastLogin: timeStr,
      joinedAt: dateStr
    };

    // Unshift so the newly registered user appears at the top of the admin table
    users.unshift(newUser);
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
  },

  /**
   * Update Profile & Password
   */
  updateProfile(data) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, message: '로그인이 필요한 서비스입니다.' };
    }

    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id || u.email.toLowerCase() === currentUser.email.toLowerCase());
    if (userIndex === -1) {
      return { success: false, message: '회원 정보를 찾을 수 없습니다.' };
    }

    const targetUser = users[userIndex];

    const name = (data.name || '').trim();
    const phone = (data.phone || '').trim();
    const address = (data.address || '').trim();
    const addressDetail = (data.addressDetail || '').trim();

    if (!name) return { success: false, message: '성명을 입력해 주세요.' };
    if (!phone) return { success: false, message: '휴대폰 번호를 입력해 주세요.' };
    if (!address) return { success: false, message: '주소를 입력해 주세요.' };

    // If changing password
    if (data.newPassword) {
      if (!data.currentPassword) {
        return { success: false, message: '비밀번호를 변경하려면 현재 비밀번호를 입력해 주세요.' };
      }
      if (targetUser.password !== data.currentPassword) {
        return { success: false, message: '현재 비밀번호가 일치하지 않습니다.' };
      }
      const pwVal = this.validatePassword(data.newPassword);
      if (!pwVal.valid) {
        return { success: false, message: pwVal.message };
      }
      if (data.newPassword !== data.confirmNewPassword) {
        return { success: false, message: '새 비밀번호 확인이 일치하지 않습니다.' };
      }
      targetUser.password = data.newPassword;
    }

    // Update fields
    targetUser.name = name;
    targetUser.phone = phone;
    targetUser.address = address;
    targetUser.addressDetail = addressDetail;
    if (data.points !== undefined) targetUser.points = data.points;

    users[userIndex] = targetUser;
    this.saveUsers(users);

    // Update Session
    const updatedSession = {
      ...currentUser,
      name: targetUser.name,
      phone: targetUser.phone,
      address: targetUser.address,
      addressDetail: targetUser.addressDetail,
      points: targetUser.points || 0
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(updatedSession));
    this.notify();

    return {
      success: true,
      user: updatedSession,
      message: '회원 정보가 성공적으로 수정되었습니다.'
    };
  },

  /**
   * Get available coupons for current user
   */
  POINTS_LEDGER_KEY: 'easyshop_points_ledger_v2',
  COUPONS_LEDGER_KEY: 'easyshop_coupons_ledger_v2',

  /**
   * Get points history for user
   */
  getPointsHistory(targetUserId) {
    const user = this.getCurrentUser();
    const uid = targetUserId || (user ? user.id : null);
    if (!uid) return [];

    let ledger = {};
    try {
      ledger = JSON.parse(localStorage.getItem(this.POINTS_LEDGER_KEY) || '{}');
    } catch (e) { ledger = {}; }

    if (ledger[uid] && Array.isArray(ledger[uid]) && ledger[uid].length > 0) {
      return ledger[uid];
    }

    // Default rich sample points history for user
    const currentPoints = (user && user.id === uid) ? (user.points || 0) : 38136;
    const defaultHistory = [
      {
        id: 'pt-2026-008',
        date: '2026-10-07 14:30',
        type: '적립',
        reason: '포토 상품평 작성 리워드 적립',
        place: '이지샵 온라인몰',
        amount: 2000,
        balance: currentPoints,
        expireDate: '2027-10-07'
      },
      {
        id: 'pt-2026-007',
        date: '2026-09-28 11:20',
        type: '적립',
        reason: '한가위 명절 쇼핑 축제 특별 적립',
        place: '이지샵 이벤트',
        amount: 10000,
        balance: currentPoints - 2000,
        expireDate: '2027-09-28'
      },
      {
        id: 'pt-2026-006',
        date: '2026-09-15 15:30',
        type: '사용',
        reason: '주문 결제 포인트 차감 (주문번호 ORD-20260915-4421)',
        place: '이지샵 결제시스템',
        amount: -5000,
        balance: currentPoints - 12000,
        expireDate: '-'
      },
      {
        id: 'pt-2026-005',
        date: '2026-08-20 16:45',
        type: '적립',
        reason: '여름 바캉스 시즌 기획전 구매 추가 적립',
        place: '이지샵 온라인몰',
        amount: 15000,
        balance: currentPoints - 7000,
        expireDate: '2027-08-20'
      },
      {
        id: 'pt-2026-004',
        date: '2026-07-10 18:10',
        type: '사용',
        reason: '주문 결제 포인트 차감 (주문번호 ORD-20260710-1092)',
        place: '이지샵 결제시스템',
        amount: -3000,
        balance: currentPoints - 22000,
        expireDate: '-'
      },
      {
        id: 'pt-2026-003',
        date: '2026-05-01 09:15',
        type: '적립',
        reason: '봄맞이 매일 출석체크 100% 달성 보너스',
        place: '이지샵 이벤트',
        amount: 5000,
        balance: currentPoints - 19000,
        expireDate: '2027-05-01'
      },
      {
        id: 'pt-2026-002',
        date: '2026-03-15 10:00',
        type: '적립',
        reason: '신규 회원가입 축하 웰컴 포인트 지급',
        place: '이지샵 본사',
        amount: 10000,
        balance: currentPoints - 24000,
        expireDate: '2027-03-15'
      },
      {
        id: 'pt-2025-001',
        date: '2025-11-20 14:00',
        type: '적립',
        reason: '2025 블랙프라이데이 사전 예약 감사 리워드',
        place: '이지샵 이벤트',
        amount: 4136,
        balance: 4136,
        expireDate: '2026-11-20'
      }
    ];

    ledger[uid] = defaultHistory;
    localStorage.setItem(this.POINTS_LEDGER_KEY, JSON.stringify(ledger));
    return defaultHistory;
  },

  /**
   * Add a point transaction
   */
  addPointsTransaction({ amount, type, reason, place, expireDate }) {
    const user = this.getCurrentUser();
    if (!user) return false;

    const history = this.getPointsHistory(user.id);
    const newTx = {
      id: 'pt-' + Date.now(),
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      type: type || (amount > 0 ? '적립' : '사용'),
      reason: reason || (amount > 0 ? '이벤트/구매 적립' : '주문 결제 사용'),
      place: place || '이지샵 온라인몰',
      amount: amount,
      balance: user.points || 0,
      expireDate: expireDate || (type === '사용' || amount < 0 ? '-' : new Date(Date.now() + 365*24*3600*1000).toISOString().slice(0, 10))
    };

    history.unshift(newTx);
    let ledger = {};
    try {
      ledger = JSON.parse(localStorage.getItem(this.POINTS_LEDGER_KEY) || '{}');
    } catch(e) { ledger = {}; }
    ledger[user.id] = history;
    localStorage.setItem(this.POINTS_LEDGER_KEY, JSON.stringify(ledger));
    return true;
  },

  /**
   * Get all user coupons with detailed status (사용가능, 사용완료, 기간만료)
   */
  getAllUserCoupons(targetUserId) {
    const user = this.getCurrentUser();
    const uid = targetUserId || (user ? user.id : null);
    if (!uid) return [];

    let ledger = {};
    try {
      ledger = JSON.parse(localStorage.getItem(this.COUPONS_LEDGER_KEY) || '{}');
    } catch (e) { ledger = {}; }

    let coupons = ledger[uid];

    if (!coupons || !Array.isArray(coupons) || coupons.length === 0) {
      coupons = [
        {
          id: 'cp-welcome-10k',
          name: '신규가입 웰컴 10,000원 할인쿠폰',
          discount: 10000,
          minOrder: 50000,
          issuedAt: '2026-09-01',
          issueReason: '신규 회원가입 축하 웰컴 팩',
          expiresAt: '2026-12-31',
          status: '사용가능',
          usedAt: null,
          usedWhere: '-'
        },
        {
          id: 'cp-weekend-3k',
          name: '주말 특별 3,000원 할인쿠폰',
          discount: 3000,
          minOrder: 20000,
          issuedAt: '2026-10-01',
          issueReason: '주말 정기 깜짝 쇼핑 지원',
          expiresAt: '2026-11-15',
          status: '사용가능',
          usedAt: null,
          usedWhere: '-'
        },
        {
          id: 'cp-autumn-15p',
          name: '가을 신상품 전용 15,000원 특별쿠폰',
          discount: 15000,
          minOrder: 70000,
          issuedAt: '2026-09-20',
          issueReason: 'F/W 패션 기획전 감사 쿠폰',
          expiresAt: '2026-10-31',
          status: '사용가능',
          usedAt: null,
          usedWhere: '-'
        },
        {
          id: 'cp-first-5k',
          name: '첫구매 감사 5,000원 할인쿠폰',
          discount: 5000,
          minOrder: 30000,
          issuedAt: '2026-09-10',
          issueReason: '첫 주문 감사 프로모션',
          expiresAt: '2026-10-10',
          status: '사용완료',
          usedAt: '2026-09-15 15:30',
          usedWhere: '이지샵 온라인몰 (주문 ORD-20260915-4421)'
        },
        {
          id: 'cp-chuseok-7k',
          name: '추석 한가위 7,000원 특별 할인쿠폰',
          discount: 7000,
          minOrder: 40000,
          issuedAt: '2026-09-20',
          issueReason: '한가위 명절 쇼핑 지원금',
          expiresAt: '2026-09-30',
          status: '사용완료',
          usedAt: '2026-09-28 11:20',
          usedWhere: '이지샵 온라인몰 (주문 ORD-20260928-8812)'
        },
        {
          id: 'cp-summer-5k',
          name: '2026 바캉스 썸머 5,000원 할인쿠폰',
          discount: 5000,
          minOrder: 30000,
          issuedAt: '2026-07-01',
          issueReason: '여름 시즌 기획전 이벤트',
          expiresAt: '2026-08-31',
          status: '기간만료',
          usedAt: null,
          usedWhere: '미사용 자동소멸'
        },
        {
          id: 'cp-yearend-10k',
          name: '2025 연말 결산 감사 10,000원 쿠폰',
          discount: 10000,
          minOrder: 50000,
          issuedAt: '2025-12-01',
          issueReason: '2025 고객 감사 대축제',
          expiresAt: '2025-12-31',
          status: '기간만료',
          usedAt: null,
          usedWhere: '미사용 자동소멸'
        }
      ];
      ledger[uid] = coupons;
      localStorage.setItem(this.COUPONS_LEDGER_KEY, JSON.stringify(ledger));
    }

    // Dynamic expiry evaluation: 만약 유효기간이 지났고 사용완료가 아니면 실시간으로 '기간만료' 처리
    const todayStr = new Date().toISOString().slice(0, 10);
    coupons = coupons.map(c => {
      if (c.status !== '사용완료' && c.expiresAt && c.expiresAt < todayStr) {
        return { ...c, status: '기간만료', usedWhere: c.usedWhere === '-' ? '기간만료 자동소멸' : c.usedWhere };
      }
      return c;
    });

    return coupons;
  },

  /**
   * Get available coupons for checkout
   */
  getUserCoupons() {
    const all = this.getAllUserCoupons();
    return all.filter(c => c.status === '사용가능');
  },

  /**
   * Deduct points from current user
   */
  deductPoints(amount, reason = '주문 결제 포인트 사용', place = '이지샵 주문결제') {
    const deductAmount = parseInt(amount) || 0;
    if (deductAmount <= 0) return true;

    const user = this.getCurrentUser();
    if (!user) return false;

    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === user.id || u.email === user.email);
    if (idx >= 0) {
      const newPoints = Math.max(0, (users[idx].points || 0) - deductAmount);
      users[idx].points = newPoints;
      this.saveUsers(users);

      const updatedUser = { ...user, points: newPoints };
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(updatedUser));
      
      // Record transaction
      this.addPointsTransaction({
        amount: -deductAmount,
        type: '사용',
        reason: reason,
        place: place
      });

      this.notify();
      return true;
    }
    return false;
  },

  /**
   * Mark a coupon as used
   */
  useCoupon(couponId, where = '이지샵 온라인몰') {
    if (!couponId) return true;
    const user = this.getCurrentUser();
    if (!user) return false;

    let ledger = {};
    try {
      ledger = JSON.parse(localStorage.getItem(this.COUPONS_LEDGER_KEY) || '{}');
    } catch(e) { ledger = {}; }

    let coupons = ledger[user.id] || this.getAllUserCoupons(user.id);
    const target = coupons.find(c => c.id === couponId);
    if (target) {
      target.status = '사용완료';
      target.usedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      target.usedWhere = where;
      ledger[user.id] = coupons;
      localStorage.setItem(this.COUPONS_LEDGER_KEY, JSON.stringify(ledger));
      this.notify();
      return true;
    }
    return false;
  }
};
