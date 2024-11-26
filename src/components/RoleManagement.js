import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const addRole = () => {
    if (newRole.name) {
      setRoles((prev) => [
        ...prev,
        { ...newRole, id: prev.length + 1, permissions: newRole.permissions.split(",") },
      ]);
      setNewRole({ name: "", permissions: [] });
    }
  };

  return (
    <Box>
      <Box mb={4}>
        <h2>Role Management</h2>
        <Box display="flex" gap={2} alignItems="center" mb={2}>
          <TextField
            label="Role Name"
            variant="outlined"
            size="small"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          />
          <TextField
            label="Permissions (comma-separated)"
            variant="outlined"
            size="small"
            value={newRole.permissions}
            onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={addRole}>
            Add Role
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role</TableCell>
              <TableCell>Permissions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RoleManagement;
