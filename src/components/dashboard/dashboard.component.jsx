import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCurrentProfile } from "../../actions/profile";
import Listing from "../listing/listing.component";
import Spinner from "../spinner/spinner.component";

const Dashboard = ({
  auth: { user },
  getCurrentProfile,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile(user);
  }, []);

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
      <div className="info-container">
        <div className="info-exp">{user.experience}</div>
        <div className="info-lang">{user.languages}</div>
      </div>
      {loading && profile === null ? (
        <Spinner />
      ) : (
        <Fragment>{profile !== null ? teams : noTeams}</Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
