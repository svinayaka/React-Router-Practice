function SearchInput({searchCategory}: {searchCategory: string}) {
  return (
    <input id={`${searchCategory}search-input`} type="text" placeholder={`Search ${searchCategory}...`} aria-label={`Search ${searchCategory}`}/>
  )
}

export default SearchInput;