import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Row2 = () => {
  return (
    <>
      {/* <!-- Earnings (Monthly) Card Example --> */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="row">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 col">
                    Major Investments
                  </div>
                  <div style={{ marginTop: '-20px' }}>
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
                <hr style={{ marginTop: '0px' }}></hr>
                <div className="row">
                  <div className="col h5 mb-0 font-weight-bold text-gray-800">
                    <h6>Age</h6>
                    <h5 style={{ color: 'black' }}>45 years</h5>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/wired/64/4a90e2/money-bag-euro.png" />
                  </div>
                </div>
                <div className="row my-2">
                  <p style={{ color: 'black' }}>Optimised</p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                    style={{ marginLeft: '10px' }}
                  >
                    <label
                      className="btn btn-outline-primary"
                      for="btnradio1"
                      style={{
                        width: '45px',
                        height: '25px',
                        fontSize: '10px',
                      }}
                    >
                      Yes
                    </label>

                    <label
                      className="btn btn-outline-primary"
                      for="btnradio1"
                      style={{
                        width: '40px',
                        height: '25px',
                        fontSize: '10px',
                      }}
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Earnings (Monthly) Card Example --> */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="row">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 col">
                    Average expenses
                  </div>
                  <div style={{ marginTop: '-20px' }}>
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
                <hr style={{ marginTop: '0px' }}></hr>
                <div className="row">
                  <div className="col h5 mb-0 font-weight-bold text-gray-800">
                    <h6>Amount</h6>
                    <h5 style={{ color: 'skyblue' }}>$ 25,000</h5>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/officel/80/000000/doughnut-chart.png" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p style={{ color: 'black' }}>3 months average</p>
                  </div>
                  <div style={{ marginRight: '100px' }}>
                    <p>$ 45,000</p>
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

export default Row2;
