import React, { useState } from 'react'
import {graphql, useStaticQuery} from "gatsby";

const Menu = () => {
    const data = useStaticQuery(graphql`
query menuQuery {
  allContentfulServices {
    edges {
      node {
        id
        items
        name
        description
      }
    }
  }
} `)
    const items = data.allContentfulServices.edges;

    const [menuCategory, setMenuCategory] = useState(items[0].node.id);
    let selectedNode = items.filter(({ node }) => {return node.id === menuCategory})[0].node;
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <section className="menu">
            <h2>Services</h2>
            <ul className="menu-headers">
                {
                    items.map(({ node }) => {
                        return (
                            <li key={node.id} className="menu-header" onClick={() => setMenuCategory(node.id)}>{node.name}</li>
                        )
                    })
                }
            </ul>
            <div>
                <p className="sample">{selectedNode.description}</p>
                <ul className="menu-items-grid">
                    {
                        selectedNode.items.map(( item, idx ) => {
                            let nameAndPrice = item.toString().split(";")
                            return (
                                <li key={idx} className="menu-item">
                                    <h3>{nameAndPrice[1]}</h3>
                                    <span>{formatNumber(parseInt(nameAndPrice[0]))} Rs</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Menu;