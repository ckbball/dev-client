import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// this grabs state from root reducer ./index.js
const mapStateToProps = state => ({
  alerts: state.alert
});

// connect(mapStateToProps, action)
export default connect(mapStateToProps)(Alert);
