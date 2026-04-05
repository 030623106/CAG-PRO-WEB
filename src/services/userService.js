// src/services/userService.js

export const getProfile = async (apiBaseUrl, token) => {
  try {
    const response = await fetch(`${apiBaseUrl}Auth/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Không thể lấy thông tin profile');
    }

    return result.data; 
  } catch (error) {
    console.error("Lỗi getProfile:", error);
    throw error;
  }
};