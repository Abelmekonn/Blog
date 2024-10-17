import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ childern }) => {
    return (
        <div>
            <Header />
            <div>({childern})</div>
            <Footer />
        </div>
    );
};

export default Layout;
