import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { Link } from "react-router-dom";

class AddCar extends Component {
  state = {
    open: false,
    name: "",
    info: "",
    number: "",
    spot: ""
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.businesses.length + 1;
    delete payload.open;
    console.log("THE CAR", payload);
    this.props.addbusiness(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        info: "",
        number: "",
        spot: ""
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1></h1>
          <Button
            variant="contained"
            className="add-car"
            onClick={this.toggleDialog}
          >
            Add Business
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Business</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px"
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="info"
                  placeholder="Information"
                  value={this.state.info}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="number"
                  placeholder="Hours ex.8:00am-11:00pm"
                  value={this.state.number}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="spot"
                  placeholder="Address"
                  value={this.state.spot}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Link to="/">
                  <Button
                    onClick={this.handleSubmit}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Link>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddCar;
