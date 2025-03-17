import React from "react";
import Dashboard from "./components/Dashboard";
import { UserDataProvider } from "./context/UserDataContext";

const App: React.FC = () => {
  return (
    <UserDataProvider>
    <Dashboard />
    </UserDataProvider>
  );
};

export default App;
