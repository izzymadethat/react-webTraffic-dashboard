import DateView from "../components/DateView"
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  return (
    <div className="top-section__views">
        <DateView name={"Month"} />
        <DateView name={"Year"} />
        <DateView name={"Total"} />
        <FiMenu style={{fontSize: "2.5rem", marginRight: "0.5rem", cursor: "pointer", color: "rgb(40, 40, 158)"}}/>
    </div>
  )
}

export default Navbar