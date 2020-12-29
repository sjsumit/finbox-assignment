import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    width:"50px",
    minWidth:300,
  },
  th:{
    height:"70px",
  }

});

export default function DashBoard(props) {
  const classes = useStyles();

  return (
    <>
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
    </div>
    <br/>
    <h1>Dashboard</h1>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.th} align="left" >User Name</StyledTableCell>
            <StyledTableCell className={classes.th} align="right">Final Calculation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.location.inputFields ? props.location.inputFields.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell className={classes.td} align="left">
                {row.firstName}
              </StyledTableCell >
              <StyledTableCell className={classes.td} align="right">{row.share-row.paid}</StyledTableCell>
            </StyledTableRow>
          ))
        : null}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}