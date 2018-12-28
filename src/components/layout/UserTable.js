import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const UserTable = ({ projects }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>Firstname</TableCell>
          <TableCell>Lastname</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects &&
          projects.map(project => {
            return (
              <TableRow key={project.id}>
                <TableCell component="th" scope="row">
                  {project.email}
                </TableCell>
                <TableCell>{project.fname}</TableCell>
                <TableCell>{project.lname}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default UserTable;
