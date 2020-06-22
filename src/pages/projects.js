import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link, graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
	root: {
	  padding: theme.spacing(0),
	  margin: theme.spacing(0),
	  fontFamily: 'Montserrat',
	  minWidth: '100%',
	  minHeight: '380px',
	},
	media: {
	  height: 150,
	},
  }))
 
export default function Blog({data}) {
	
	const classes = useStyles();

  	return (

	<Layout>
		<SEO title="Projects" />
			<div className="blog_wrap">
				<Container fixed>
					<Grid container spacing={5} className="blog_container">
						<Grid item md={12} sm={12}>
							<h1>Projects</h1>
							<p>Showcased here are a few of the clientele I have designed and developed websites, mobile, tablet, logos and advertisements for.</p>
						</Grid>
						{data.allMarkdownRemark.edges.map(post => (
							<Grid item md={4} sm={12} data-sal="flip-up" data-sal-duration="2000" className="blog_details">
								<Link to={post.node.frontmatter.path}>
								<div key={post.node.id} className="hvr-bounce-in">
									<Card className={classes.root}>
										<CardActionArea>
											<CardMedia
											className={classes.media}
											component="img"
											alt={post.node.frontmatter.title}
											image={post.node.frontmatter.image}
											title={post.node.frontmatter.title}
											/>
											<CardContent>
												<h4>{post.node.frontmatter.title}</h4>
												<p>{post.node.frontmatter.description}</p>
												<Link to={post.node.frontmatter.path}>See More</Link>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>
								</Link>
							</Grid>
						))}
					</Grid>
				</Container>
				<Wave />
			</div>
	</Layout>

  )
}

export const pageQuery = graphql`
	query BlogIndexQuery {
	
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
		  edges {
			node {
			  id
			  frontmatter {
				title
				description
				date
				author
				path
				image
			  }
			}
		  }
		}
	  
}`

