import SearchResortsSelect from './SearchResortsSelect';

const SearchResortsForm = ({ }: {
  
}) => {
  return (
    <div className='mt-7'>
      <div className='container mx-auto px-4 flex justify-center'>
        <form action="" className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
          <SearchResortsSelect value={"Escolha o estado"}/>
          <SearchResortsSelect value={"Escolha a cidade"}/>
          <button className='col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded '>
            <svg className='w-4 h-4 mr-2' data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"></path>
            </svg>
            Pesquisar Resorts
          </button>
                
        </form>
      </div>
    </div>
  )
  
}

export default SearchResortsForm;