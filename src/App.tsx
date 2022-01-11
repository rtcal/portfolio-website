import {Component, Fragment} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Experience from "./pages/Experience";

export const navigation = [
    {
        name: "Home",
        href: "/",
        component: <Home/>
    },
    {
        name: "Projects",
        href: "/projects",
        component: <Projects/>
    },
    {
        name: "Achievements",
        href: "/achievements",
        component: <Achievements/>
    },
    {
        name: "Experience",
        href: "/experience",
        component: <Experience/>
    }
];

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <GlobalStyles styles={{
                    ul: {
                        margin: 0,
                        padding: 0,
                        listStyle: 'none'
                    }
                }}/>

                <CssBaseline/>

                <Navbar/>

                <Router>
                    <Routes>
                        {
                            navigation.map((item, index) =>
                                <Route
                                    key={index}
                                    path={item.href}
                                    element={item.component}
                                />
                            )
                        }
                    </Routes>
                </Router>

            </Fragment>
        );
    }
}