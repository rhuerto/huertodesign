import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Nav from "./nav"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


export default function Header() {

	const data = useStaticQuery(graphql`
	query MyQuery {
		__typename
		file(relativePath: {eq: "huertodesign_main_logo.png"}) {
		  childImageSharp {
			fluid(maxWidth: 300) {
				...GatsbyImageSharpFluid_noBase64
			  }
		  }
		}
	  }
	`)

	return (

		<header className="nav-down">
	
				<Container fixed>
					<Grid container adirection="row" justify="center" alignItems="center" spacing={3}>
						<Grid item md={3} sm={3} xs={7}>
							<Link to="/">
							<Img fluid={data.file.childImageSharp.fluid} alt="" /> </Link>
						</Grid>
						<Grid item md={9} sm={12} xs={12}>
							<Nav />
						</Grid>
					</Grid>
				</Container>

		</header>

	)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

