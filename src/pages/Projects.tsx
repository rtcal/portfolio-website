import {Component} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default class Projects extends Component {

    render() {
        return (
            <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Projects
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    This is my portfolio of projects and achievements I am proud of.
                </Typography>
            </Container>
        );
    }
}