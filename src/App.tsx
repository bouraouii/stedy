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


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const user = decryptage(localStorage.getItem("user") || "{}");
  const [dataDB, setDataDB] = React.useState<any>({});

  const navigate = useNavigate();

  const path = window.location.pathname;

  React.useEffect(() => {
    const checkLoginAndRedirect = async () => {
      // Vérifie si login est vide, null ou non défini
      if (!user || user.length === 0) {
        if (path !== "/" && path !== "/login" && path !== "/Login") {
          // Affiche un message d'erreur via le toast

          navigate("/login");
          // Attente avant de rediriger
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Attendre 1.5 secondes
          errorToast("They will answer you for registration first", "error");
          // Redirige vers la page de login après avoir affiché l'erreur
        }
      }
    };

    checkLoginAndRedirect();
  }, [user, path, navigate]);
  const [testing , setTesting]=React.useState<boolean>(false)
 
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
           <NavBar setTesting={setTesting} />
            {testing? (
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
              <h1 className="text-center">No data available. Please refresh the page or check the data.</h1>
            )}
          
          </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />

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
