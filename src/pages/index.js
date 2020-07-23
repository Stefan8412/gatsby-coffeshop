import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/global/BackgroundSection"
import Info from '../components/Home/info'
import Menu from '../components/Home/Menu'
import Products from "../components/Home/Products"



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   <BackgroundSection img={data.img.childImageSharp.fluid} title="Káva od Stefana" />

    <Info />
    <Menu items={data.menu}/>
    <Products/>
    
  </Layout>
)

export const query =graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  menu:allContentfulCoffeeItem{
    edges{
      node{
      id
      title
      description{
        description
      }
      price
      category
      image{
        fixed(width:50,height:50){
        ...GatsbyContentfulFixed
      }
      }
    }
  }
}
}
`

export default IndexPage
