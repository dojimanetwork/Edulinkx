
"use client"

// import oneImage from '../../../../Edulinkx/public/rb_52127.png'
// import twoImage from '../../../../Edulinkx/public/7286613_31780.jpg'
// import threeImage from '../../../../Edulinkx/public/2869583_5995.jpg'
import Image from 'next/image'

export default function ThreeSteps() {
    
  return (
    <div className="relative h-full w-full  md:min-h-[50vh]" id="download">
    <div className="relative flex flex-col justify-center px-8">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 max-w-fit'>
          {/* step 1  */}
          <div className='max-w-[95%] lg:max-w-screen transition-all pt-2 pb-5 flex flex-col justify-center px-5  rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
              {/* <h2 className='my-4 md:my-5 text-center text-gray-900 text-xl leading-7 max-w-[99%]'>first image</h2> */}
             <img src="\rb_52127.png" alt="1st education in blockchain"  />
              
          </div>
          {/* step 2  */}
          <div className=' max-w-[95%] lg:max-w-screen transition-all pt-2 pb-5 flex flex-col justify-center px-5  rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
              {/* <h2 className='my-4 md:my-5 text-center text-gray-900 text-xl leading-7 max-w-[99%]'>2nd image</h2> */}
              <img src="\7286613_31780.jpg" alt="image of education in blockchain" />
              
          </div>
          {/* step 3  */}
          <div className='max-w-[95%] lg:max-w-screen transition-all pt-2 pb-5 flex flex-col justify-center px-5  rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
              {/* <h2 className='my-4 md:my-5 text-center text-gray-900 text-xl leading-7 max-w-[99%]'>3rd image</h2> */}
              
              <img src="\2869583_5995.jpg" alt="freepik image" />
              
          </div>
      </div>
      </div>
  </div>
  )
}
