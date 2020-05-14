import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const handleSubmit = (name) => {
    console.log(name, "heloos frund");

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
          id="standard"
          label="Name"
          value={name}
        />
        <TextField id="standard" label="Instrument" value={instrument} />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standard-search" label="Search field" type="search" />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
        <Button
          onClick={() => handleSubmit(name)}
          type="button"
          variant="contained"
          color="primary"
        >
          Primary
        </Button>
      </div>
    </form>
  );
}
