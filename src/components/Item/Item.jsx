import { Link } from "react-router-dom";
import css from "./Item.module.css";
import icons from '../../assets/sprite.svg';
import Features from "../Features/Features";

const Item = ({ truck }) => {
  return (
    <div className={css.item_wrapper}>
      {truck.gallery?.[0]?.thumb && (
        <img
          className={css.item_photo}
          src={`${truck.gallery[0].thumb}`}
          width="292"
          alt={`${truck.name}`}
        />
      )}
      <div className={css.info_wrapper}>
        <div className={css.name_wrapper}>
          <h2 className={css.name_title}>{truck.name}</h2>
          <div className={css.price_wrapper}>
            <p>{`€ ${Number(truck.price).toFixed(2)}`}</p>
          </div>
        </div>
        <div className={css.rating_wrapper}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>
          <p className={css.reviews}>{truck.rating} ({truck.reviews.length} Reviews)</p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg> {truck.location}
        </div>
        <p className={css.item_description}>{`${truck.description.substring(0, 60)}` + "..."}</p>
        <Features truck={truck} />
        <Link to={`/catalog/${truck.id}`} target="_blank" rel="noopener noreferrer">
          <button type='button' className={css.item_button}>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;