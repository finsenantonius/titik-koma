import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import URL from "../../api/url";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isRedeemVoucher, setIsRedeemVoucher] = useState("");
  const [credential, setCredential] = useState("");
  const [leaderboard, setLeaderboard] = useState("");
  const [offline, setOffline] = useState(false);

  const [loadUser, setLoadUser] = useState(true);
  const [loadLeaderboard, setLoadLeaderboard] = useState(true);

  const [onError, setOnError] = useState(false);
  const [alertVoucher, setAlertVoucher] = useState("");
  const [voucherError, setVoucherError] = useState("");
  const [alertPassword, setAlertPassword] = useState("");
  const [alertFeedback, setAlertFeedback] = useState("");
  const [errorFeedback, setErrorFeedback] = useState("");

  const [connect, setConnect] = useState("");

  useEffect(() => {
    getUser();
    NetInfo.fetch().then((state) => {
      setConnect(state.isConnected);
    });
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
            setIsRedeemVoucher(res.data.isRedeemVoucher);
            getAvatarImage(res.data.avatar);
            setLoadUser(false);
          })
          .catch((err) => {
            setOffline(true);
            loadUser(false);
          });
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
      .catch((e) => {
        console.log(e);
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

  const redeemVoucher = ({ isRedeemVoucher, navigate }) => {
    const url = URL + "/api/user/redeemVoucher";
    axios
      .patch(url, { id: id, isRedeemVoucher: isRedeemVoucher })
      .then((res) => {
        console.log(res.data);
        setAlertVoucher(
          `Kode voucher berhasil digunakan, silahkan cek hadiah di menu "Reward Saya"`
        );
        setVoucherError("");
        signIn({ navigate });
      })
      .catch((err) => {
        console.log(err);
        setAlertVoucher("");
        setVoucherError(`Koneksi bermasalah, Silahkan coba lagi.`);
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

  const sendFeedback = ({ feedback }) => {
    const url = URL + "/api/feedback/addFeedback";
    const data = {
      uid: id,
      name: name,
      feedback: feedback,
    };
    axios
      .post(url, data)
      .then((res) => {
        setAlertFeedback("Terima kasih atas feedback Anda.");
        setErrorFeedback("");
      })
      .catch((err) => {
        setAlertFeedback("");
        setErrorFeedback("Terjadi kesalahan. Silahkan coba lagi");
      });
  };

  return (
    <UserContext.Provider
      value={{
        loadUser,
        offline,
        connect,
        name,
        alertPassword,
        onError,
        leaderboard,
        avatar,
        isRedeemVoucher,
        loadLeaderboard,
        alertVoucher,
        voucherError,
        alertFeedback,
        errorFeedback,
        updateProfile,
        getCredential,
        getUser,
        changePassword,
        resetAlert,
        updateScore,
        getLeaderboard,
        updateAvatar,
        redeemVoucher,
        setAlertVoucher,
        setVoucherError,
        sendFeedback,
        setAlertFeedback,
        setErrorFeedback,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
