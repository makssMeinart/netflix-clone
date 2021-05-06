import { BrowseContainer } from "../containers/browse"
import { useContent } from "../hooks"
import { default as browseFilter } from "../utils/browse-filter"

export default function Browse() {
  // Need the films and series
  const { series } = useContent("series")
  const { films } = useContent("films")
  // Need slides maybe libary be easier
  const slides = browseFilter({series, films})

  console.log(slides)

  return <BrowseContainer slides={slides} />
}
