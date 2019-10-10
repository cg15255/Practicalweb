import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import FeatureListing from "../components/Features/FeatureListing"
import WhatWeDoWrapper from "../components/WhatWeDo/WhatWeDoWrapper"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Hero />
    <FeatureListing />
    <WhatWeDoWrapper />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
