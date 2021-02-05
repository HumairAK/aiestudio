import React from 'react'
import Img from "gatsby-image/index";
import {useStaticQuery, graphql} from "gatsby";

const Gallery = () => {
  const data = useStaticQuery(graphql`
query GalleryQuery {
  allContentfulPortfolio {
    edges {
      node {
        id
        image {
          title
          fluid {
            src
            srcSet
          }
        }
      }
    }
  }
}
`);
  const items = data.allContentfulPortfolio.edges;

  // Here we are doing some string parsing:
  // So there are classes named "gallery-img2, gallery-img2, and gallery-img3
  // In contentful we put images with filenames gallery-1, gallery-2, gallery-3
  // Since JSON does not return these images in order, we use the last char in "gallery-1" to match the appropriate className
  // The ClassName comes from the starter-cafe template
  // This means the images on contentful NEED to be named with a *-# syntax (where it ends with a number between 1-3).
  return <div className="gallery-grid">
    {items.map(({ node },idx) => {
    return <Img key={idx} fluid={node.image[0].fluid} className={"gallery-img" + node.image[0].title.slice(-1)}/>
  })}
  </div>

}

export default Gallery;