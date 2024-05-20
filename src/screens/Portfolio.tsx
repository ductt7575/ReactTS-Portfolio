import LeftPart from 'components/LeftPart';
import PreLoader from 'components/Preloader';
import RightPart from 'components/RightPart';
import MobileMenu from 'components/mobile/Menu';
import { FloatButton } from 'antd';
import { useState } from 'react';

const Portfolio = () => {
  const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);

  return (
    <>
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>
        {/* <!-- PRELOADER --> */}
        <PreLoader />
        {/* <!-- /PRELOADER --> */}

        {/* <!-- MOBILE MENU --> */}
        <MobileMenu />
        {/* <!-- /MOBILE MENU --> */}

        {/* <!-- CONTENT --> */}
        <div className="arlo_tm_content">
          <LeftPart hideLeftPart={hideLeftPart} setHideLeftPart={setHideLeftPart} />

          <RightPart hideLeftPart={hideLeftPart} setHideLeftPart={setHideLeftPart} />

          {/* <a className="arlo_tm_totop" href="#"></a>
           */}
          <FloatButton.BackTop tooltip={<div>Scroll to top</div>} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
