import Example from "App";
import React, { createRef } from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "Screens/About";
import Home from "Screens/Home";
import Contact from "Screens/Contact";

export const routes = [
    {
        path: "/",
        name: "Home",
        element: <Home />,
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: "/about",
        name: "About",
        element: <About />,
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: "/contact",
        name: "Contact",
        element: <Contact />,
        nodeRef: createRef<HTMLDivElement>(),
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <Example />,
        children: routes.map((route) => ({
            index: route.path === "/",
            path: route.path === "/" ? undefined : route.path,
            element: route.element,
        })),
    },
]);
export default router;
