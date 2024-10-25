import css from "./TruckList.module.css";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/trucks/selectors";
import Loader from "../Loader/Loader";

const TruckList = ({filteredTrucks}) => {
const loading = useSelector(isLoading);
if (loading) {
    return <Loader/>;
  }
  if (filteredTrucks.length === 0) {
    return <p className={css.text}>No vehicles available</p>;
  }
  return (
    <ul className={css.list}>
        {filteredTrucks.map(item => (
          <li className={css.list_item} key={item.id}>
            <Item truck={item}/>
          </li>
        ))}
      </ul>
  )
}

export default TruckList