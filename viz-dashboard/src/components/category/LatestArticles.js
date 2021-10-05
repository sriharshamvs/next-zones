import Link from "next/link"

const LatestArticles = () => {
  return (
    <div>
      <div className="browse-category-header mb-2">
        <div className="browse-category-title">LATEST ARTICLES</div>
        <div></div>
      </div>
      <div className="flex flex-wrap">
        <div className="article-thumbnail sm:w-4/12 w-full /2 my-8 sm:mr-12 rounded-md">
          <div>
            <img
              src="../img/election-fi.jpg"
              alt="covid-19"
              className="rounded-t-md"
            />
          </div>
          <div className="article-thumbnail-title">
            Indian Elections: Data Representation &#38; Analysis
          </div>
          <div className="article-thumbnail-para">
            Representaion and analysis of Indian elections of both general and
            assembly. You can customise alliances, apply swings, compare it to
            other election and visualise it.
          </div>
          <Link className="flex" href="/elections">
            <input
              type="button"
              value="LEARN MORE"
              className="flex article-thumbnail-btn mx-auto"
            />
          </Link>
        </div>
        <div className="article-thumbnail sm:w-4/12 w-full /2 my-8 sm:mr-12 rounded-md">
          <div>
            <img src="../img/covid-19-fi.jpg" alt="" className="rounded-t-md" />
          </div>
          <div className="article-thumbnail-title">
            COVID-19 Cases: Data &#38; Graphs of the India and the World
          </div>
          <div className="article-thumbnail-para">
            Track cases, deaths and vaccination reports visually in terms of
            graphs and maps. The Data is represented state, district and country
            wise. You also have option to visualise data as daily or cumulative
            report.
          </div>
          <Link href="/covid19-cases-graphs-maps-india-world">
            <input
              type="button"
              value="LEARN MORE"
              className="flex mx-auto article-thumbnail-btn"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LatestArticles
