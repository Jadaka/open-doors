import React, { Component } from 'react';
import ProgressArc from './progress-arc';
import StatBar from './stat-bar';
import SingleTitle from '../common/SingleTitle';
import SingleRating from '../common/SingleRating';
import Header from '../common/Header';
import './company.scss';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // set dummy data for now:
    const companyId = 1;
    const name = 'Informz';
    const url = 'www.Informz.com';
    const address = 'Saratoga Springs, NY';
    const dummyRatings = {
      "overallRating"  : 329,
      "reviewCount"    : 3,
      "salaryCount"    : 1,
      "interactions"   : 300,
      "harassment"     : 433,
      "advancement"    : 400,
      "familySupport"  : 400,
      "workLifeBalance": 333,
      "equalPay"       : 433,
    };

    return (
      <div className="row">

        <div className="col-xs-12">
          <Header />
        </div>

        <div className="col-xs-10 col-xs-offset-1">
          <SingleTitle
            id={companyId}
            name={name}
            url={url}
            address={address}
          />
          <SingleRating
            ratings={dummyRatings}
          />
        </div>
        <div className="stats-container col-xs-10 col-xs-offset-1">

          <div className="stats-title row">
            <div className="col-xs-10 col-xs-offset-1">
              <h3 className="col-xs-12 stats-label-misc">
                Stats
              </h3>
            </div>
          </div>

          <div className="row stats">
            <div className="col-xs-10 col-xs-offset-1 row">
              <div className="progress-arc col-xs-2">
                <ProgressArc
                  height={150}
                  width={150}
                  innerRadius={50}
                  outerRadius={55}
                  id="d3-arc"
                  duration={1000}
                  backgroundColor="#e6e6e6"
                  foregroundColor="#E338A3"
                  percentComplete={.28}
                />
                <span className="progress-arc-label">Females</span>
              </div>
              <div className="progress-arc col-xs-2">
                <ProgressArc
                  height={150}
                  width={150}
                  innerRadius={50}
                  outerRadius={55}
                  id="d3-arc"
                  duration={1000}
                  backgroundColor="#e6e6e6"
                  foregroundColor="#E338A3"
                  percentComplete={.78}
                />
                <span className="progress-arc-label">Male</span>
              </div>

              <div className="all-stats-container col-xs-7 col-xs-offset-1 row middle-xs">
                <div className="stat-bar-container col-xs-4">
                  <StatBar
                    rating={341}
                    label="Equal Pay"
                  />
                </div>
                <div className="stat-bar-container col-xs-4">
                  <StatBar
                    rating={388}
                    label="Harassment"
                  />
                </div>
                <div className="stat-bar-container col-xs-4">
                  <StatBar
                    rating={480}
                    label="Advancement"
                  />
                </div>
                <div className="stat-bar-container col-xs-4">
                  <StatBar
                    rating={379}
                    label="Family Support"
                  />
                </div>
                <div className="stat-bar-container col-xs-4">
                  <StatBar
                    rating={411}
                    label="Work Life Balance"
                  />
                </div>
                <div className="stat-bar-container col-xs-4">
                  <StatBar
                    rating={425}
                    label="Interactions"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="stats-title row">
            <div className="col-xs-10 col-xs-offset-1">
              <h3 className="col-xs-12 stats-label-misc">
                Reviews
              </h3>
            </div>
          </div>

          <div className="review-content col-xs-10 col-xs-offset-1">
            <div className="row">

              <div className="col-xs-12 single-review-container">
                <p>
                  <span className="bold">Lots of Interesting Projects</span>
                  I worked at SolutionSet Full Time
                </p>
                <p>
                  <span className="bold">Pros</span>
                  Different clients means different technical problems to solve. Lots of learning of new technologies and applying on the job. My reporting chain really pushed for a quality 40 hours a week and that’s it. So good work life balance there.
                </p>
                <p>
                  <span className="bold">Cons</span>
                  You are creating stuff for another company. Once the contract is done, the thing you created is taken away by the client and sometimes destroyed.
                </p>
              </div>

              <div className="col-xs-12 single-review-container">
                <p>
                  <span className="bold">Lots of Interesting Projects</span>
                  I worked at SolutionSet Full Time
                </p>
                <p>
                  <span className="bold">Pros</span>
                  Different clients means different technical problems to solve. Lots of learning of new technologies and applying on the job. My reporting chain really pushed for a quality 40 hours a week and that’s it. So good work life balance there.
                </p>
                <p>
                  <span className="bold">Cons</span>
                  You are creating stuff for another company. Once the contract is done, the thing you created is taken away by the client and sometimes destroyed.
                </p>
              </div>

              <div className="col-xs-12 single-review-container">
                <p>
                  <span className="bold">Lots of Interesting Projects</span>
                  I worked at SolutionSet Full Time
                </p>
                <p>
                  <span className="bold">Pros</span>
                  Different clients means different technical problems to solve. Lots of learning of new technologies and applying on the job. My reporting chain really pushed for a quality 40 hours a week and that’s it. So good work life balance there.
                </p>
                <p>
                  <span className="bold">Cons</span>
                  You are creating stuff for another company. Once the contract is done, the thing you created is taken away by the client and sometimes destroyed.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
