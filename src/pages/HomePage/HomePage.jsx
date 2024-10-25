import { Helmet } from 'react-helmet-async'
import HeroInfo from '../../components/HeroInfo/HeroInfo'

const HomePage = () => {
    return (
      <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <HeroInfo/>
      </>
  )
}

export default HomePage