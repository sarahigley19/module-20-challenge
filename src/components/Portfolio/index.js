import React from "react";
import advancedCssPortfolio from "../../assets/projects/advanced-css-portfolio.png";
import javascriptCodingQuiz from "../../assets/projects/javascript-coding-quiz-challenge.png";
import weatherDashboard from "../../assets/projects/server-side-api-weather-dashboard.png";
import dadJestMail from "../../assets/projects/project-1-dad-jest-mail.png";
import timeTracker from "../../assets/projects/project-2-time-tracker.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title-2 secondary-border">My Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/sarahigley19/module-2-challenge">
                {" "}
                <img
                  src={advancedCssPortfolio}
                  className="my-2"
                  alt="Advanced-CSS-Portfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Advanced Css Portfolio</h4>
              <p>
                I used CSS and HTML to create the early start of my porfolio. This project was fun! I really enjoyed coming up with a design for this. I learned that starting with a mockup is SUPER helpful when it comes to web design. It is a lot easier to build something when you know what to build. I don't have any projects, so I wasn't able to link anything yet, but the space is ready and avaliable for it.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/sarahigley19/module-4-challenge">
                {" "}
                <img
                  src={javascriptCodingQuiz}
                  className="my-2"
                  alt="Javascript Coding Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Javascript Coding Quiz</h4>
              <p>Admittedly, I had trouble with this project. But I think it turned out as good as it could. I had fun with the HTML and the styling of it but the javascript was hard. I am still getting the hang of functions but I feel like I was able to grasp it a little bit better than the last project. It's still going to take more practice.</p>

              <p>It was fun adding the timer and figuing out how to decrement time for wrong answers. I hope to continue to get better at Javascript as I do it more!</p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/sarahigley19/module-6-challenge">
                {" "}
                <img
                  src={weatherDashboard}
                  className="my-2"
                  alt="Weather Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>I actually had fun working on this project! I feel like things are getting easier and easier to understand and figure out. I still want more practice with javascript, but I think that this point I can read it farily well. It's writing it that i am still strugglings with.</p>

               <p> My favorite part was the design, obvi. But I also liked adding the cute icons to the 5-day weather forcast. I also ran into an issue I couldn't figure out. Whenever I would try to make the 5-day forcast start on the next day, it would only show a four-day forcast. Still didn't figure that out!</p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://josh-manley.github.io/DadJestMail/">
                {" "}
                <img
                  src={dadJestMail}
                  className="my-2"
                  alt="Dad Jest Mail"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Dad Jest Mail</h4>
              <p>DadJestMail: Elevate your inbox with a daily delivery of groan-worthy goodness! Unleash the power of puns, embrace the glory of groans, and let the laughter flow effortlessly into your email oasis. Our curated collection of dad jokes is designed to brighten your day, one witty quip at a time. From cheesy punchlines to eye-rolling classics, DadJestMail is the ultimate source of comedic relief for all ages. Subscribe now and transform your inbox into a haven of hilarious joy – because everyone deserves a little dad humor in their digital adventures!</p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://timetracker3000-defb31293696.herokuapp.com/data">
                {" "}
                <img
                  src={timeTracker}
                  className="my-2"
                  alt="Time Tracker 3000"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Time Tracker 3000</h4>
              <p>As a user, I want to be able to add and modify product details, assign a location and technician to the product, and use a start/stop timer to track work duration, So that I can efficiently manage the progress of product development and maintenance, ensure accountability, and optimize the productivity of my team.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
