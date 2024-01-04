import LineCard from "../components/LineCard"
import HistoCard from "../components/HistoCard"
import MetricCard from "../components/MetricCard"
import BarGraphCard from "../components/BarGraphCard"

const MidSection = () => {
  return (
    <div className="mid-section">
      <div className="section">
        <MetricCard title={"All Unique Pageviews"} results={"29K"} />
        <MetricCard title={"Avg Time (s) on Page"} results={"28.4"} />
        <MetricCard title={"Page Exit %"} results={"12.3%"} />
        <MetricCard title={"Bounce %"} results={"31.8%"} />
      </div>

      <div className="section">
        <HistoCard title={"Device Sessions"}  />
        <HistoCard title={"Channel Sessions"}  />
        <BarGraphCard title={"Sessions"} />
      </div>
      
      <div className="section">
        <LineCard title={"Sessions By Device"}  />
        <BarGraphCard title={"Pageviews"} />
      </div>
    </div>
  )
}

export default MidSection