
"use client"

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { ChatBubbleLeftRightIcon, ArrowsRightLeftIcon, RocketLaunchIcon, CircleStackIcon, BellIcon } from '@heroicons/react/24/outline';
import SectionHeading from "../SectionHeading";

const cards = [
    {
        icon: <BellIcon />,
        title: 'Discover Unique Educational Assets',
        desc: 'Explore a marketplace of exclusive NFTs designed to transform learning and reward knowledge sharing',
    },
    {
        icon: <CircleStackIcon />,
        title: 'Unified Credentialing Across Chains',
        desc: 'Seamlessly manage and verify credentials across multiple blockchains for secure, borderless recognition.',
    },
    {
        icon: <ArrowsRightLeftIcon />,
        title: 'Enhanced Security & Trust',
        desc: 'Dojima’s robust security framework safeguards sensitive educational data and records.',
    },
    {
        icon: <ChatBubbleLeftRightIcon /> ,
        title: 'Global Credentials for a Borderless Workforce ',
        desc: 'Enable universally accessible and verifiable credentials for seamless remote work and international career opportunities.',
    },
    {
        icon: <ChatBubbleLeftRightIcon />,
        title: 'Smart Advertising for Educational Innovation',
        desc: 'Promote relevant tools and solutions to an engaged learning community.',
    },
    {
        icon: <RocketLaunchIcon />,
        title: 'Empowering Students Through Active Learning',
        desc: 'Boost engagement, inspire motivation and foster skill development for a transformative learning experience.',
    },
]

export default function Features() {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div  className="relative w-full md:min-h-[70vh]" id="beta-program">
      <div className="relative flex flex-col items-center justify-center py-14 lg:pt-32 px-6">
        <SectionHeading type="primary">Edulinkx Features</SectionHeading>

          <div className='grid md:grid-cols-2 gap-y-2 content-center lg:grid-cols-3 py-8 gap-x-2'>
          {cards.map((card, index) => (
            <div key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-neutral-900 rounded-3xl opacity-90'>
              <div className='flex justify-between'>
                <div className='h-6 w-9 text-brand-400 mb-4 '>{card.icon}</div>
              </div>
              <h2 className='mt-2 md:mt-7 text-neutral-200 text-2xl font-semibold leading-6 max-w-[80%] pb-2'>{card.title}</h2>
              <h3 className='mt-2 md:mt-7 text-zinc-400 text-xl leading-6 max-w-[80%]'>{card.desc}</h3>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}
