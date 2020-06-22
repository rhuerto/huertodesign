import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import { Link, graphql } from 'gatsby'


export default function BlogPost({data}) {

    const post = data.markdownRemark

    return (

        <Layout>
            <SEO title={post.frontmatter.title} />
            <div className="blogpost_wrap">
                <Container fixed>
                    <Grid container>
                        <Grid item md={12} sm={12}>
                            <Grid container spacing={0} className="blogpost_details">
                                <Grid item xs={12}>
                                    <div className="breadcrumbs">
                                        <ul>
                                            <li><HomeIcon fontSize="small" className="homeicon" /></li>
                                            <li><Link to="/"> Home</Link> /</li>
                                            <li><Link to="/projects">Projects</Link> /</li>
                                            <li><span>{post.frontmatter.title}</span></li>
                                        </ul>
                                    </div>
                                    <h1>{post.frontmatter.title}</h1>
                                </Grid>
                                <Grid item md={9} sm={12} >
                                    <article>
                                        <img src={post.frontmatter.image} width="100%" alt="" />
                                        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
                                    </article>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className="blogpost_sidebar">
                                    <aside>
                                        <h3>More Projects</h3>
                                        {data.allMarkdownRemark.edges.map(post => (
                                            <Link to={post.node.frontmatter.path}>
                                            <div key={post.node.frontmatter.id} className="blogpost_posts">
                                                <img src={post.node.frontmatter.image} alt="" />
                                                <h4>{post.node.frontmatter.title}</h4>
                                            </div>
                                            </Link>
                                        ))}
                                    </aside>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Wave />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
        html
        frontmatter {
            title
            description
            date
            author
            path
            image
        }
    }
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
      
}
`