/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import dojimaLogo from "../../../../Edulinkx/public/logos/dojima-logo.png"

export const companiesList = [
    {
        'name': 'Dojima',
        'imgUrl': dojimaLogo,
    },
   
    
  ];

export default function LogoCloud() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className='text-4xl text-gray-300 text-center py-2'>Powered by</h2>
          <div className="mx-auto grid max-w-lg  justify-items-center items-center gap-x-8 gap-y-12 sm:max-w-xl ">
          
            {companiesList ? companiesList.map((item, index) => (
              <a href="https://www.dojima.network/" target="_blank" key={index}>
                <div >
                  <Image
                  alt={item.name}
                  src={item.imgUrl}
                  className="max-h-40 w-full object-contain lg:col-span-1 mt-2"
                /></div>
                </a>
            )) : <div></div>}
          </div>
        </div>
      </div>
    )
  }