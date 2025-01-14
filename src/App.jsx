import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navigation } from "./site/navigation";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import ViewPost from "./pages/ViewPost/ViewPost";
import AuthScreen from "./components/AuthScreen/AuthScreen";
import { Flip, ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import Explore from "./pages/Explore/Explore";
import ManageBlog from "./pages/ManageBlog/ManageBlog";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 800) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          {isMobile ? <MobileHeader /> : <Header />}
          <Routes>
            <Route path={navigation.homePage.base} element={<Landing />} />
            <Route path={"*"} element={<Landing />} />
            <Route
              path={navigation.viewPostPage.dynamic}
              element={<ViewPost />}
            />
            <Route
              path={navigation.explorePage.dynamic}
              element={<Explore />}
            />
            <Route
              path={navigation.manageBlogsPage.base}
              element={<ManageBlog />}
            />
            <Route
              path={navigation.manageBlogsPage.dynamic}
              element={<ManageBlog />}
            />
            <Route path={navigation.explorePage.base} element={<Explore />} />
          </Routes>
          <AuthScreen />
          <ToastContainer
            position={window.innerWidth > 800 ? "bottom-left" : "top-center"}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={window.innerWidth > 800 ? Flip : Bounce}
          />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
