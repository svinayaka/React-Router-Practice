function SearchButton({searchCategory}: Readonly<{searchCategory: string}>) {
  return (
    <button type="button" aria-label={`Search ${searchCategory}`}>Search</button>
  )
}

export default SearchButton;