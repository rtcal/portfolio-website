import {Component} from "react";
import Container from "@mui/material/Container";
import Title from "../components/Title";
import Experience from "../components/Experience";

const experiences = [
    {
        title: "Example 1",
        paragraphs: [
            {
                subtitle: "Header 1",
                body: [
                    "Body of text relating to header 1"
                ]
            },
            {
                subtitle: "Header 2",
                body: [
                    "First line of the body relating to header 2",
                    "Another line of the body relating to the same header",
                    "A third line for good luck!"
                ]
            }
        ]
    },
    {
        title: "Example 2",
        paragraphs: [
            {
                subtitle: "Header 1",
                body: [
                    "Body of text relating to header 1"
                ]
            },
            {
                subtitle: "Header 2",
                body: [
                    "First line of the body relating to header 2",
                    "Another line of the body relating to the same header",
                    "A third line for good luck!"
                ]
            }
        ]
    }
];

export default class Experiences extends Component {

    render() {
        return (
            <Container disableGutters maxWidth="md" component="main" sx={{pt: 8, pb: 6}}>
                <Title title="Experiences"/>

                {
                    experiences.map(
                        (item, index) => <Experience title={item.title} paragraphs={item.paragraphs}/>
                    )
                }
            </Container>
        );
    }
}