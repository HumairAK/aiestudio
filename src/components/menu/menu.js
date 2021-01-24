import React, { useState } from 'react'
import Breakfast from './breakfast'
import Lunch from './lunch'
import HotDrinks from './hot-drinks'
import ColdDrinks from './cold-drinks'
import {graphql, useStaticQuery} from "gatsby";
import hash from 'object-hash'

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
    // items.map(({node}) => {
    //     console.log(hash(node.name))
    // })

    const [menuCategory, setMenuCategory] = useState(items[0].node.id);
    let selectedNode = items.filter(({ node }) => {return node.id === menuCategory})[0].node;

    console.log(selectedNode)
    selectedNode.items.map( ( item, idx ) => {
        console.log(item.toString().split(";"))
    })

    return (
        <section className="menu">
            <h2>OUR MENUS</h2>
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
                                    <span>{nameAndPrice[0]}</span>
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