import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navigation } from "./site/navigation";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import ViewPost from "./pages/ViewPost/ViewPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path={navigation.homePage.base} element={<Landing />} />
            <Route
              path={navigation.viewPostPage.dynamic}
              element={<ViewPost />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
