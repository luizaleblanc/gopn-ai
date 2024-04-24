import React from "react";
import AsideMenu from "../AsideMenu";

const DashboardTemplate = ({ children }) => {
    return (
        <div className="flex h-screen w-screen">
            <AsideMenu />
            {children}
        </div>
    );
};

export default DashboardTemplate;
