import React from 'react';
import Navbar from './Navbar';
import Row0 from './Row0';
import Row1 from './Row1';
import Row2 from './Row2';

const MainContent = () => {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Navbar --> */}
          <Navbar />
          {/* <!-- End of Navbar --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Content Row --> */}

            <div className="row" style={{ marginBottom: '10px' }}>
              {/* <!-- Content row having bar graph --> */}
              <Row0 />
            </div>
            {/* Row ended                 */}

            {/* <!-- Content Row --> */}
            <div className="row">
              <Row1 />
            </div>
            {/* Row ended                 */}

            {/* <!-- Content Row --> */}
            <div className="row">
              <Row2 />
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --></div> */}
      </div>
    </>
  );
};

export default MainContent;
