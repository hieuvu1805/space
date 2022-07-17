import Image from "next/image"
import { Carousel } from "react-responsive-carousel"

import { SpecifyProps, SpecifyType } from "@components/atoms/Specify"
import Overview from "@components/molecules/Overview"
import formatNumber from "@helpers/formatNumber"
import { IRocket } from "@interfaces"

import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Rocket({ ...rocket }: IRocket): JSX.Element {
  return (
    <div
      className="py-5 px-0 md:px-5 mb-10 lg:mb-1 m-auto flex flex-col lg:flex-row text-sm sm:text-base lg:text-sm xl:text-base"
      key={rocket.id}
    >
      <div className="flex-1 flex justify-center items-center px-5 mb-5 lg:mb-0">
        <Carousel showArrows swipeable useKeyboardArrows showThumbs={false}>
          {rocket.flickr_images.map((src) => (
            <Image
              loading="lazy"
              key={src}
              src={src}
              width={1920}
              height={1080}
              alt={rocket.name}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex-1 px-5 md:px-10 lg:px-5 text-white">
        <h3 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl uppercase font-bold">
          {rocket.name} {rocket.active ? "(activated)" : null}
        </h3>
        <p className="mt-2">{rocket.description}</p>
        <p className="mt-2">
          <b>COUNTRY</b>: {rocket.country}
        </p>
        <p className="mt-2">
          <b>COST PER LAUCH</b>: ${formatNumber(rocket.cost_per_launch)}
        </p>
        <div className="mt-2">
          <Overview
            items={[
              {
                name: "height",
                type: SpecifyType.M,
                val1: rocket.height.meters,
                val2: rocket.height.feet,
              },
              {
                name: "diameter",
                type: SpecifyType.M,
                val1: rocket.diameter.meters,
                val2: rocket.diameter.feet,
              },
              {
                name: "mass",
                type: SpecifyType.KG,
                val1: rocket.mass.kg,
                val2: rocket.mass.lb,
              },
              ...rocket.payload_weights.map((item): SpecifyProps => {
                return {
                  name: "PAYLOAD TO " + item.id,
                  type: SpecifyType.KG,
                  val1: item.kg,
                  val2: item.lb,
                }
              }),
            ]}
          />
        </div>
      </div>
    </div>
  )
}
