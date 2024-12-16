import React from "react";
import "../Component/Main.css";
function Main() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="banner-left">
              <h5>Hi There,I'm</h5>
              <h2>MEET SHAH</h2>
              <div className="line"></div>
              <h4>Full-Stack Web Developer</h4>
              <button className="btn-main">MEET SHAH</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="banner-top">
              <div class="banner-img">
                <img src={require("../Component/meet.png")} alt="meet" />
                {/* <img src="https://demo.dezven.com/project/web-design/portfolio/1/images/banner.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
