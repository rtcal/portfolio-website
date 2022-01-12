import {Component} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Album from "../components/Album";
import Title from "../components/Title";

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
                <Title title="Projects" body="The following are the projects I am most proud of"/>

                <Album projects={projects}/>
            </Container>
        );
    }
}