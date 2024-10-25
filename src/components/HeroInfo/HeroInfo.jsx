import { Link } from 'react-router-dom'
import css from './HeroInfo.module.css'

const HeroInfo = () => {
  return (
     <section className={css.hero_container}>
          <div className={css.hero_wrapper}>
              <h1 className={css.hero_title}>Campers of your dreams</h1>
              <p className={css.hero_text}>You can find everything you want in our catalog</p>
              <Link to="/catalog"><button type='button' className={css.hero_button}>
                View Now</button>
              </Link>
          </div>
     </section>
  )
}

export default HeroInfo