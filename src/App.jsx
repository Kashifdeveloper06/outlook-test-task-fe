import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Email from "./pages/Email";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Email />} /> */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Email />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
