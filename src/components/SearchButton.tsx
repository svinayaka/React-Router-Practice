function SearchButton({searchCategory}: {searchCategory: string}) {
  return (
    <button aria-label={`Search ${searchCategory}`}>Search</button>
  )
}

export default SearchButton;