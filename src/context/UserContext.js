import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import URL from "../../api/url";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [avatar, setAvatar] = useState("");
  const [credential, setCredential] = useState("");
  const [alertPassword, setAlertPassword] = useState("");
  const [onError, setOnError] = useState(false);
  const [leaderboard, setLeaderboard] = useState("");
  const [loadLeaderboard, setLoadLeaderboard] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const url = URL + "/api/user/getDetailData";
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        axios
          .get(url, { headers: { "auth-token": token } })
          .then((res) => {
            setId(res.data._id);
            setName(res.data.name);
            setScore(res.data.score);
            getAvatarImage(res.data.avatar);
            console.log(res.data.score);
          })
          .catch((err) => console.log("gagal user"));
      }
    } catch (e) {
      console.log("kamu ketauan");
    }
  };

  const getAvatarImage = (avatar) => {
    if (avatar === 1) {
      setAvatar(require("../../assets/ava1.jpg"));
    } else if (avatar === 2) {
      setAvatar(require("../../assets/ava2.jpg"));
    } else if (avatar === 3) {
      setAvatar(require("../../assets/ava3.jpg"));
    } else {
      setAvatar(require("../../assets/ava4.jpg"));
    }
  };

  const getCredential = async () => {
    const credential = await AsyncStorage.getItem("@_credential");
    setCredential(JSON.parse(credential));
  };

  const signIn = ({ navigate }) => {
    const url = URL + "/api/user/login";
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
    const url = URL + "/api/user/updateProfile";
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
    const url = URL + "/api/user/changePassword";
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

  const updateScore = ({ score, navigate }) => {
    const url = URL + "/api/user/updateScore";
    console.log("Api", score);
    axios
      .patch(url, { id: id, score: score })
      .then((res) => {
        navigate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAvatar = ({ avatar, navigate }) => {
    const url = URL + "/api/user/updateAvatar";
    axios
      .patch(url, { id: id, avatar: avatar })
      .then((res) => {
        signIn({ navigate });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLeaderboard = () => {
    const url = URL + "/api/user/getAllProfile";
    axios
      .get(url)
      .then((res) => {
        setLeaderboard(res.data);
        setLoadLeaderboard(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        name,
        alertPassword,
        onError,
        leaderboard,
        avatar,
        loadLeaderboard,
        updateProfile,
        getCredential,
        getUser,
        changePassword,
        resetAlert,
        updateScore,
        getLeaderboard,
        updateAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
