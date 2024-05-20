import HomeCV from '@/components/content/HomeCV';
import About from '@/components/content/About';
import Skills from '@/components/content/Skills';
import Projects from './content/Projects';
import Contact from './content/Contact';

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
  return (
    <>
      <div className={props.hideLeftPart ? 'arlo_tm_rightpart opened' : 'arlo_tm_rightpart'}>
        <div className="rightpart_inner">
          <HomeCV />

          {/* <!-- ABOUT --> */}
          <About />
          {/* <!-- /ABOUT --> */}

          {/* <!-- SKILLS --> */}
          <Skills />
          {/* <!-- /SKILLS --> */}

          {/* <!-- PROJECTS --> */}
          <Projects />
          {/* <!-- /PROJECTS --> */}

          {/* <!-- PORTFOLIO --> */}
          {/* <div className="arlo_tm_section relative" id="portfolio">
            <div className="arlo_tm_portfolio_wrapper_all">
              <!-- PORTFOLIO FILTER -->
              <div className="arlo_tm_second_portfolio">
                <div className="container">
                  <div className="arlo_tm_portfolio_wrap">
                    <div className="arlo_tm_title_holder portfolio">
                      <h3>Creative Works</h3>
                      <span>Check out our latest creative works</span>
                    </div>
                    <div className="arlo_tm_portfolio_titles"></div>
                    <ul className="arlo_tm_portfolio_filter">
                      <li>
                        <a href="#" className="current" data-filter="*">
                          All
                        </a>
                      </li>
                      <li>
                        <a href="#" data-filter=".design">
                          Design
                        </a>
                      </li>
                      <li>
                        <a href="#" data-filter=".photography">
                          Photography
                        </a>
                      </li>
                      <li>
                        <a href="#" data-filter=".development">
                          Development
                        </a>
                      </li>
                    </ul>
                    <ul className="arlo_tm_portfolio_list gallery_zoom">
                      <li className="design">
                        <div
                          className="entry arlo_tm_portfolio_animation_wrap"
                          data-title="Aoc Productions"
                          data-category="Design"
                        >
                          <a href="portfolio-single.html">
                            <img src="img/portfolio/600x600.jpg" alt="600x600" />
                            <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/1.jpg"></div>
                          </a>
                        </div>
                      </li>
                      <li className="photography">
                        <div
                          className="entry arlo_tm_portfolio_animation_wrap"
                          data-title="Ind Hed"
                          data-category="Photography"
                        >
                          <a href="portfolio-single-2.html">
                            <img src="img/portfolio/600x600.jpg" alt="600x600" />
                            <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/2.jpg"></div>
                          </a>
                        </div>
                      </li>
                      <li className="development">
                        <div
                          className="entry arlo_tm_portfolio_animation_wrap"
                          data-title="Paper Mockup"
                          data-category="Development"
                        >
                          <a href="portfolio-single-3.html">
                            <img src="img/portfolio/600x600.jpg" alt="600x600" />
                            <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/3.jpg"></div>
                          </a>
                        </div>
                      </li>
                      <li className="photography">
                        <div
                          className="entry arlo_tm_portfolio_animation_wrap"
                          data-title="The Nordic"
                          data-category="Photography"
                        >
                          <a href="portfolio-single-4.html">
                            <img src="img/portfolio/600x600.jpg" alt="600x600" />
                            <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/4.jpg"></div>
                          </a>
                        </div>
                      </li>
                      <li className="design">
                        <div
                          className="entry arlo_tm_portfolio_animation_wrap"
                          data-title="Creatives Castle"
                          data-category="Design"
                        >
                          <a href="portfolio-single-5.html">
                            <img src="img/portfolio/600x600.jpg" alt="600x600" />
                            <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/5.jpg"></div>
                          </a>
                        </div>
                      </li>
                      <li className="photography">
                        <div
                          className="entry arlo_tm_portfolio_animation_wrap"
                          data-title="White Bag"
                          data-category="Photography"
                        >
                          <a href="portfolio-single-6.html">
                            <img src="img/portfolio/600x600.jpg" alt="" />
                            <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/6.jpg"></div>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /PORTFOLIO FILTER -->
            </div>
          </div> */}
          {/* <!-- /PORTFOLIO --> */}

          {/* <!-- TESTIMONIALS --> */}
          {/* <div className="arlo_tm_section" id="testimonials">
            <div className="arlo_tm_testimonials_wrapper_all">
              <div className="arlo_tm_universal_box_wrap">
                <div className="bg_wrap">
                  <div className="overlay_image testimonial jarallax" data-speed="0"></div>
                  <div className="overlay_color testimonial"></div>
                </div>
                <div className="content testimonial">
                  <div className="arlo_tm_testimonial_wrap">
                    <div className="container">
                      <div className="carousel_wrap">
                        <ul className="owl-carousel">
                          <li className="item">
                            <div className="inner">
                              <div className="quotebox_wrap">
                                <i className="xcon-quote-left"></i>
                              </div>
                              <div className="definitions_wrap">
                                <p>
                                  “Arlo team are easy to work with and helped me make amazing websites in a short amount
                                  of time. Thanks guys for works.”
                                </p>
                              </div>
                              <div className="name_holder">
                                <p>Antonio Baraley, CEO Founder</p>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="inner">
                              <div className="quotebox_wrap">
                                <i className="xcon-quote-left"></i>
                              </div>
                              <div className="definitions_wrap">
                                <p>
                                  “We were looking for a logo with a touch of modernism. Arlo grasped our needs and
                                  produced a stunning design.”
                                </p>
                              </div>
                              <div className="name_holder">
                                <p>Calena Gomez, AOC Designer</p>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="inner">
                              <div className="quotebox_wrap">
                                <i className="xcon-quote-left"></i>
                              </div>
                              <div className="definitions_wrap">
                                <p>
                                  “Awesome to work with Arlo. Good organized, easy to communicate with, responsive with
                                  next iterations.”
                                </p>
                              </div>
                              <div className="name_holder">
                                <p>Torren Winston, Photographer.</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- /TESTIMONIALS --> */}
          {/* <!-- CONTACT & FOOTER --> */}
          <Contact />
          {/* <!-- /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
};
export default RightPart;
