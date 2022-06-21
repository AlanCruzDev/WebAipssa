// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";
import React from 'react';
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 150);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTop;