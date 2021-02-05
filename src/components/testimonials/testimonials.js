import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Testimonials = () => {
  const data = useStaticQuery(graphql`
query MyQuery {
  allContentfulTestimonials {
    edges {
      node {
        testimonial {
          id
          testimonial
        }
        client
      }
    }
  }
}
  `)
  const items = data.allContentfulTestimonials.edges;

  return <section className="section-title">
    <h2>SOME TESTIMONIALS</h2>
    {
      items.map(({ node }) => {
        return (
            <p key={node.testimonial.id} className="menu-item">
              <span>{node.testimonial.testimonial}</span>
              <span style={{ 'fontWeight': 'bold' }}> ~ {node.client}</span>
            </p>
        )
      })
    }

  </section>

}

export default Testimonials;