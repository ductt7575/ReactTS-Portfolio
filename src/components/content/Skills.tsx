import ProgressBar from '@ramonak/react-progress-bar';

const Skills = () => {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Frontend Skills</h4>
                </div>
                <p>&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;HTML, CSS/SCSS, Bootstrap</p>
                <p>&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;ReactJS, Javascript</p>
                <p>&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;Typescript</p>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">
                          Wordpress - <span className="experience">5 years of experience</span>
                        </span>
                        <span className="number">95%</span>
                      </span>

                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} bgColor={'#333'} height="6px" isLabelVisible={false} />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                      <span>
                        <span className="label">
                          Css - <span className="experience">3 years of experience</span>
                        </span>
                        <span className="number">85%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <div className="arlo_tm_bar_bg">
                          <ProgressBar completed={85} bgColor={'#333'} height="6px" isLabelVisible={false} />
                        </div>
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                      <span>
                        <span className="label">
                          HTML - <span className="experience">4 years of experience</span>
                        </span>
                        <span className="number">75%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <div className="arlo_tm_bar_bg">
                          <ProgressBar completed={75} bgColor={'#333'} height="6px" isLabelVisible={false} />
                        </div>
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span>
                        <span className="label">
                          After Effect - <span className="experience">6 years of experience</span>
                        </span>
                        <span className="number">95%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <div className="arlo_tm_bar_bg">
                          <ProgressBar completed={95} bgColor={'#333'} height="6px" isLabelVisible={false} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Frontend Skills</h4>
                </div>
                <p>&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;HTML, CSS/SCSS, Bootstrap</p>
                <p>&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;ReactJS, Javascript</p>
                <p>&nbsp;&nbsp;&nbsp; &bull; &nbsp;&nbsp;&nbsp;Typescript</p>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">
                          Wordpress - <span className="experience">5 years of experience</span>
                        </span>
                        <span className="number">95%</span>
                      </span>

                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} bgColor={'#333'} height="6px" isLabelVisible={false} />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                      <span>
                        <span className="label">
                          Css - <span className="experience">3 years of experience</span>
                        </span>
                        <span className="number">85%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <div className="arlo_tm_bar_bg">
                          <ProgressBar completed={85} bgColor={'#333'} height="6px" isLabelVisible={false} />
                        </div>
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                      <span>
                        <span className="label">
                          HTML - <span className="experience">4 years of experience</span>
                        </span>
                        <span className="number">75%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <div className="arlo_tm_bar_bg">
                          <ProgressBar completed={75} bgColor={'#333'} height="6px" isLabelVisible={false} />
                        </div>
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span>
                        <span className="label">
                          After Effect - <span className="experience">6 years of experience</span>
                        </span>
                        <span className="number">95%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <div className="arlo_tm_bar_bg">
                          <ProgressBar completed={95} bgColor={'#333'} height="6px" isLabelVisible={false} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
