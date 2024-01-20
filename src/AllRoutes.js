import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Foods from "./pages/Foods";
import Accessorys from "./pages/Accessorys";
import {Login} from "./pages/Login";
import {Signup} from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
const routerInfo = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/pets",
        component: <Pets />
    },
    {
        path: "/foods",
        component: <Foods />
    },
    {
        path: "/accessorys",
        component: <Accessorys />
    },
    {
        path: "/login",
        component: <Login />
    },
    {
        path: "/signup",
        component: <Signup />
    },
    {
        path: "*",
        component: <Notfound />
    }
];
const AllRouter = () => {
    return (
        <Routes>
            {
                routerInfo.map((eachRoute, id) => {
                    return (
                        <Route
                            key={id}
                            path={eachRoute.path}
                            element={eachRoute.component}
                        />
                    );
                })
            }

        </Routes>
    );
}
export default AllRouter;