import React from 'react';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}

      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              //   style="fill: #000000"
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="none"
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
                <path
                  d="M0,172v-172h172v172z"
                  fill="none"
                  stroke="none"
                  strokeWidth="1"
                ></path>
                <g stroke="none" strokeWidth="1">
                  <path
                    d="M150.5,17.91667v39.41667l-3.58333,3.58333l3.58333,3.58333v86h-39.41667l-3.58333,-3.58333l-3.58333,3.58333h-86v-132.58333z"
                    fill="#0a2e94"
                  ></path>
                  <path
                    d="M150.5,64.5v-7.16667h-93.16667v53.75h46.58333v39.41667h7.16667v-46.58333h-46.58333v-39.41667z"
                    fill="#ffffff"
                  ></path>
                </g>
                <g fill="#cccccc" stroke="none" strokeWidth="1">
                  <path d="M99.195,68.94v3.7h-10.97v30.42h-4.48v-30.42h-10.94v-3.7z"></path>
                </g>
                <path
                  d="M62.805,113.06v-54.12h46.39v54.12z"
                  fill="#ff0000"
                  stroke="#50e3c2"
                  strokeWidth="3"
                  opacity="0"
                ></path>
              </g>
            </svg>
          </div>
          <div className="sidebar-brand-text mx-3">Finacular</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 172 172"
            // style="fill: #000000"
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
              //   style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#959494">
                <path d="M70.08173,86l56.79928,-57.98798c2.53245,-2.58413 2.50661,-6.71875 -0.05169,-9.30288l-10.15565,-10.15565c-2.60997,-2.58413 -6.79628,-2.58413 -9.38041,0.02584l-72.27824,72.74339c-1.29207,1.29206 -1.9381,2.97176 -1.9381,4.67728c0,1.70553 0.64603,3.38522 1.9381,4.67728l72.27824,72.74339c2.58413,2.60997 6.77044,2.60997 9.38041,0.02584l10.15565,-10.15565c2.55829,-2.58413 2.58413,-6.71875 0.05169,-9.30288z"></path>
              </g>
            </g>
          </svg>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              //   style="fill: #000000"
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="none"
                strokeLinecap="butt"
                strokeLinejoin="none"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                // style="mix-blend-mode: normal"
              >
                <path
                  d="M0,172v-172h172v172z"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinejoin="miter"
                ></path>
                <g stroke="#000a9e" strokeWidth="6.88" strokeLinejoin="round">
                  <path d="M17.2,17.2h58.48v58.48h-58.48zM96.32,17.2h58.48v58.48h-58.48zM17.2,96.32h58.48v58.48h-58.48zM96.32,96.32h58.48v58.48h-58.48z"></path>
                </g>
              </g>
            </svg>
            <span>Dashboard</span>
          </a>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              //   style="fill: #000000"
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
                <g fill="#051484">
                  <path d="M117.57813,0l-14.33333,68.75521l68.75521,-14.33333c-7.16667,-26.51107 -27.91081,-47.25521 -54.42187,-54.42187zM78.83333,15.00521c-42.97201,0 -78.16146,35.18945 -78.16146,78.16146c0,42.97201 35.18945,78.16146 78.16146,78.16146c42.97201,0 78.16146,-35.18945 78.16146,-78.16146c0,-6.94271 -0.75586,-14.75326 -3.35937,-21.72396l-1.79167,-5.15104l-5.59896,1.11979l-52.63021,10.97396l10.97396,-52.63021l1.11979,-5.59896l-5.15104,-1.79167c-6.9707,-2.60351 -14.78125,-3.35938 -21.72396,-3.35938zM78.83333,27.99479c4.08724,0 7.83854,1.03581 11.64583,1.79167l-11.64583,55.54167l-2.01562,9.85417l9.85417,-2.01562l55.54167,-11.64583c0.75586,3.80729 1.79167,7.5586 1.79167,11.64583c0,35.86133 -29.31055,65.17188 -65.17187,65.17188c-35.86133,0 -65.17188,-29.31055 -65.17188,-65.17188c0,-35.86133 29.31055,-65.17187 65.17188,-65.17187z"></path>
                </g>
              </g>
            </svg>
            <span>Asset</span>
          </a>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              //   style="fill: #000000"
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
                <g fill="#082b9c">
                  <path d="M68.08333,78.83333h35.83333v71.66667h-35.83333zM21.5,43h35.83333v107.5h-35.83333zM114.66667,21.5h35.83333v129h-35.83333z"></path>
                </g>
              </g>
            </svg>
            <span>Tracker</span>
          </a>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              //   style="fill: #000000"
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
                <g fill="#091997">
                  <path d="M41.28,0c-3.7625,0 -6.88,3.1175 -6.88,6.88v6.88h-20.64c-3.99094,0 -6.88,2.88906 -6.88,6.88v24.08h158.24v-24.08c0,-3.99094 -2.88906,-6.88 -6.88,-6.88h-20.64v-6.88c0,-3.7625 -3.1175,-6.88 -6.88,-6.88h-6.88c-3.7625,0 -6.88,3.1175 -6.88,6.88v6.88h-61.92v-6.88c0,-3.7625 -3.1175,-6.88 -6.88,-6.88zM41.28,6.88h6.88v20.64h-6.88zM123.84,6.88h6.88v20.64h-6.88zM6.88,51.6v106.64c0,3.99094 2.88906,6.88 6.88,6.88h144.48c3.99094,0 6.88,-2.88906 6.88,-6.88v-106.64zM41.28,72.24h17.2v17.2h-17.2zM65.36,72.24h17.2v17.2h-17.2zM89.44,72.24h17.2v17.2h-17.2zM113.52,72.24h17.2v17.2h-17.2zM41.28,96.32h17.2v17.2h-17.2zM65.36,96.32h17.2v17.2h-17.2zM89.44,96.32h17.2v17.2h-17.2zM113.52,96.32h17.2v17.2h-17.2zM41.28,120.4h17.2v17.2h-17.2zM65.36,120.4h17.2v17.2h-17.2zM89.44,120.4h17.2v17.2h-17.2zM113.52,120.4h17.2v17.2h-17.2z"></path>
                </g>
              </g>
            </svg>
            <span>Planning and Advisory</span>
          </a>
        </li>
        {/* <!-- Sidebar Message --> */}
        <div style={{ marginTop: '30px' }}>
          <Profile />
        </div>
      </ul>

      {/* <!-- End of Sidebar --> */}
    </>
  );
};

export default Sidebar;
