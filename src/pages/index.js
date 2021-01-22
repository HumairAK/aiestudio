import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Testimonials from '../components/testimonials/testimonials'
import Instagram from '../components/instagram/instagram'
import About from '../components/about/about'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import Gallery from '../components/gallery/gallery'
const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.headImage.childImageSharp.fluid} className="hero-image"/>
    </section>
    <section className="container">
      <About />
      <Gallery />
      <Testimonials />
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Menu />
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[24.8132366,67.0400635]} // Your Coordinates 24.8132366,67.0400635,20z
        zoom={20} // Zoom Level
        markerText={"Local Cafe, 65 Park Row"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    headImage: file(relativePath: { eq: "header-background.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
