import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navigation } from "./site/navigation";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path={navigation.homePage} element={<></>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
