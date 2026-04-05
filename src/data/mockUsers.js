// src/data/mockUsers.js
export const users = [
  {
    userId: 1,
    roleId: 2,
    username: "gamer_pro",
    passwordHash: "$2a$10$H4jK9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phoneNumber: "0909123456",
    walletBalance: 1500000.50,
    expPoints: 1250,
    isActive: true,
    isDeleted: false,
    createdAt: "2024-01-15T10:30:00",
    updatedAt: "2024-03-10T14:20:00"
  },
  {
    userId: 2,
    roleId: 2,
    username: "wukong_player",
    passwordHash: "$2a$10$J4kL9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Trần Thị B",
    email: "tranthib@email.com",
    phoneNumber: "0909988776",
    walletBalance: 2500000.00,
    expPoints: 2340,
    isActive: true,
    isDeleted: false,
    createdAt: "2023-11-20T08:15:00",
    updatedAt: "2024-03-15T09:30:00"
  },
  {
    userId: 3,
    roleId: 2,
    username: "cyber_gamer",
    passwordHash: "$2a$10$K4lL9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Lê Văn C",
    email: "levanc@email.com",
    phoneNumber: "0909111222",
    walletBalance: 890000.25,
    expPoints: 567,
    isActive: false,
    isDeleted: false,
    createdAt: "2024-02-05T14:20:00",
    updatedAt: "2024-03-01T11:10:00"
  },
  {
    userId: 4,
    roleId: 3,
    username: "owner_quan",
    passwordHash: "$2a$10$L4mM9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Phạm Thị D",
    email: "phamthid@email.com",
    phoneNumber: "0909777888",
    walletBalance: 45200000.00,
    expPoints: 5000,
    isActive: true,
    isDeleted: false,
    createdAt: "2023-09-10T09:00:00",
    updatedAt: "2024-03-14T13:40:00"
  },
  {
    userId: 5,
    roleId: 4,
    username: "admin_cag",
    passwordHash: "$2a$10$M4nN9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Đặng Thị F",
    email: "dangthif@email.com",
    phoneNumber: "0909444333",
    walletBalance: 999999999.00,
    expPoints: 99999,
    isActive: true,
    isDeleted: false,
    createdAt: "2023-08-01T08:00:00",
    updatedAt: "2024-03-15T16:30:00"
  },
  {
    userId: 6,
    roleId: 3,
    username: "netboss",
    passwordHash: "$2a$10$N4oO9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Hoàng Văn G",
    email: "hoangvang@email.com",
    phoneNumber: "0909666555",
    walletBalance: 28300000.75,
    expPoints: 3450,
    isActive: true,
    isDeleted: false,
    createdAt: "2023-10-15T11:30:00",
    updatedAt: "2024-03-12T10:15:00"
  },
  {
    userId: 7,
    roleId: 1,
    username: "khach_vang_lai",
    passwordHash: "$2a$10$O4pP9mN2qR7vX8yZ3wL5tA1bC6dE8fG0hI1jK2lM3nO4pP5qR6sT7uV8wX9yZ",
    fullName: "Khách Vãng Lai",
    email: "guest@cag.com",
    phoneNumber: null,
    walletBalance: 0.00,
    expPoints: 0,
    isActive: true,
    isDeleted: false,
    createdAt: "2024-03-16T00:00:00",
    updatedAt: null
  }
];

// Roles
export const roles = [
  { roleId: 1, roleName: "guest", description: "Khách vãng lai" },
  { roleId: 2, roleName: "gamer", description: "Người chơi game" },
  { roleId: 3, roleName: "owner", description: "Chủ quán net" },
  { roleId: 4, roleName: "admin", description: "Quản trị viên" }
];

// Format functions
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN');
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// Helper để lấy role name từ roleId
export const getRoleName = (roleId) => {
  const role = roles.find(r => r.roleId === roleId);
  return role ? role.roleName : 'unknown';
};