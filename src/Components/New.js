import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const handleSubmit = (name) => {

    props.addTeacher({
      name: name,
      instrument: instrument,
    });
  };

  console.log(props, "props");
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
          label="Name"
          value={name}
        />
        <TextField
          onChange={(e) => {
            setInstrument(e.target.value);
          }}
          label="Instrument"
          value={instrument}
        />
        <TextField label="Email Address" />
        <TextField label="Phone Number" />
        <TextField label="!!!!" />
        <TextField label="****" />
        <TextField label="%%%%" />
        {/* <Link to = "/Instructors"> */}
        <Button
          onClick={() => handleSubmit(name)}
          type="button"
          variant="contained"
          color="primary"
        >
          Start Teaching
        </Button>
        {/* </Link> */}
      </div>
    </form>
  );
}
