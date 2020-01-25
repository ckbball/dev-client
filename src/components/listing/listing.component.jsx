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
          skills: ["java", "react", "mongodb"]
        },
        {
          id: 2,
          openRoles: 4,
          skills: ["javascript", "react", "mongodb"]
        },
        {
          id: 3,
          openRoles: 2,
          skills: ["python", "angular", "postgres"]
        },
        {
          id: 4,
          openRoles: 1,
          skills: ["elixir", "vue", "cassandra"]
        }
      ]
    };
  }

  render() {
    return (
      <div className="listing">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <ListItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Listing;
