import {Component} from "react";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

interface TitleProps {
    title: string;
    body?: string;
}

export default class Title extends Component<TitleProps> {

    render() {
        return (
            <Container>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >{this.props.title}</Typography>

                <Typography
                    component="p"
                    variant="h5"
                    align="center"
                    color="text.secondary"
                >{this.props.body}</Typography>
            </Container>
        );
    }
}