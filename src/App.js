import MyImage from "./assets/my_image.jpg";
import "./App.css";
import {
  LinkedinOutlined,
  GithubOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="back_ground">
      <img src={MyImage} className="my_image" alt="my_image"></img>
      <div className="content">
        <div className="text_name">Hi, I'm Rahul Anandh</div>
        <div className="text_job"> React.JS Developer</div>
        <div className="social_meadia">
          <div className="social_meadia_icon">
            <LinkedinOutlined />
          </div>
          <div className="social_meadia_icon">
            <a href="https://github.com/RahulAnandh">
              <GithubOutlined />
            </a>
          </div>
          <div className="social_meadia_icon">
            <div className="social_meadia_icon">
              <WhatsAppOutlined />
            </div>
          </div>
          <div className="social_meadia_icon">
            <div className="social_meadia_icon">
              <a href="https://www.instagram.com/rahul_anandh_80/">
                <InstagramOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="contact_me_button">
          <div>
            Contact Me <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
