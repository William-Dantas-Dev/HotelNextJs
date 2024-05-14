import Image from 'next/image';

const EmphasisSection = ({ }: {
  
}) => {
  return (
    <div className='container mx-auto px-4 py-20'>
      <div className='flex flex-col-reverse lg:flex-row'>
        <div className='lg:pr-10'>
          <div className='text-sm text-gray-400 font-medium'>RESORT EM DESTAQUE</div>
          <div className='text-2xl'>Ecoresort Praia do Forte Bahia</div>
          <div className='text-sm text-gray-400 font-medium mt-2'>Hotel Qualidade 5 Estrelas</div>
          <div className='text-sm text-gray-400 font-medium mt-4'>
            <p className='mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className='mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className='inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded '>
              Solicitar Reserva
              <svg className='w-4 h-4 ml-2'data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='flex-shrink-0 lg:ml-auto mb-5 lg:mb-0'>
          <Image src={"/images/featured-img.png"} width={500} height={500} alt='featured-img' priority={false}></Image>
        </div>
      </div>
    </div>
  )
  
}

export default EmphasisSection;