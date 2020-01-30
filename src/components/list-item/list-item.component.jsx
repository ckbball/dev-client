import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  /*
  <div
    className="team-item"
    onClick={() => history.push(`${match.url}${teamUrl}`)}
  >
    <h3 className="team-name"> {name.toUpperCase()}</h3>
    <div className="team-description">{description}</div>
    <div className="team-roles">Open Roles: {openRoles}</div>
    <div className="team-skills">Skills Wanted: {skills.join(", ")}</div>
  </div>*/
  <Fragment>
    <Card
      className="team-card"
      onClick={() => history.push(`${match.url}${teamUrl}`)}
    >
      <CardContent>
        <Typography className="team-name" variant="h5" gutterBottom>
          {name.toUpperCase()}
        </Typography>
        <Typography className="team-description">{description}</Typography>
        <Typography className="team-roles">Open Roles: {openRoles}</Typography>
        <Typography className="team-skills">
          Skills Wanted: {skills.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="join-btn">
          Join
        </Button>
        <Button size="small" className="report-btn">
          Report
        </Button>
      </CardActions>
    </Card>
  </Fragment>
);

export default withRouter(ListItem);
