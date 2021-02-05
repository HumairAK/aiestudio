import React from 'react'
import {graphql, useStaticQuery} from "gatsby";

const About = () => {
    const data = useStaticQuery(graphql`
query aboutQuery {
  allContentfulAbout {
    edges {
      node {
        title
        content {
          content
          id
        }
      }
    }
  }
}

  `)
    const items = data.allContentfulAbout.edges;

    return <section className="section-title">

      {
        items.map(({ node }) => {
          return (
              <p key={node.content.id} className="menu-item">
                <h2>{node.title}</h2>
                <span>{node.content.content}</span>
              </p>
          )
        })
      }
    </section>
}

export default About;