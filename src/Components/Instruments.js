import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "./Header"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "100px",
    padding: "20px",
    
  },
  paper: {
    padding: "100px",
    textAlign: 'center',
    border: "solid 1px black",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function NestedGrid(props) {
  const classes = useStyles();

  function FormRow(props) {
    console.log(props)
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Link to={`/Lesson/${props.column1.name}`}>
    <Paper className={classes.paper}>
            <img width="200px" src= {props.column1.image}></img>
            {props.column1.name}
    </Paper>
    </Link>
        </Grid>
        <Grid item xs={4}>
        <Link to={`/Lesson/${props.column2.name}`}>
          <Paper className={classes.paper}>
          <img width="200px" src= {props.column2.image}></img>
            {props.column2.name}</Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
        <Link to={`/Lesson/${props.column3.name}`}>
          <Paper className={classes.paper}>
          <img width="200px" src= {props.column3.image}></img>
          {props.column3.name}</Paper>
          </Link>
        </Grid>
      </React.Fragment>
    );
  }

  console.log("instruments",props)

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid container item xs={12} spacing={3}>
          <FormRow column1={props.instruments[0]} column2={props.instruments[1]} column3={props.instruments[2]} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow column1={props.instruments[3]} column2={props.instruments[4]} column3={props.instruments[5]} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow column1={props.instruments[6]} column2={props.instruments[7]} column3={props.instruments[8]}/>
        </Grid>
        </Grid>
    </div>
  );
}