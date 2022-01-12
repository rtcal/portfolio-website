import {Component} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Title from "../components/Title";

export default class Experience extends Component {

    render() {
        return (
            <Container disableGutters maxWidth="md" component="main" sx={{pt: 8, pb: 6}}>
                <Title title="Experience"/>
            </Container>
        );
    }
}