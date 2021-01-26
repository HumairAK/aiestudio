import React, { useState } from 'react'
import Img from "gatsby-image/index";
import {useStaticQuery, graphql} from "gatsby";

const Gallery = () => {
  const data = useStaticQuery(graphql`
  query {
    coffeePortrait: file(relativePath: { eq: "gallery-3.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "gallery-1.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "gallery-2.jpg" }) {
      ...fluidImage
    }
  }
`);
  return <div className="gallery-grid">
      <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
      <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
      <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
  </div>

}

export default Gallery;