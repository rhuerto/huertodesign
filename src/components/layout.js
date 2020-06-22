/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
		<div className="content">
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<Footer />
		</div>
  	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
