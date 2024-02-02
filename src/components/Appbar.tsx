import { SearchBar } from "./Searchbar"

export const Appbar = () => {
  return (
    <div className="flex justify-between">
      <div>YoutTube Logo</div>

      <div><SearchBar />
      </div>

      <div>Sign in</div>
    </div>
  )
}
