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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path={navigation.homePage.base} element={<Landing />} />
            <Route path={"*"} element={<Landing />} />
            <Route
              path={navigation.viewPostPage.dynamic}
              element={<ViewPost />}
            />
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
