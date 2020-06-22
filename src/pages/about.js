import React from "react"
import Layout from "../components/layout"
import Wave from "../components/wave"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "gatsby"
import Image from "../components/image"


const About = () => (
	<Layout>
		<SEO title="About Me" />
			<div className="about_wrap">
				<Container fixed>
						<Grid container spacing={3} justify="flex-end">
							<Grid item md={6} sm={12} data-sal="slide-left" data-sal-duration="2000" className="about_intro">
								<div>
									<h1>Just a little bit about me</h1>
									<p>Multi-faceted, efficient & reliable front-end, interactive, product engineer, design and developer. With 20+ years of experience successfully managing all facets of site development, from initial design and architecture to site deployment and client management.</p>
									<p>I have management and leadership experience leading designers and developers to produce digital products that translates to proper UI/UX standards and ensure delivery of projects and expectations.</p>
									<p>I've currently been in the newspaper industry for the past twelve years. There I worked with multiple departments and teams designing and developing CMS integration, landing pages, email campaigns, advertisement and marketing campaigns. During my latest assignment I was part of the front-end team managing and integrating advertising interfaces and implementation.</p>
									<Button variant="contained" color="primary" className="hvr-push"><a class="roll-link" href="https://www.huertodesign.com/resume/Rod_Huerto_Resume.pdf" target="_blank" className="btn_link" rel="noopener noreferrer">Resume</a></Button>
									<Button variant="contained" color="primary" className="hvr-push"><Link to="/projects/" className="btn_link">Projects</Link></Button>
								</div>
							</Grid>
						</Grid>
				</Container>
				<Wave />
				<div className="about_details">
					<Container fixed>
						<Grid container spacing={3}>
							<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
								<Card>
									<CardContent>
										<aside>
											<Image filename="resume_icon.png" className="logos" />
											<h2>Resume</h2>
											<p>You can view my past experience and see more details on all past companies, clients and projects I've had a privilege to work on. <br /><a href="https://www.huertodesign.com/resume/Rod_Huerto_Resume.pdf" target="_blank" rel="noopener noreferrer">See More</a></p>	
										</aside>
									</CardContent>
								</Card>
							</Grid>
							<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
								<Card>
									<CardContent>
										<aside>
											<Image filename="design_icon.png" className="logos" />
											<h2>Design</h2>
											<p>With twenty years experience designing websites, landing pages, advertisement campaigns, display banners, mock-ups and even print materials I have in-depth knowledge and skills to design on any platform.</p>
											</aside>
									</CardContent>
								</Card>
							</Grid>
							<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
								<Card>
									<CardContent>
										<aside>
											<Image filename="development_icon.png" className="logos" />
											<h2>Development</h2>
											<p>From HTML to CSS and Javascript, I have developed websites from the ground up using current trends and frameworks. And it won't stop there, I am constantly learning more and currently pursuing my degree in software development to have more knowledge of the full-stack process.</p>
										</aside>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</div>
			</div>
	</Layout>
)


export default About
