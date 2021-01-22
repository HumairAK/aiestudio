import React, { useState } from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Testimonials = () => {
//   const data = useStaticQuery(graphql`
// query MyQuery {
//   allContentfulTestimonials {
//     edges {
//       node {
//         testimonial {
//           testimonial
//         }
//       }
//     }
//   }
// }
//   `)
//   // const items = data.allContentfulTestimonials.edges;

  return <div className="about-grid">
    <h2>SOME TESTIMONIALS</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

}

export default Testimonials;