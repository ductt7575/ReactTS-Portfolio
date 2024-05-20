import MobileLogo from '@/assets/img/logo/mobile_logo.png';
import { useState } from 'react';
const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const style = {
    overflow: 'hidden',
    maxHeight: isOpen ? '300px' : '0px',
    padding: isOpen ? '30px 20px' : '0px 20px',
    opacity: isOpen ? 1 : 0,
    transition: 'all 0.5s ease',
  };

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
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#">
              <img src={MobileLogo} alt="mobile_logo" width={50} />
            </a>
          </div>
          <div
            className="arlo_tm_trigger"
            onClick={() => {
              setIsOpen((prep) => !prep);
            }}
          >
            <div className={isOpen ? 'hamburger hamburger--collapse-r is-active' : 'hamburger hamburger--collapse-r'}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
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
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
