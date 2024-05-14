import SearchResortsForm from './SearchResortsForm';

const SearchResorts = ({ }: {
  
}) => {
  return (
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

            <SearchResortsForm />
          </div>
        </div>
      </div>
  )
  
}

export default SearchResorts;