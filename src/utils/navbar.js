import Home from "../pages/Home";
import Works from "../pages/Works";
import About from '../pages/About';
import Contact from "../pages/Contact";


export const navbar = [
    {
        id:1,
        title: '#home',
        path: '/home',
        element: <Home/>,
        hidden: false
    },
    {
        id:2,
        title: '#projects',
        path: '/projects',
        element: <Works/>,
        hidden: false
    },
    {
        id:3,
        title: '#about-me',
        path: '/about',
        element: <About/>,
        hidden: false
    },
    {
        id:4,
        title: '#contacts',
        path: '/contact',
        element: <Contact/>,
        hidden: false
    },

]