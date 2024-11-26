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

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
      )
    );
  };

  const addUser = () => {
    if (newUser.name && newUser.role) {
      setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
      setNewUser({ name: "", role: "", status: "Active" });
    }
  };

  return (
    <Box>
      <Box mb={4}>
        <h2>User Management</h2>
        <Box display="flex" gap={2} alignItems="center" mb={2}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Role"
            variant="outlined"
            size="small"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={addUser}>
            Add User
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={user.status === "Active" ? "secondary" : "primary"}
                    onClick={() => toggleStatus(user.id)}
                  >
                    Toggle Status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;
