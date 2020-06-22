import React from "react"
import Wave from "../components/wave"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "gatsby"
import Image from "../components/image"


const Intro = () => (
		<div className="home_wrap">
			<Container fixed>
					<Grid container spacing={3}>
						<Grid item md={5} sm={12} data-sal="slide-right" data-sal-duration="2000" className="home_intro">
							<aside>
                                <h1>Welcome!</h1>
								<h2>Designer. Coder. Optimist.</h2>
                                <p>Hello! My name is Rod Huerto, I am a front-end, interactive, web design and developer based in San Diego, CA.</p>
								<p>Thank you for visiting my portfolio, please learn more about me.</p>
                                <Button variant="contained" color="primary" className="hvr-push" style={{backgroundColor: "#448ccb"}}><Link to="/about" className="btn_link">Learn More</Link></Button>
							</aside>
						</Grid>
					</Grid>
			</Container>
			<Wave />
			<div className="home_details">
				<Container fixed>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<h1>The Technology Stack</h1>
						</Grid>
						<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
							<Card>
								<CardContent>
									<aside>
										<Image filename="gatsby_logo.png" className="logos" />
										<h2>GatsbyJS</h2>
										<p>I used the GatsbyJS framework to help build this static website using easy templating, code optimizations but most importantly the access to use graphQL for data queries.</p>	
									</aside>
								</CardContent>
							</Card>
						</Grid>
						
						<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
							<Card>
								<CardContent>
									<aside>
										<Image filename="react_logo.png" className="logos" />
										<h2>ReactJS</h2>
										<p>Using React to build this static website helped build components that pieces everything together rather than using includes and different templates and layouts.</p>
									</aside>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
							<Card>
								<CardContent>
									<aside>
										<Image filename="material_ui_logo.png" className="logos" />
										<h2>Material-UI</h2>
										<p>I was able to utilize Material-UI for quick interface builds using pre-built components. This also helps with speed and consistent design for the user interface.</p>
										</aside>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>

		</div>

)


export default Intro