import React from 'react'
import {graphql, useStaticQuery} from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
        query contactQuery2 {
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
                footermessage
              }
            }
          }
        }
  `)
  const items = data.allContentfulContact.edges;
  return (
    <footer>
      {
        items.map(({ node }, i) => {
          return (

              <section key={i}>

                <div className="address">
                  <h3>WHERE ARE WE?</h3>
                  <span>{node.address}, {node.city}</span>
                  <span>{node.province}, {node.country} </span>
                </div>

                <div className="hours">
                  <h3>HOURS</h3>
                  {
                    node.hours.map(( schedule, i ) => {
                      return <span key={i}>{schedule}</span>
                    })
                  }
                </div>

                <div className="contact">
                  <h3>CONTACT</h3>
                  <span>{node.phone}</span>
                  {
                    node.socialmedia.map(( sm, i ) => {
                      if(sm.includes("facebook")){
                        return <span key={i}><a href={sm}>Facebook</a></span>
                      }
                      if(sm.includes("instagram")){
                        return <span key={i}><a href={sm}>Instagram</a></span>
                      }
                      else {
                        return <span key={i}/>
                      }

                    })
                  }
                </div>

              </section>
          )
        })
      }

      {/*Footer message*/}
      {
        items.map(({ node }, i) => {
          return (
              <p key={i}>{node.footermessage}</p>
          )
        })
      }
    </footer>
  )
}

export default Footer;