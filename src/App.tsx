import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import NavBar from "./Pages/Home/NavBar";
import Header from "./Pages/Home/Header";
import CardHeader from "./Card/Card";
import Header1 from "./Pages/Home/Header1";
import Header2 from "./Pages/Home/Header2";
import ScrollToTopHeader from "./Pages/Home/ScrollToTopHeader";
import FormulaireHeader from "./Pages/Home/FormulaireHeader";
import Footer from "./Pages/Home/Footerb";
import Login from "./Pages/Home/Login";

import SaidBar from "./admin/SaidBar";
import UpdateCard from "./admin/UpdateCard";
import AllRequests from "./admin/AllRequests";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <NavBar />
              <Header />
              <CardHeader />
              <Header1 />
              <Header2 />
              <ScrollToTopHeader />
              <FormulaireHeader />
              <Footer />
            </MainLayout>
          }
        />
        <Route path="/Login" element={<Login />} />

        {/* Admin Layout */}
        <Route
          path="/saidBar"
          element={
            <AdminLayout>
              <SaidBar />
            </AdminLayout>
          }
        />
        <Route
          path="/UpdateCard"
          element={
            <AdminLayout>
              <UpdateCard />
            </AdminLayout>
          }
        />
        <Route
          path="/AllRequests"
          element={
            <AdminLayout>
              <AllRequests />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

// Layout for main pages
function MainLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// Layout for admin pages
function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="admin-layout d-flex">
      <SaidBar />
      <main className="admin-content flex-grow-1 p-3">{children}</main>
    </div>
  );
}

export default App;
