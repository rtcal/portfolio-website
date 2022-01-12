import {Component} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Album from "../components/Album";

const projects = [
    {
        name: "Minecraft Minesweeper",
        description: "My implementation of minesweeper implemented into a Minecraft plugin for others to enjoy.",
        imageLink: "",
        githubLink: "https://github.com/rtcal/minesweeper"
    }
];

export default class Projects extends Component {

    render() {
        return (
            <Container disableGutters maxWidth="md" component="main" sx={{pt: 8, pb: 6}}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >Projects</Typography>

                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    This is my portfolio of projects and achievements I am proud of.
                </Typography>

                <Album projects={projects}/>
            </Container>
        );
    }
}