import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import URL from "../../api/url";
import axios from "axios";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [modul, setModul] = useState([]);
  const [loadModul, setLoadModul] = useState(true);
  const [course, setCourse] = useState([]);
  const [loadCourse, setloadCourse] = useState(true);
  const [challenge, setChallenge] = useState([]);
  const [loadChallenge, setLoadChallenge] = useState(true);
  const [news, setNews] = useState([]);
  const [loadNews, setLoadNews] = useState(true);

  const getAllNews = () => {
    const url = URL + "/api/news/getAllNews";
    axios
      .get(url)
      .then((res) => {
        setNews(res.data);
        setLoadNews(false);
        try {
          AsyncStorage.setItem("@tk_news", JSON.stringify(res.data));
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        console.log(err);
        try {
          const offlineNews = AsyncStorage.getItem("@tk_news");
          setNews(JSON.parse(offlineNews));
          setLoadNews(false);
        } catch (e) {
          setLoadNews(false);
        }
      });
  };

  const getAllCourse = () => {
    const url = URL + "/api/course/getAllCourse";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllModul = () => {
    const url = URL + "/api/course/getAllModul";
    axios
      .get(url)
      .then((res) => {
        setModul(res.data);
        setLoadModul(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCourse = ({ courseName }) => {
    const url = URL + `/api/course/getSpecificCourse/${courseName}`;
    axios
      .get(url)
      .then((res) => {
        setCourse(res.data);
        setloadCourse(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getChallenge = () => {
    const url = URL + "/api/challenge/getChallenge";
    axios
      .get(url)
      .then((res) => {
        setChallenge(res.data);
        setLoadChallenge(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CourseContext.Provider
      value={{
        modul,
        loadModul,
        course,
        loadCourse,
        challenge,
        loadChallenge,
        news,
        loadNews,
        getAllCourse,
        getAllModul,
        getAllNews,
        getCourse,
        setCourse,
        setloadCourse,
        getChallenge,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
