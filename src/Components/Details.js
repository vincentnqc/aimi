import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default function Details(props) {
  const id = props.match.params.id;
  const businesses = props.businesses.find(c => c.id == id);

  return (
    <div>
      <Paper className={"box"}>
        <h2>{businesses.name}</h2>
        <h2>{businesses.info}</h2>
        <h2>{businesses.number}</h2>
        <h2>{businesses.spot}</h2>
      </Paper>
    </div>
  );
}
