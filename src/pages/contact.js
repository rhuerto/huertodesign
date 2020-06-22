import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "gatsby"
import Image from "../components/image"

const CssTextField = withStyles({
    root: {
        background: '#222',
        borderRadius: 3,
        border: 0,
        color: '#fff',
        width: '100%',
        height: 'auto',
        margin: '.5em 0',
        '& label.Mui-focused': {
            color: '#448ccb',
        },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#111',
        },
        '&:hover fieldset': {
            borderColor: '#777',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#448ccb',
        },
        '&.MuiInputBase-input': {
            color: '#fff',
        }
     },
     '@global': {
        '.MuiInputLabel-root': {
            fontSize: '1rem',
            color: '#ccc',
            padding: '0 10px',
            margin: 0,
            },
        '.MuiInputBase-input': {
            fontSize: '1rem',
            color: '#ccc',
            },
        },
    },
})(TextField);


const Contact = () => (
    
	<Layout>
       <SEO title="Contact Me" />
		<div className="contact_wrap">
			<Container fixed>
				<Grid container spacing={3}>
					<Grid item md={6} sm={12} data-sal="slide-right" data-sal-duration="2000" className="contact_intro">
						<aside>
							<h1>Reaching out is a form away!</h1>
							
							<p>Please feel free to email if you would like to have a custom made website or any specific service you require.</p>
							<p>You can view my past experience on my resume or view a few projects I’ve had a privilege to be part of.</p>
							<Button variant="contained" color="primary" className="hvr-push"><a class="roll-link" href="https://www.huertodesign.com/resume/Rod_Huerto_Resume.pdf" target="_blank" className="btn_link" rel="noopener noreferrer">Resume</a></Button>
							<Button variant="contained" color="primary" className="hvr-push"><Link to="/projects/" className="btn_link">Projects</Link></Button>
						</aside>
					</Grid>
					<Grid item md={2} sm={12}></Grid>
					<Grid item md={4} sm={12} data-sal="slide-left" data-sal-duration="2000" className="contact_form">
						<aside>
							<h1>Have questions?</h1>
							<p>Contacting me is easy as filling out a form or an email away.</p>
							<form action="//formspree.io/rhuerto@gmail.com" method="POST" className="" noValidate autoComplete="off">
								<CssTextField variant="outlined" id="custom-css-outlined-input" label="Name" name="Name" />
								<CssTextField variant="outlined" id="custom-css-outlined-input" label="Email" name="Email" />
								<CssTextField id="outlined-textarea" label="Message" multiline rows={4} variant="outlined" name="Message" />
								<Button variant="contained" type="submit" color="primary" className="hvr-push">Submit</Button>
							</form>
						</aside>
					</Grid>
				</Grid>
           		<Wave />
				<div className="contact_details">
					<Grid container spacing={3}>
						<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
							<Card>
								<CardContent>
									<aside>
										<Image filename="huertodesign_logo.png" className="logos" />
										<h2>Projects</h2>
										<p>My online portfolio that displays just a few of my past experience and work. <br /><Link to="/projects">See More</Link></p>	
									</aside>
								</CardContent>
							</Card>
						</Grid>
						
						<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
							<Card>
								<CardContent>
									<aside>
										<Image filename="linkedin_logon.png" className="logos" />
										<h2>LinkedIn</h2>
										<p>You can view my LinkedIn profile that give more insight about me and my career. <br /><a href="https://www.linkedin.com/in/rodhuerto/" target="_blank" rel="noopener noreferrer">See Profile</a></p>
									</aside>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={12} data-sal="flip-down" data-sal-duration="1500">
							<Card>
								<CardContent>
									<aside>
									<Image filename="contact_icon.png" className="logos" />
										<h2>Contact Me</h2>
										<p>You can contact me via email at: <a href="mailto:rod@huertodesign.com">rod@huertodesign.com</a></p>
										</aside>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
		
	</Layout>
)



export default Contact
