import React, { Component } from 'react';
import './style.css'
import { Link, HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav>
                    <ul>
                      <li><Link to="/projects">PROJECTS</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div id="body">
            <div className="container">
              <div className="row">
                <div className="col-md-12">

                </div>
              </div>
            </div>
          </div>
          <footer>

          </footer>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
