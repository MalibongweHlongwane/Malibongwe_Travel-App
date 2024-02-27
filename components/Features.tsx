import { FEATURES } from '@/constants'
import Image from 'next/image';
import React from 'react';

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
  variant: string;
}
const FeatureItem = ({title, description, icon, variant}: FeatureProps) =>{
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`rounded-full p-4 lg:p-7 ${variant}`}>
        <Image src={icon} alt='map' width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:bg-none lg:mt-[39px]">{description}</p>
    </li>
  )
}
const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container flex padding-container relative w-full justify-end">
      {/* LEFT */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone"/>
        </div>

        {/* RIGHT */}

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/camp.svg" alt='camp' width={50} height={50} className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"/>
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              variant={feature.variant}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}



export default Features