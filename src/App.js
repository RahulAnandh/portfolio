import MyImage from "./assets/my_image.png";
import "./App.css";
import WordFlickComponent from "./components/WordFlickComponent";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="back_ground">
      <img src={MyImage} className="my_image"></img>
      <div className="content">
        {/* <div className="text_introduction"> I'm Rahul Anandh,</div> */}
        <WordFlickComponent />
        <div className="text_job"> a Web Developer</div>
        <div className="social_meadia">
          <div className="social_meadia_icon">
            <LinkedinOutlined />
          </div>
          <div className="social_meadia_icon">
            <GithubOutlined />
          </div>
          <div className="social_meadia_icon"> 1</div>
          <div className="social_meadia_icon"> 1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
