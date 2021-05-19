import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [credential, setCredential] = useState("");
  const [alertPassword, setAlertPassword] = useState("");
  const [onError, setOnError] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const url = "http://23d5e12c3fa7.ngrok.io/api/user/getDetailData";
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        axios
          .get(url, { headers: { "auth-token": token } })
          .then((res) => {
            setId(res.data._id);
            setName(res.data.name);
          })
          .catch((err) => console.log("gagal user"));
      }
    } catch (e) {
      console.log("kamu ketauan");
    }
  };

  const getCredential = async () => {
    const credential = await AsyncStorage.getItem("@_credential");
    setCredential(JSON.parse(credential));
  };

  const signIn = ({ navigate }) => {
    const url = "http://23d5e12c3fa7.ngrok.io/api/user/login";
    axios
      .post(url, credential)
      .then((response) => {
        try {
          AsyncStorage.setItem("@token", response.data);
          navigate();
        } catch (e) {
          console.log(e);
        }
      })
      .catch(() => {
        console.log("haha");
      });
  };

  const updateProfile = ({ inputName, navigate }) => {
    const url = "http://23d5e12c3fa7.ngrok.io/api/user/updateProfile";
    axios
      .patch(url, { id: id, name: inputName })
      .then((res) => {
        console.log(res.data);
        signIn({ navigate });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePassword = ({ password, newPassword, confPassword }) => {
    const url = "http://23d5e12c3fa7.ngrok.io/api/user/changePassword";
    if (newPassword === confPassword) {
      const data = {
        id: id,
        password: password,
        newPassword: newPassword,
      };
      axios
        .patch(url, data)
        .then((res) => {
          console.log(res.data);
          setAlertPassword("Berhasil merubah password!");
          setOnError(false);
        })
        .catch((err) => {
          setAlertPassword("Password salah!");
          setOnError(false);
        });
    } else {
      setAlertPassword("Password baru tidak sesuai!");
      setOnError(true);
    }
  };

  const resetAlert = () => {
    setAlertPassword("");
    setOnError(false);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        alertPassword,
        onError,
        updateProfile,
        getCredential,
        getUser,
        changePassword,
        resetAlert,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
