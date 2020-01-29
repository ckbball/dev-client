import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";

class dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile(this.props.user);
  }

  render() {
    return <div>haha</div>;
  }
}

dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(dashboard);
