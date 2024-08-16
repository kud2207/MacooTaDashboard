import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Produits from "./pages/Produits";
import Client from "./pages/Client.jsx";
import LogInAdm from "./pages/auth/LogInAdm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<LogInAdm />} />
        <Route path="/" element={<Layout />}>
          <Route index />
          <Route path="produits" element={<Produits />} />
          <Route path="/clients" element={<Client />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
