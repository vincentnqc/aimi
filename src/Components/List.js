import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Addbusiness from "../Containers/Addbusiness";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <>
      {props.user.login && <Addbusiness />}
      <TableContainer component={Paper}>
        {props.user.login ? (
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="left">Information</TableCell>
                <TableCell align="left">Hours</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.businesses.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center" component="th" scope="row">
                    <Link className="link" to={`/Details/${row.id}`}>
                      {row["name"]}{" "}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.info}</TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">{row.spot}</TableCell>
                  <TableCell
                    align="center"
                    onClick={() => props.removeBusiness(row.id)}
                  >
                    {" "}
                    <DeleteIcon />{" "}
                  </TableCell>
                  {console.log(row.name)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="left">Information</TableCell>
                <TableCell align="left">Hours</TableCell>
                <TableCell align="left">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.businesses.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="center" component="th" scope="row">
                    <Link className="link" to={`/Details/${row.id}`}>
                      {row["name"]}{" "}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.info}</TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">{row.spot}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </>
  );
}
