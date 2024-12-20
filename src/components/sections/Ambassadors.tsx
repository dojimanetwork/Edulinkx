/* eslint-disable @next/next/no-img-element */
import SectionHeading from "../SectionHeading"
// import teamImg from "../../../../Edulinkx/public/ambassadors/0.png"
// import Image from "next/image"

const ambassadors = [
    {
      name: 'Sattwik Das',
      country: 'Founder',
      imageUrl: '/ambassadors/sattwik_pic.jpg'
    },
    
    
    // {
    //   name: 'Ese Monday',
    //   country: 'Nigeria',
    //   imageUrl: '/ambassadors/4.png'
    // },
  ]
  
  export default function Ambassadors() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-8xl">
            <SectionHeading type="primary">Core Team Members</SectionHeading>
          </div>
          <ul
            className="mx-auto mt-20 max-w-xl grid-cols-1 gap-6   lg:gap-8"
          >
            {ambassadors.map((person) => (
              <li key={person.name} className="rounded-2xl bg-bg px-2  py-10">
                <img alt={person.name} src={person.imageUrl} className="mx-auto h-24 w-24 rounded-full" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                <h3 className="mt-1 text-base font-semibold leading-7 tracking-tight text-white">{person.country}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  