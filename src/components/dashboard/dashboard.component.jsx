import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Listing from "../listing/listing.component";
import Spinner from "../spinner/spinner.component";

const Dashboard = ({
  auth: { user, userLoading },
  profile: { profile, loading }
}) => {
  const noTeams = (
    <div className="no-teams">
      You currently don't have a team. Click{" "}
      <Link className="option" to="/search">
        here
      </Link>{" "}
      to find one to join.
    </div>
  );

  const teams = <Listing />;

  return (
    <div className="dashboard">
      {userLoading && user === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="info-container">
            <div className="info-exp">Experience: {user.experience}</div>
            <div className="info-lang">
              Languages: {user.languages.map(lang => `${lang}, `)}
            </div>
          </div>
          {loading && profile === null ? (
            <Spinner />
          ) : (
            <Fragment>{profile !== null ? teams : noTeams}</Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, null)(Dashboard);
