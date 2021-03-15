import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="40"
              viewBox="0 0 172 172"
              style={{ fill: '#000000' }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                // style={{mix-blend-mode: "normal"}}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#979797">
                  <path d="M140.24808,94.17717c-2.55492,-1.87408 -4.08142,-4.88408 -4.08142,-8.05533c0,-3.17125 1.5265,-6.18125 4.07783,-8.05175l11.8035,-8.65375c1.88125,-1.38317 2.65883,-3.81625 1.92425,-6.03433c-3.03867,-9.13033 -7.84392,-17.458 -14.28675,-24.75725c-1.55158,-1.74867 -4.05275,-2.3005 -6.192,-1.36167l-13.29058,5.84442c-2.89533,1.27567 -6.26725,1.09292 -9.01567,-0.4945c-2.74483,-1.58383 -4.58667,-4.4075 -4.93425,-7.55725l-1.59817,-14.59133c-0.25442,-2.322 -1.98158,-4.214 -4.26775,-4.68342c-9.30592,-1.90275 -19.08483,-1.935 -28.55558,-0.03583c-2.3005,0.46225 -4.03125,2.35425 -4.28567,4.687l-1.58383,14.49817c-0.34758,3.15333 -2.18942,5.977 -4.94142,7.56083c-2.74483,1.58383 -6.106,1.77375 -9.01208,0.4945l-13.36225,-5.87667c-2.12133,-0.93883 -4.62967,-0.39417 -6.18125,1.35092c-6.46433,7.27058 -11.29108,15.5875 -14.362,24.71067c-0.74533,2.2145 0.02867,4.66192 1.91708,6.04867l11.72825,8.6c2.5585,1.87767 4.085,4.88767 4.085,8.05892c0,3.17125 -1.5265,6.18125 -4.07783,8.05175l-11.8035,8.65375c-1.88125,1.38317 -2.65883,3.81625 -1.92425,6.03433c3.03867,9.13033 7.84392,17.458 14.28675,24.75725c1.55158,1.75225 4.05992,2.30767 6.192,1.36167l13.29058,-5.84442c2.89533,-1.27567 6.26367,-1.09292 9.01567,0.4945c2.74483,1.58383 4.58667,4.4075 4.93425,7.55725l1.59817,14.59133c0.25442,2.322 1.98158,4.214 4.26775,4.68342c4.7085,0.96033 9.546,1.44767 14.38708,1.44767c4.72283,0 9.48867,-0.47658 14.16492,-1.41542c2.3005,-0.46225 4.03125,-2.35425 4.28567,-4.687l1.58742,-14.49817c0.34758,-3.15333 2.18942,-5.977 4.94142,-7.56083c2.74483,-1.58025 6.10958,-1.76658 9.01208,-0.4945l13.36225,5.87667c2.1285,0.94242 4.62967,0.39775 6.18125,-1.35092c6.46433,-7.27058 11.29108,-15.5875 14.362,-24.71067c0.74533,-2.2145 -0.02867,-4.66192 -1.91708,-6.04867zM86,111.08333c-13.85317,0 -25.08333,-11.23017 -25.08333,-25.08333c0,-13.85317 11.23017,-25.08333 25.08333,-25.08333c13.85317,0 25.08333,11.23017 25.08333,25.08333c0,13.85317 -11.23017,25.08333 -25.08333,25.08333z"></path>
                </g>
              </g>
            </svg>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - Messages --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="40"
              viewBox="0 0 172 172"
              style={{ fill: '#000000' }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                // style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#8d8d8d">
                  <path d="M86,0c-7.59219,0 -13.76,6.16781 -13.76,13.76c0,7.59219 6.16781,13.76 13.76,13.76c7.59219,0 13.76,-6.16781 13.76,-13.76c0,-7.59219 -6.16781,-13.76 -13.76,-13.76zM66.65,20.9625c-15.72187,6.73219 -25.37,21.88969 -25.37,40.9575c0,37.84 -13.07469,47.34031 -20.855,52.9975c-3.45344,2.49938 -6.665,4.82406 -6.665,8.9225c0,14.47219 21.6075,20.64 72.24,20.64c50.6325,0 72.24,-6.16781 72.24,-20.64c0,-4.09844 -3.21156,-6.42312 -6.665,-8.9225c-7.78031,-5.65719 -20.855,-15.1575 -20.855,-52.9975c0,-19.12156 -9.63469,-34.23875 -25.37,-40.9575c-2.94281,7.82063 -10.52156,13.4375 -19.35,13.4375c-8.82844,0 -16.40719,-5.63031 -19.35,-13.4375zM65.36,150.93c0,0.13438 0,0.29563 0,0.43c0,11.38156 9.25844,20.64 20.64,20.64c11.38156,0 20.64,-9.25844 20.64,-20.64c0,-0.13437 0,-0.29562 0,-0.43c-6.47687,0.26875 -13.35687,0.43 -20.64,0.43c-7.28312,0 -14.16312,-0.16125 -20.64,-0.43z"></path>
                </g>
              </g>
            </svg>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <div className="col-md-4 col-lg-0">
            <li className="nav-item dropdown no-arrow">
              <button type="button" className="btn btn-primary">
                Actions
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
