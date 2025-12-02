import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);

  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true); // ⭐ important

  useEffect(() => {
    const checkUser = async () => {
      if (!cookies.token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3000",
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setUserId(data.userId);
          setUsername(data.user);
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:5173/login";
        }
      } catch (err) {
        console.log("Auth error:", err.message);
        removeCookie("token");
      }

      setLoading(false);
    };

    checkUser();
  }, [cookies]);

  const logout = () => {
    removeCookie("token");
    setUserId(null);
    setUsername(null);
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <AuthContext.Provider value={{ userId, username, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


