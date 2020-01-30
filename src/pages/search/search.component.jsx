import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Listing from "../../components/listing/listing.component";

export class Search extends Component {
  constructor() {
    super();

    this.state = [];
  }

  render() {
    return (
      <div>
        <Listing />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
