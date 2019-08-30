import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

      <p>

        <html>

          <head>
            <meta charset="utf-8" />
            <title>Route Management</title>



          </head>

          <body>
            <div class="row">
              <div class="col-lg-6">
                <h1>List</h1>
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <select class="form-control" id="roadclass">
                        <option value="0">Select Road Class</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <select class="form-control" id="routeclass">
                        <option value="0">Select Route Class</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <table id="routestable" class="table table-bordered table-striped">
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <h1>Map</h1>
                <div id="map" style={{ height: "600px" }}>

                </div>
              </div>
            </div>

          </body>


        </html>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>

    </div>
  );
}

export default App;
