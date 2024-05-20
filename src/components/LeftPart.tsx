import desktopLogo from '@/assets/img/logo/desktop-logo.png';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const LeftPart = (props: IProps) => {
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace('#', '');
      setActiveTab(tab);
      const section = document.querySelector(`${hash}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        window.location.hash = tab;
      }, 1000);
    }
  };
  return (
    <>
      <div className={props.hideLeftPart ? 'arlo_tm_leftpart_wrap opened' : 'arlo_tm_leftpart_wrap'}>
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} width={'100px'} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab === 'home' ? 'active' : ''}
                  onClick={(e) => handleClickTab('home', e)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab === 'about' ? 'active' : ''}
                  onClick={(e) => handleClickTab('about', e)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === 'skills' ? 'active' : ''}
                  onClick={(e) => handleClickTab('skills', e)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeTab === 'projects' ? 'active' : ''}
                  onClick={(e) => handleClickTab('projects', e)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={activeTab === 'portfolio' ? 'active' : ''}
                  onClick={(e) => handleClickTab('portfolio', e)}
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === 'contact' ? 'active' : ''}
                  onClick={(e) => handleClickTab('contact', e)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <a
              className={props.hideLeftPart ? 'arlo_tm_resize opened' : 'arlo_tm_resize'}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.setHideLeftPart(!props.hideLeftPart);
              }}
            >
              <i className={props.hideLeftPart ? 'xcon-angle-left opened' : 'xcon-angle-left'}></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
export default LeftPart;
