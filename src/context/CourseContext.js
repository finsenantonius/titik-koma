import React, { useEffect, useState, createContext } from "react";
import URL from "../../api/url";
import axios from "axios";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseFile, setCourseFile] = useState("");
  const [courseLanguage, setcourseLanguage] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseCreated, setCourseCreated] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const getAllCourse = () => {
    const url = URL + "/api/course/getAllCourse";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("haha");
      });
  };

  const getCourse = ({ courseName }) => {
    const url = URL + `/api/course/getSpecificCourse/${courseName}`;
    axios
      .get(url)
      .then((res) => {
        setCourseTitle(res.data.courseTitle);
        setCourseDesc(res.data.courseDescription);
        setCourseFile(res.data.courseFile);
        setcourseLanguage(res.data.courseLanguage);
        setCourseLevel(res.data.courseLevel);
        setCourseCreated(res.data.courseCreated);
        setCourseAuthor(res.data.courseAuthor);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("haha");
      });
  };

  const data = {
    courseTitle,
    courseDesc,
    courseFile,
    courseLanguage,
    courseLevel,
    courseCreated,
    courseAuthor,
  };

  return (
    <CourseContext.Provider value={{ loading, data, getAllCourse, getCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
