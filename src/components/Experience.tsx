import {Component} from "react";
import Typography from "@mui/material/Typography";
import {Card, Container, Divider} from "@mui/material";

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
            <Card style={{margin:20}}>

                <Divider
                    variant="middle"
                    textAlign="left"
                >

                    <Typography
                        component="h5"
                        variant="h5"
                        align="left"
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
                                align="left"
                                color="text.secondary"
                            >{item.subtitle}</Typography>

                            {
                                item.body.map(
                                    (line, index) => <p key={index} style={{margin: 0}}>{line}</p>
                                )
                            }
                        </Container>
                    )
                }
            </Card>
        );
    }
}