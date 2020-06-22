import React from "react"
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"

const Footer = () => (
    <footer>

            <Container fixed>
                <Grid container adirection="row" justify="center" alignItems="center" spacing={4}>
                    <Grid item md={6} sm={12}>
                        <h2><Link to="/">HUERTO<span>design</span></Link></h2>
                        <p>© {new Date().getFullYear()} - Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">GatsbyJS</a> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></p>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <div>
                            <ul className="footer_nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Me</Link></li>
                                <li><Link activeClass="active" to="/projects">Projects</Link></li>
                                <li><Link activeClass="active" to="/contact">Contact Me</Link></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>


    </footer>
)

export default Footer
