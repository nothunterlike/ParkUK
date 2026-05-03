import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              The people behind Find it, Park it — building smarter, faster, and
              easier parking solutions for everyone.
            </p>
          </div>

          <div className="row">
            {this.props.data ? (
              this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading team...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
