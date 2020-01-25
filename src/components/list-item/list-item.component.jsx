import React from "react";
import { withRouter } from "react-router-dom";

import "./list-item.styles.scss";

const ListItem = ({
  openRoles,
  skills,
  name,
  description,
  teamUrl,
  history,
  match
}) => (
  <div
    className="team-item"
    onClick={() => history.push(`${match.url}${teamUrl}`)}
  >
    <h3 className="team-name"> {name.toUpperCase()}</h3>
    <p className="team-description">{description}</p>
    <p className="team-roles">{openRoles}</p>
    <div className="team-skills">
      {skills
        .filter((skill, idx) => idx < 5)
        .map(skill => (
          <p className="skill-name">`${skill}, `</p>
        ))}
    </div>
  </div>
);

export default withRouter(ListItem);
