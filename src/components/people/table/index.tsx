import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import Link from "@mui/material/Link";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import usePromise from "../../../shared/use-promise";
import personsClient from "../api";
import { Person } from "../types";

function personToRow(person: Person) {
  return (
    <TableRow key={person.id}>
      <TableCell>
        <Link component={RouterLink} to={`${person.id}/details`}>
          {person.id}
        </Link>
      </TableCell>
      <TableCell align="right">{person.name}</TableCell>
      <TableCell align="right">{person.birthday}</TableCell>
    </TableRow>
  );
}

function PeopleTable() {
  const { isLoading, error, data } = usePromise(() =>
    personsClient.listPersons()
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  if (data) {
    const people = data.map((person) => personToRow(person));
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Fecha nacimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{people}</TableBody>
        </Table>
      </TableContainer>
    );
  }

  return null;
}

export default PeopleTable;
