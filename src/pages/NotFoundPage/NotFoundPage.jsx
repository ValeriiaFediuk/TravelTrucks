import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import icons from '../../assets/sprite.svg';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <div className={css.iconWrapper}>
        <svg width="80" height="80" className={css.icon}>
          <use href={`${icons}#not-found`} />
        </svg>
      </div>
      <h1 className={css.title}>Page Not Found</h1>
      <p className={css.text}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className={css.homeLink}>
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
