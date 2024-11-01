import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { DashboardProvider } from "./Context/Dashboard.jsx";
import { CategoryProvider } from "./Context/Category.jsx";
import { ProductProvider } from "./Context/Products.jsx";
import { UserProvider } from "./Context/User.jsx";

createRoot(document.getElementById("root")).render(
  <DashboardProvider>
    <CategoryProvider>
      <ProductProvider>
        <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </UserProvider>
      </ProductProvider>
    </CategoryProvider>
  </DashboardProvider>
);
