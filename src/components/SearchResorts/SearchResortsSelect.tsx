const SearchResortsSelect = ({ value }: {
  value: String
}) => {
  return (
    <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
      <option value="">{value}</option>
    </select>
  )
}

export default SearchResortsSelect;