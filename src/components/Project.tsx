import {Component} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export interface ProjectProps {
    name: string;
    description: string;
    imageLink: string;
    githubLink: string;

}

export default class Project extends Component<ProjectProps> {

    render() {
        return (
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component="img"
                    sx={{pt: '56.25%'}}
                    image={this.props.imageLink}
                    alt="image could not be loaded"
                />

                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">{this.props.name}</Typography>
                    <Typography>{this.props.description}</Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" href={this.props.githubLink} target="_blank">Github</Button>
                </CardActions>
            </Card>
        );
    }
}