import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'],
        datasets: [
          {
            barThickness: 45,
            label: 'population',
            data: [150, 200, 300, 400, 500, 600, 700, 800, 900, 950],
            backgroundColor: [
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
              'rgba(14, 4, 143)',
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <div style={{ marginBottom: '-10px' }}>
          <div
            className="row my-2"
            style={{
              width: '10%',
            }}
          >
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
              style={{ right: '0px' }}
            >
              <label
                className="btn btn-outline-primary"
                for="btnradio1"
                style={{
                  width: '60px',
                  height: '30px',
                  fontSize: '15px',
                  backgroundColor: '#3333CC',
                  color: 'black',
                }}
              >
                10y
              </label>

              <label
                className="btn btn-outline-primary"
                for="btnradio1"
                style={{
                  width: '60px',
                  height: '30px',
                  fontSize: '15px',

                  color: 'black',
                }}
              >
                20y
              </label>

              <label
                className="btn btn-outline-primary"
                for="btnradio1"
                style={{
                  width: '60px',
                  height: '30px',
                  fontSize: '15px',
                  backgroundColor: '#3333CC',
                  color: 'black',
                }}
              >
                30y
              </label>
            </div>
          </div>
        </div>
        <Bar
          data={this.state.chartData}
          width={100}
          height={45}
          options={{
            title: {
              display: true,
              text: 'Annual Project',
              fontSize: 20,
              fontColor: 'black',
            },
            legend: {
              display: false,
              position: 'top',
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Asset balance (in lakhs)',
                    fontColor: 'black',
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'No. of years',
                    fontColor: 'black',
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default BarGraph;
