import React, { Dispatch, ReactNode, SetStateAction } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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
import errorToast from "./Constant/ErrorToast";
import { decryptage } from "./Constant/Cryptage";
import SubCard from "./Card/SubCard";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";
import ModalUpdate from "./admin/UpdateCard";
import Loading from "./Constant/Loading";


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const user = decryptage(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [testing, setTesting] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkLoginAndRedirect = async () => {
      if (!user || user.length === 0) {
        if (path !== "/" && path !== "/login") {
          navigate("/login");
          await new Promise((resolve) => setTimeout(resolve, 2000));
          errorToast("Please log in to access this page.", "error");
        }
      }
    };

    checkLoginAndRedirect();
  }, [user, path, navigate]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <NavBar setTesting={setTesting}  testing={testing}/>
              {testing ? (
                <>
                  <Header />
                  <CardHeader />
                  <Header1 />
                  <SubCard />
                  <Header2 />
                  <ScrollToTopHeader />
                  <FormulaireHeader />
                  <Footer />
                </>
              ) : (
                <h1 className="text-center">
                 < Loading/>
                 
                </h1>
              )}
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
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
        {/* Route 404 */}
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </>
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
