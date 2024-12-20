/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
// import heroImg from '../../../../Edulinkx/public/2151137527.jpg'

export default function Hero() {
  return (
    <div className="relative  md:py-0 lg:h-screen w-full px-4 md:px-8 container mx-auto">
      {/* <div className="relative flex flex-col max-w-7xl lg:py-48"> */}
        <div className=' flex flex-col md:py-[90px] py-10 md:grid md:grid-cols-1 lg:grid-cols-2 justify-start items-start lg:mt-0 gap-6'>
         <div className='flex flex-col gap-y-5'>         
          <SectionHeading type="primary">
          Creating a Better Future for Our Children with Edulinkx
          </SectionHeading>
          <div>
            <Button className='text-white py-4 px-8' type="primary" href="/">Learn More</Button>
            <div className='mt-6 px-2 flex flex-row align-center gap-x-2'>
            {/* <p className='text-md text-gray-300'>{" "} Maintained by ChainSafe</p> */}
            </div>
          </div>
          </div>
          <div className='flex flex-col w-full pt-8 lg:pt-0'>
          <img className='w-auto rounded-xl lg:min-w-[800px]' src='\2151137527.jpg' alt='Abstract pattern of gemoetric shapes' />
          </div>
        </div>
      </div>
    // </div>
  )
}
