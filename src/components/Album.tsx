import {Component} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";

interface ProjectAlbumProps {
    projects: {
        name: string;
        description: string;
        imageLink: string;
        githubLink: string;
    }[]
}

export default class Album extends Component<ProjectAlbumProps> {

    render() {
        return (
            <Container sx={{py: 8}} maxWidth="md">
                <Grid container spacing={4}>
                    {this.props.projects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{pt: '56.25%'}}
                                    image={project.imageLink}
                                    alt="image could not be loaded"
                                />

                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5" component="h2">{project.name}</Typography>

                                    <Typography>{project.description}</Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" href={project.githubLink} target="_blank">Github</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}