import React from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box textAlign="center" mb={4}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          RBAC Management Dashboard
        </h1>
      </Box>
      <Box>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label="User Management" />
          <Tab label="Role Management" />
        </Tabs>
        <Box mt={3}>
          {selectedTab === 0 && <UserManagement />}
          {selectedTab === 1 && <RoleManagement />}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
