import Home from "../pages/Home";
import Works from "../pages/Works";


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
        title: '#works',
        path: '/works',
        element: <Works/>,
        hidden: false
    }
]