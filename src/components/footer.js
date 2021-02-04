import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {string} from "prop-types";

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
        items.map(({ node }) => {
          return (
              <section>

                <div className="address">
                  <h3>WHERE ARE WE?</h3>
                  <span>{node.address}, {node.city}</span>
                  <span>{node.province}, {node.country} </span>
                </div>

                <div className="hours">
                  <h3>HOURS</h3>
                  {
                    node.hours.map(( schedule ) => {
                      return <span>{schedule}</span>
                    })
                  }
                </div>

                <div className="contact">
                  <h3>CONTACT</h3>
                  <span>{node.phone}</span>
                  {
                    node.socialmedia.map(( sm ) => {
                      if(sm.includes("facebook")){
                        return <span>{sm.split(',')[1]}</span>
                      }
                      if(sm.includes("instagram")){
                        return <span>@{sm.split(',')[1]}</span>
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
        items.map(({ node }) => {
          return (
              <p> {node.footermessage} </p>
          )
        })
      }



    </footer>
  )
}

export default Footer;