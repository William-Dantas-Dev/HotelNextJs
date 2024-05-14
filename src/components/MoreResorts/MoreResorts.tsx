import Image from 'next/image';

const MoreResorts = ({ }: {
  
}) => {
  return (
    <div className='container mx-auto px-4'>
          <h3 className='text-2xl text-gray-500 font-semibold text-center mb-8'>Conheça mais resorts</h3>
          <div className='md:grid lg:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0'>
            <div className='relative md:col-span-2 md:row-span-2 rounded overflow-hidden'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>Beach Park Resort</div>
              <Image className='h-20 absolute bottom-0 left-0 right-0 z-10' src={"/images/image-shadow.png"} width={1000} height={1000} alt='image-shadow1'></Image>
              <Image className='w-full h-full object-cover' src={"/images/hotel-1.jpeg"} width={1000} height={1000} alt='Beach Park Resort' priority={true}></Image>
            </div>
            <div className='relative md:col-span-2 h-60 rounded overflow-hidden'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>Salina do Maragogi Resort</div>
              <Image className='h-20 absolute bottom-0 left-0 right-0 z-10' src={"/images/image-shadow.png"} width={1000} height={1000} alt='image-shadow2'></Image>
              <Image className='w-full h-full object-cover' src={"/images/hotel-2.jpeg"} width={1000} height={1000} alt='Salina do Maragogi Resort' priority={false}></Image>
            </div>
            <div className='relative rounded overflow-hidden'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>grand Palladium</div>
              <Image className='h-20 absolute bottom-0 left-0 right-0 z-10' src={"/images/image-shadow.png"} width={1000} height={1000} alt='image-shadow3'></Image>
              <Image className='w-full h-full object-cover' src={"/images/hotel-3.jpeg"} width={1000} height={1000} alt='grand Palladium' priority={false}></Image>
            </div>
            <div className='relative rounded overflow-hidden'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20'>{"Arraial d'Ajuda Eco Resort"}</div>
              <Image className='h-20 absolute bottom-0 left-0 right-0 z-10' src={"/images/image-shadow.png"} width={1000} height={1000} alt='image-shadow4'></Image>
              <Image className='w-full h-full object-cover' src={"/images/hotel-4.jpeg"} width={1000} height={1000} alt={"Arraial d'Ajuda Eco Resort"} priority={false}></Image>
            </div>
          </div>
        </div>
  )
  
}

export default MoreResorts;