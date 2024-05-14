import { url } from 'inspector';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='bg-gray-50t text-gray-600'>
        <header className='container mx-auto px-4 h-24 flex items-center justify-between'>
          <div className='font-black'>
            Logo
          </div>
          <ul className='flex items-center space-x-3'>
            <li>
              <Link href={""} className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Como Reservar</Link>
            </li>

            <li>
              <Link href={""} className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Sobre Nós</Link>
            </li>

            <li>
              <Link href={""} className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Informações</Link>
            </li>

            <li>
              <Link href={""} className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>Contato</Link>
            </li>

          </ul>
        </header>
      </div>

      <div style={{  
        backgroundImage: "url(" + "/images/hero-image-1.png" + ")",
        height: 450,
      }}>
        <div className='container max-w-5xl mx-auto px-4 h-full flex items-center justify-center'>
          <div className='container'>

            <div className="text-center">
              <h1 className='text-gray-200 text-3xl mb-2'>Onde você quer ir?</h1>
              <p className='text-green-100'>Escolha o estado e cidade para achar os melhores resorts</p>
            </div>

            <div className='mt-7'>
              <div className='container mx-auto px-4 flex justify-center'>
                <form action="" className='grid grid-cols-2 lg:grid-cols-3 gap-4'>

                  <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                    <option value="">Escolha o estado</option>
                  </select>

                  <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                    <option value="">Escolha a cidade</option>
                  </select>
                  
                  <button className='col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded '>
                    <svg className='w-4 h-4 mr-2' data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"></path>
                    </svg>
                    Pesquisar Resorts
                  </button>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
      </div>
      <div>
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
      </div>

      <div className='py-20'>
        <div className='container mx-auto px-4 flex justify-center'>
          <form action="" className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
              <option value="">Escolha o estado</option>
            </select>

            <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
              <option value="">Escolha a cidade</option>
            </select>
                
            <button className='col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded '>
              <svg className='w-4 h-4 mr-2' data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"></path>
              </svg>
              Pesquisar Resorts
            </button>
          </form>
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <div className='container mx-auto p-4 flex items-center justify-between'>
          <div className='text-gray-400 font-black'>
            LOGO
          </div>
          <div className='flex items-center space-x-3'>
            <Image className='w-full h-full object-cover' src={"/images/icon-facebook.png"} width={1000} height={1000} alt='icon-facebook'></Image>
            <Image className='w-full h-full object-cover' src={"/images/icon-instagram.png"} width={1000} height={1000} alt='icon-instagram'></Image>
          </div>
        </div>
      </div>
    </>
  );
}
