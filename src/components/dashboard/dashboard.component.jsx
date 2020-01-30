import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCurrentProfile } from "../../actions/profile";
import Listing from "../listing/listing.component";

const Dashboard = ({ user, getCurrentProfile, profile }) => {
  useEffect(() => {
    getCurrentProfile(user);
  }, []);

  const noTeams = (
    <div className="no-teams">
      You currently don't have a team. Click
      <Link className="option" to="/search">
        here
      </Link>
      to find one to join.
    </div>
  );

  const teams = <Listing />;

  return (
    <div className="dashboard">
      <div className="info">info here</div>
      {<Fragment>{profile.profile !== null ? teams : noTeams}</Fragment>}
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
