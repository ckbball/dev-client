import React from "react";

import ListItem from "../list-item/list-item.component";

import "./listing.styles.scss";

class Listing extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: [
        {
          id: 1,
          openRoles: 3,
          skills: ["java", "react", "mongodb"],
          teamUrl: "teams/indeed",
          name: "indeed",
          description:
            "We are building a full stack application that handles job postings"
        },
        {
          id: 2,
          openRoles: 4,
          skills: ["javascript", "react", "mongodb"],
          teamUrl: "teams/huby",
          name: "huby",
          description:
            "We are building a full stack application finds people their soul mates"
        },
        {
          id: 3,
          openRoles: 2,
          skills: ["python", "angular", "postgres"],
          teamUrl: "teams/stripe",
          name: "stripe",
          description: "We are building a payments platform"
        },
        {
          id: 4,
          openRoles: 1,
          skills: ["elixir", "vue", "cassandra"],
          teamUrl: "teams/nexio",
          name: "nexio",
          description:
            "We are building a full stack application does distributed stuff"
        }
      ]
    };
  }

  render() {
    return (
      <div className="listing">
        {this.state.teams.map(({ id, ...otherSectionProps }) => (
          <ListItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Listing;
