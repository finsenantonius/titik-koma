import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import URL from "../../api/url";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

  const [alertEmail, setAlertEmail] = useState("");
  const [alertOTP, setAlertOTP] = useState("");
  const [otpEmail, setOtpEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [onError, setOnError] = useState(false);
  const [alertPassword, setAlertPassword] = useState("");
  const [endProcess, setEndProcess] = useState(false);

  const clearAlert = () => {
    setAlert("");
    setAlertSuccess("");
    setAlertEmail("");
    setAlertOTP("");
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("@token");
        if (token !== null) {
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.log(e);
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
        try {
          AsyncStorage.setItem("@token", response.data);
          AsyncStorage.setItem("@_credential", JSON.stringify(credential));
          setIsLoggedIn(true);
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        console.log(error);
        setAlert("Email atau password salah");
      });
  };

  const signUp = ({ name, email, password }) => {
    const url = URL + "/api/user/register";
    const score = 0;
    const avatar = 1;
    const isRedeemVoucher = false;
    axios
      .post(url, { name, email, password, score, avatar, isRedeemVoucher })
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

  const ForgotPassword = ({ email, otp, navigate }) => {
    const url = URL + "/api/user/sendEmail";
    const data = {
      userEmail: email,
      otp: otp,
    };
    console.log(data);
    axios
      .post(url, data)
      .then((res) => {
        console.log("sukses email");
        setAlertOTP("Kode OTP sudah dikirimkan ke email Anda.");
        setAlertEmail("");
        setOtpEmail(otp);
        setUserEmail(email);
        navigate();
      })
      .catch((err) => {
        console.log(err);
        setAlertEmail("Akun tidak terdaftar.");
        setAlertOTP("");
      });
  };

  const resetPassword = ({ newPassword, confPassword }) => {
    const url = URL + "/api/user/resetPassword";
    if (newPassword === confPassword) {
      const data = {
        userEmail: userEmail,
        newPassword: newPassword,
      };
      axios
        .patch(url, data)
        .then((res) => {
          setAlertPassword("Berhasil merubah password!");
          setOnError(false);
          setEndProcess(true);
        })
        .catch((err) => {
          setAlertPassword("Terjadi Kesalahan");
          setOnError(false);
        });
    } else {
      setAlertPassword("Password baru tidak sesuai!");
      setOnError(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        alert,
        alertSuccess,
        alertEmail,
        alertOTP,
        otpEmail,
        userEmail,
        alertPassword,
        onError,
        endProcess,
        signUp,
        signIn,
        removeToken,
        clearAlert,
        ForgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
