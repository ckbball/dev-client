import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Listing from "../../components/listing/listing.component";
import { searchTeams } from "../../actions/team";
import CustomButton from "../../components/custom-button/custom-button.component";
import Spinner from "../../components/spinner/spinner.component";

export class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: "",
      page: "1"
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    // add in setAlert somewhere to use cooldown

    const { searchValue, page } = this.state;

    this.props.searchTeams(page, searchValue);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { searchValue, page } = this.state;
    return (
      <div className="search-page">
        <div className="search-container">
          <h2>Select what you would like to search for or hit Search</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <select
                name="searchValue"
                value={searchValue}
                onChange={this.handleChange}
              >
                <option value="0">* Select a Search Value</option>
                <option value="Beginner">Beginner</option>
                <option value="Middle">Middle</option>
                <option value="Senior">Senior</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Devops">Devops</option>
                <option value="Design">Design</option>
              </select>
              <small className="form-text">Select a search value.</small>
            </div>

            <CustomButton type="submit"> Search</CustomButton>
          </form>
        </div>
        {this.state.loading ? (
          ((<Spinner />), console.log("spinner"))
        ) : (
          <Fragment>
            <Listing />
            {
              //here is where the pagination component will go
            }
          </Fragment>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchTeams: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.team.loading
});

export default connect(mapStateToProps, { searchTeams })(Search);
