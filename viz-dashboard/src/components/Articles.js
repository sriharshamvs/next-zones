import Link from "next/link"
import LatestArticles from "./category/LatestArticles"

const Articles = () => {
  return (
    <div className="grid grid-cols-12 my-20">
      <div className="col-span-2 sm-hide"></div>
      <div className="col-span-12 mx-5 sm:col-span-8 sm:mx-0">
        <LatestArticles />
      </div>
      <div className="col-span-2 sm-hide"></div>
    </div>
  )
}

export default Articles
