import React from "react";
import myResume from "../../assets/Sarah-Higley-Resume-2024.pdf";
import { BsCloudDownload } from "react-icons/bs";



function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Download my Resume
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Resume;
