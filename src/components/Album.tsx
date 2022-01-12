import {Component} from "react";
import {Container, Grid} from "@mui/material";
import Project, {ProjectProps} from "./Project";

interface ProjectAlbumProps {
    projects: ProjectProps[]
}

export default class Album extends Component<ProjectAlbumProps> {

    render() {
        return (
            <Container sx={{py: 8}} maxWidth="md">
                <Grid container spacing={4}>
                    {this.props.projects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Project
                                name={project.name}
                                description={project.description}
                                imageLink={project.imageLink}
                                githubLink={project.githubLink}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}