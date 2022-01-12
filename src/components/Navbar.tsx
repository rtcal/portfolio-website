import {Component} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

interface NavigationProps {
    navigationRoutes: {
        name: string;
        href: string;
        component: JSX.Element;
    }[]
}

export default class Navbar extends Component<NavigationProps> {

    render() {
        return (
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar sx={{flexWrap: 'wrap'}}>

                    <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                        Callum Turasz's Portfolio
                    </Typography>
                    <nav>
                        {
                            this.props.navigationRoutes.map((element, index) =>
                                <Link
                                    key={index}
                                    variant="button"
                                    color="text.primary"
                                    sx={{my: 1, mx: 1.5}}
                                    href={element.href}
                                >{element.name}</Link>
                            )
                        }
                    </nav>
                </Toolbar>
            </AppBar>
        );
    }
}