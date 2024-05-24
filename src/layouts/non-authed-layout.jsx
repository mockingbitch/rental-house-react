import React from "react";
import HeaderSignIn from "@/components/header/header-sign-in.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const NonAuthedLayout = ({ children }) => {
    return (
        <>
            <HeaderSignIn/>
                { children }
            <Footer />
        </>
    );
}

export default NonAuthedLayout;