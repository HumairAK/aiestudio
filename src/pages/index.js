import React from "react"
import { graphql } from 'gatsby'

const HomePage = ({data}) => {
  return <div>
    {data.allContentfulTestimonials.edges[0].node.testimonial.testimonial}
  </div>
}

export const query = graphql`
query MyQuery {
  allContentfulTestimonials {
    edges {
      node {
        testimonial {
          testimonial
        }
      }
    }
  }
}
`

export default HomePage
