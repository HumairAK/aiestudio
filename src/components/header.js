import React from "react"
import {graphql, useStaticQuery} from "gatsby";

const Header = () => {
    const data = useStaticQuery(graphql`
        query contactQuery {
          allContentfulContact {
            edges {
              node {
                socialmedia
                province
                phone
                email
                city
                address
                country
                title
                hours
              }
            }
          }
        }
  `)
    const items = data.allContentfulContact.edges;
    return <header>
        {
            items.map(({ node }, i) => {
                return (
                        <span key={i}>{node.title}</span>
                )
            })
        }
        {
            items.map(({ node }, i) => {
                return (
                    <span key={i}>{node.address}, {node.city}, { node.province } </span>
                )
            })
        }
    </header>
}


export default Header
