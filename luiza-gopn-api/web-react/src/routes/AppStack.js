import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Auth
import Login from "../modules/Auth/pages/Login";

//Dashboard
import Orders from "../modules/Dashboard/pages/Orders";
import Products from "../modules/Dashboard/pages/Products";
import { AuthProvider } from "../context/AuthContext";
import Create from "../modules/Dashboard/pages/Create";
import Edit from "../modules/Dashboard/pages/Edit";

const AppStack = () => {
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />  
                    <Route path="/dashboard/orders" element={<Orders />} />
                    <Route path="/dashboard/products" element={<Products />} />
                    <Route path="/dashboard/create" element={<Create />} />
                    <Route path="/dashboard/edit" element={<Edit />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppStack;
