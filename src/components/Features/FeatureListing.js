import React from "react"
import FeatureCard from "./FeatureCard"

import card1 from "../../images/macbook.jpg"
import card2 from "../../images/techPhoto.jpg"
import card3 from "../../images/meeting.jpg"

const FeatureListing = () => {
  return (
    <section id="section-2">
      <FeatureCard bgColor="#3f8eb3" imageSrc={card1} link={"/posts/post-1"}>
        <h1>Pellentesque in ipsum </h1>
        <p>
          Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan
          id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
          tincidunt nibh pulvinar a.
        </p>
      </FeatureCard>
      <FeatureCard bgColor="#3c87aa" imageSrc={card2} link={"/posts/post-2"}>
        <h1>Sed porttitor </h1>
        <p>
          Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Cras ultricies
          ligula sed magna dictum porta. Vivamus suscipit tortor eget felis
          porttitor volutpat.
        </p>
      </FeatureCard>
      <FeatureCard bgColor="#3980a1" imageSrc={card3} link={"/posts/post-3"}>
        <h1>Praesent sapien</h1>
        <p>
          Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis
          porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.
          Donec rutrum congue leo eget malesuada.
        </p>
      </FeatureCard>
    </section>
  )
}

export default FeatureListing
