import React from "react";
import "./Experience.css";
function Projects() {
  return (
    <>
      <div className="row" id="project">
        <div className="jumbotron">
          <div className="experience">
            <div className="heading">
              <h5>PROJECTS</h5>
              <h2>
                <span class="heading-border"></span>PROJECTS
                <span class="heading-border"></span>
              </h2>
            </div>
          </div>
          <div className="card">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="exp">
                <div className="col-12">
                  <button className="btn-date">01/2022</button>
                </div>
                <h3>Gesture Control Software v1</h3>
                <p>
                  Based on the hardware named Arduino with the help of this
                  system which holds an Arduino circuit, ultrasonic sensors,
                  some jumper wire, and type-B to type-A cable which easily
                  connected to your laptop or pc.
                </p>
                <p>- 1st rank for Best Project by Apex Software House</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="exp">
                <div className="col-12">
                  <button className="btn-date">12/2022</button>
                </div>
                <h3>Gesture Control Software v2</h3>
                <p>
                  Based on the successfull response to our previous project, we
                  take this idea further to implement this into the software
                  with the help of Python, OpenCV, and Machine Learning.
                </p>
                <p>- 1st rank for best innovation project by Azziptech</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="exp">
                <div className="col-12">
                  <button className="btn-date">1/2023</button>
                </div>
                <h3>Attendance Management System</h3>
                <p>
                  This web application software is user-friendly for a person
                  who manages attendance. With the help of this software
                  students and teachers can connect threw the software. some
                  time-consuming protocols like attendance, leave , etc can
                  easily manage.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12">
              <div className="exp">
                <div className="col-12">
                  <button className="btn-date">10/2023</button>
                </div>
                <h3>Movie Booking Webstie</h3>
                <p>
                  Experience the ultimate convenience in movie booking with our
                  user-friendly website. Easily add, edit, or delete movie
                  listings with just a few clicks. Seamlessly book your favorite
                  shows hassle-free. Whether you're an admin managing the
                  platform or a user looking for the perfect movie night, our
                  secure login pages cater to your needs. Enjoy a streamlined
                  movie booking experience like never before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
