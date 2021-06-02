import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import URL from "../../api/url";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

  const clearAlert = () => {
    setAlert("");
    setAlertSuccess("");
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("@token");
        if (token !== null) {
          console.log(token);
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.log("kamu ketauan");
      }
    };
    getToken();
  }, []);

  const signIn = ({ email, password }) => {
    const url = URL + "/api/user/login";
    const credential = { email, password };
    axios
      .post(url, credential)
      .then((response) => {
        console.log(response);
        try {
          AsyncStorage.setItem("@token", response.data);
          AsyncStorage.setItem("@_credential", JSON.stringify(credential));
          setIsLoggedIn(true);
        } catch (e) {
          console.log(e);
        }
      })
      .catch(() => {
        console.log("haha");
        setAlert("Email atau password salah");
      });
  };

  const signUp = ({ name, email, password }) => {
    const url = URL + "/api/user/register";
    const score = 0;
    const avatar = 1;
    axios
      .post(url, { name, email, password, score, avatar })
      .then((response) => {
        console.log(response.data);
        setAlertSuccess(
          "Sukses mendaftar akun baru! Silahkan login untuk masuk."
        );
        setAlert("");
      })
      .catch(() => {
        setAlert("Akun sudah terdaftar.");
        setAlertSuccess("");
      });
  };

  const removeToken = () => {
    AsyncStorage.removeItem("@token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        alert,
        alertSuccess,
        signUp,
        signIn,
        removeToken,
        clearAlert,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
