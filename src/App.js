import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "@shopify/polaris/build/esm/styles.css";
import HomePage from './components/HomePage';
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import PrivateRoute from './services/PrivateRoute';



function App() {

  return (
    <>
      <div className="App">
        <PolarisProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
            <Routes>
              <Route exact path="/login"  element={<LoginPage  title="Login" component = "login" />} />
            </Routes>
            <Routes>
              <Route exact path="/signup"  element={<LoginPage title="Welcome" component = "signup"/>} />
            </Routes>
            <Routes>
              <Route exact path="/dashboard"  element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            </Routes>
          </BrowserRouter>
        </PolarisProvider>
      </div>
    </>
  );
}

export default App;
