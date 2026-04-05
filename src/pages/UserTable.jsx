// src/pages/admin/ManageUsers/UserTable.jsx
import React from 'react';
import { users, getRoleName, formatDate, formatCurrency } from '../data/mockUsers';

const UserTable = () => {
  // Lọc user không bị xóa
  const activeUsers = users.filter(user => !user.isDeleted);

  // Màu sắc theo role
  const getRoleColor = (roleId) => {
    switch(roleId) {
      case 4: return 'bg-purple-500/20 text-purple-400'; // admin
      case 3: return 'bg-yellow-500/20 text-yellow-400'; // owner
      case 2: return 'bg-cyan-500/20 text-cyan-400'; // gamer
      default: return 'bg-slate-500/20 text-slate-400'; // guest
    }
  };

  return (
    <div className="p-6 bg-[#0B0E14] min-h-screen">
      <h2 className="text-2xl font-bold text-white mb-6">Danh sách User</h2>
      
      <div className="bg-[#1a1e2a] rounded-xl border border-white/10 overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead className="bg-[#131720] border-b border-white/10">
            <tr>
              <th className="p-4 text-left text-sm font-bold text-slate-400">UserID</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">RoleID</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">Username</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">FullName</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">Email</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">Phone</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">Wallet</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">EXP</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">Status</th>
              <th className="p-4 text-left text-sm font-bold text-slate-400">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map(user => (
              <tr key={user.userId} className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4 text-sm text-slate-300">{user.userId}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getRoleColor(user.roleId)}`}>
                    {getRoleName(user.roleId).toUpperCase()} ({user.roleId})
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-300">@{user.username}</td>
                <td className="p-4 text-sm text-white font-medium">{user.fullName || '—'}</td>
                <td className="p-4 text-sm text-slate-300">{user.email}</td>
                <td className="p-4 text-sm text-slate-300">{user.phoneNumber || '—'}</td>
                <td className="p-4 text-sm text-[#00F2EA] font-medium">{formatCurrency(user.walletBalance)}</td>
                <td className="p-4 text-sm text-yellow-400 font-medium">{user.expPoints?.toLocaleString()}</td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs ${user.isActive ? 'text-green-400' : 'text-red-400'}`}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                    {user.isDeleted && (
                      <span className="text-xs text-red-400">Deleted</span>
                    )}
                  </div>
                </td>
                <td className="p-4 text-sm text-slate-300">
                  {user.createdAt ? formatDate(user.createdAt) : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Tổng số: {activeUsers.length} users (hiển thị)
      </p>
    </div>
  );
};

export default UserTable;