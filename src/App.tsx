import {Component, Fragment} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";

const navigation = [
    {
        name: "Projects",
        href: "/",
        component: <Projects/>
    },
    {
        name: "Experience",
        href: "/experience",
        component: <Experiences/>
    }
];

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <CssBaseline/>

                <Navbar navigationRoutes={navigation}/>

                <Router>
                    <Routes>
                        {
                            navigation.map(
                                (item, index) => <Route key={index} path={item.href} element={item.component}/>
                            )
                        }
                    </Routes>
                </Router>

            </Fragment>
        );
    }
}