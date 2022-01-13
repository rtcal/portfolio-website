import {Component} from "react";
import Typography from "@mui/material/Typography";
import {Container, Divider} from "@mui/material";

interface ExperienceProps {
    title: string;
    paragraphs?: {
        subtitle: string;
        body: string[];
    }[]
}

export default class Experience extends Component<ExperienceProps> {

    render() {
        return (
            <Container>
                <br/>

                <Divider
                    variant="middle"
                    textAlign="left"
                >

                    <Typography
                        component="h5"
                        variant="h5"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >{this.props.title}</Typography>
                </Divider>

                {
                    this.props.paragraphs?.map((item, index) =>
                        <Container key={index}>
                            <br/>

                            <Typography
                                component="p"
                                variant="h5"
                                align="center"
                                color="text.secondary"
                            >{item.subtitle}</Typography>

                            {
                                item.body.map(
                                    (line, index) => <p key={index}>{line}</p>
                                )
                            }
                        </Container>
                    )
                }

                <Divider/>
                <br/>
            </Container>
        );
    }
}