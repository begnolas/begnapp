// Libraries
import { Route, Routes } from "react-router-dom";

// Contex
import AppContextProvider from "./utils/AppContex";

// Main components
import Navigator from "./components/main_layout/Navigator";
import Layout from "./components/main_layout/Layout";
import Footer from "./components/main_layout/Footer";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Test from "./pages/Test";


function App() {
  return (
    <>
      <AppContextProvider>
        <div className="container">
          <Navigator />
          <Layout>
            <Routes basename={process.env.REACT_APP_BEGNAPP_ROOT}>
              <Route path={process.env.REACT_APP_BEGNAPP_ROOT}           element={<Home />} exact />
              <Route path={process.env.REACT_APP_BEGNAPP_ROOT+ "login"}   element={<Login />} />
              <Route path={process.env.REACT_APP_BEGNAPP_ROOT+ "profile"} element={<Profile />} />
              <Route path={process.env.REACT_APP_BEGNAPP_ROOT+ "link1"}   element={<Test />} />
              <Route path={process.env.REACT_APP_BEGNAPP_ROOT+ "link2"}   element={<Test />} />
              <Route path={process.env.REACT_APP_BEGNAPP_ROOT+ "link3"}   element={<Test />} />

            </Routes>
          </Layout>
        </div>
        <Footer />
      </AppContextProvider>
    </>
  );
}

export default App;
