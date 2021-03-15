import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Row1 = () => {
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
                    Asset Balance
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
                    <h6>Enter Amount</h6>
                    <input
                      type="text"
                      className="form-control"
                      id="specificSizeInputName"
                      placeholder="$ 1,25,000"
                      style={{
                        border: '2px solid blue',
                        width: '120px',
                        backgroundColor: '#b3b3ff',
                      }}
                    ></input>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/electronics.png" />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                  <div className="col">
                    <p style={{ color: 'black' }}>Last Updated</p>
                  </div>
                  <div className="col" style={{ marginLeft: '-25px' }}>
                    <p>3rd Dec</p>
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
                    Growth Rate
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
                    <h6>Current Growth Rate</h6>
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      style={{ height: '35px' }}
                    >
                      9.8%
                    </button>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/graph-report.png" />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                  <div className="col">
                    <p style={{ color: 'black' }}>Inflation</p>
                  </div>
                  <div className="col" style={{ marginLeft: '-25px' }}>
                    <p>6%</p>
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
                    <h6>Returns generated per month</h6>
                    <h5 style={{ color: 'skyblue' }}>$ 1,25,000</h5>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/ios-filled/55/4a90e2/get-revenue.png" />
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

export default Row1;
