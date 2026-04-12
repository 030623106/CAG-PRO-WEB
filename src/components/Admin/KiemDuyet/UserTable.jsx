import React, { useState, useEffect } from 'react';

const UserTable = ({ users }) => {
  const [localUsers, setLocalUsers] = useState([]);

  useEffect(() => {
    if (users) {
      setLocalUsers(users);
    }
  }, [users]);

  // Xử lý MỞ KHÓA (UNBAN)
  const handleUnban = (index) => {
    const updatedUsers = [...localUsers];
    updatedUsers[index].status = 'ACTIVE';
    updatedUsers[index].statusColor = 'bg-green-900/50 text-green-400';
    setLocalUsers(updatedUsers);
    // Hiện lại thông báo
    window.alert(`Đã thực hiện hành động UNBAN cho user: ${updatedUsers[index].name}`);
  };

  // Xử lý KHÓA (BAN)
  const handleBan = (index) => {
    const updatedUsers = [...localUsers];
    updatedUsers[index].status = 'BANNED';
    updatedUsers[index].statusColor = 'bg-red-900/50 text-red-400';
    setLocalUsers(updatedUsers);
    // Hiện lại thông báo
    window.alert(`Đã thực hiện hành động BAN cho user: ${updatedUsers[index].name}`);
  };

  // Xử lý CHUYỂN QUYỀN ADMIN
  const handleMakeAdmin = (index) => {
    const updatedUsers = [...localUsers];
    updatedUsers[index].role = 'ADMIN';
    updatedUsers[index].roleColor = 'bg-purple-900/50 text-purple-400';
    setLocalUsers(updatedUsers);
    // Hiện lại thông báo
    window.alert(`Đã cấp quyền ADMIN cho user: ${updatedUsers[index].name}`);
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-slate-800 text-xs uppercase text-slate-300">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Rank / Points</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {localUsers.map((user, index) => (
              <tr key={index} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img alt={user.name} className="w-10 h-10 rounded-full border border-slate-600" src={user.avatar} />
                    <div>
                      <div className="font-bold text-white">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.username}</div>
                      <div className="text-[10px] text-slate-600">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${user.roleColor}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-white font-bold">{user.rank}</div>
                  <div className="text-xs text-yellow-500">{user.points}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${user.statusColor}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    {user.status === 'BANNED' ? (
                      <button 
                        onClick={() => handleUnban(index)}
                        className="px-3 py-1 bg-green-900/50 hover:bg-green-800 text-green-400 rounded text-xs font-bold transition-colors"
                      >
                        UNBAN
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleBan(index)}
                        className="px-3 py-1 bg-red-900/50 hover:bg-red-800 text-red-400 rounded text-xs font-bold transition-colors"
                      >
                        BAN
                      </button>
                    )}
                    {user.role !== 'ADMIN' && (
                      <button 
                        onClick={() => handleMakeAdmin(index)}
                        className="px-3 py-1 bg-purple-900/50 hover:bg-purple-800 text-purple-400 rounded text-xs font-bold transition-colors"
                      >
                        MAKE ADMIN
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;