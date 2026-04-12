// src/contexts/Authen.js

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [api] = useState("https://localhost:7014/api/");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const isRefreshing = useRef(false);

  const refreshPromise = useRef(null);

  const getStorage = () => {
    const remember = localStorage.getItem("remember_me") === "true";
    return remember ? localStorage : sessionStorage;
  };
  
  const getStorageItem = (key) => {
    return getStorage().getItem(key);
  };

  const setStorage = (remember, key, value) => {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(key, value);
  };

  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  // LOGIN
  const login = async (accessToken, refreshToken, refreshExpires, remember) => {

    setStorage(remember, "auth_token", accessToken);
    setStorage(remember, "refresh_token", refreshToken);
    setStorage(remember, "refresh_token_expires", refreshExpires);
    setStorage(remember, "remember_me", remember);
    setToken(accessToken);

    const me = await fetch(api + "auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const meData = await me.json();

    if (meData.success) {
      setUser(meData.data);
      setStorage(remember, "user", JSON.stringify(meData.data));
    }
  };

  // LOGOUT
  const logout = () => {
    clearStorage();
    setUser(null);
    setToken(null);
  };

  // AUTO LOGIN
  const autoLogin = async () => {

    const savedToken = getStorageItem("auth_token");

    if (!savedToken) {
      setLoading(false);
      return;
    }

    try {

      const res = await fetch(api + "auth/me", {
        headers: {
          Authorization: `Bearer ${savedToken}`
        }
      });

      if (res.ok) {

        const data = await res.json();

        if (data.success) {

          setToken(savedToken);
          setUser(data.data);

        } else {
          logout();
        }

      } else {
        logout();
      }

    } catch {
      logout();
    }

    setLoading(false);

  };

  // REFRESH TOKEN
  const refreshAccessToken = async (originalFetch) => {

    if (isRefreshing.current) {
      return refreshPromise.current;
    }

    const refreshToken = getStorageItem("refresh_token");
    const refreshExpires = getStorageItem("refresh_token_expires");

    if (!refreshToken || !refreshExpires) {
      logout();
      return null;
    }

    if (new Date() >= new Date(refreshExpires)) {
      logout();
      return null;
    }

    isRefreshing.current = true;

    refreshPromise.current = originalFetch(api + "auth/refreshtoken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(refreshToken)
    })
      .then(res => res.json())
      .then(data => {

        if (!data.success) {
          logout();
          return null;
        }

        const newToken = data.data.accessToken;

        const remember = getStorageItem("remember_me") === "true";

        setStorage(remember, "auth_token", newToken);
        setStorage(remember, "refresh_token", data.data.refreshToken);
        setStorage(remember, "refresh_token_expires", data.data.refreshTokenExpires);
        
        setToken(newToken);

        return newToken;

      })
      .catch(() => {
        logout();
        return null;
      })
      .finally(() => {
        isRefreshing.current = false;
      });

    return refreshPromise.current;
  };

  // FETCH INTERCEPTOR
  useEffect(() => {

    const originalFetch = window.fetch.bind(window);

    window.fetch = async (url, options = {}) => {

      let accessToken = getStorageItem("auth_token");

      const headers = {
        ...options.headers,
        ...(accessToken && { Authorization: `Bearer ${accessToken}` })
      };

      let response = await originalFetch(url, {
        ...options,
        headers
      });

      if (
        response.status === 401 &&
        !url.includes("auth/refreshtoken") &&
        getStorageItem("refresh_token")
      ) {

        const newToken = await refreshAccessToken(originalFetch);

        if (newToken) {

          response = await originalFetch(url, {
            ...options,
            headers: {
              ...options.headers,
              Authorization: `Bearer ${newToken}`
            }
          });

        } else {
          logout();
        }

      }

      return response;

    };

    return () => {
      window.fetch = originalFetch;
    };

  }, []);

  useEffect(() => {
    autoLogin();
  }, []);

  if (loading) {
    return <div style={{textAlign:"center",marginTop:"100px"}}>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        api,
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);