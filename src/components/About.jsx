import React from "react";
import aboutImg from "../assets/about.jpg"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <div className="thumbnail">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      <div className="about-content">
        <div className="section-title">
          <h2 className="title">About Me</h2>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            omnis adipisci nesciunt ratione corporis explicabo, facere esse
            impedit doloremque ut perspiciatis enim officia itaque. In nam
            corrupti iste cumque aut!
          </p>
        </div>

        {/* tabs-area */}
        <div className="tabs-area">
            <Tabs>
              <TabList className="tab-style">
                <Tab className="tabs">Main skills</Tab>
                <Tab className="tabs">Awards</Tab>
                <Tab className="tabs">Experience</Tab>
                <Tab className="tabs">Education & Certification</Tab>
              </TabList>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <a href="/service">
                        User experience design <span> - UI/UX</span>
                      </a>
                      Delight the user and make it work.
                    </li>
                    <li>
                      <a href="/service">
                        Web and user interface design<span> - Development</span>
                      </a>
                      Websites, web experiences, ...
                    </li>
                    <li>
                      <a href="/service">
                        Interaction design <span> - Animation</span>
                      </a>
                      I like to move it move it.
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
              <div className="single-tab-content"><ul><li><a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020</li><li><a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018</li><li><a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014</li></ul></div>
              </TabPanel>

              <TabPanel>
              <div className="single-tab-content"><ul><li><a href="/service">Sr. Front-end Engineer<span> - Google</span></a> 2018 - Current</li><li><a href="/service">Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018</li><li><a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014</li></ul></div>
              </TabPanel>

              <TabPanel>
                <div className="single-tab-content"><ul><li><a href="/service">BSc In CSE<span> - ABC University, Los Angeles, CA</span></a> 2010</li><li><a href="/service">Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2009</li><li><a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007</li></ul></div>
              </TabPanel>
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;
