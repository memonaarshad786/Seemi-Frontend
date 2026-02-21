import './App.css'
import FeatureShowcase from './components/FeatureShowcase'
import FooterSection from './components/FooterSection'
import GridSection from './components/GridSection'
import LandingHero from './components/LandingHero'
import NextSection from './components/NextSection'

function App() {

  return (
    <>
      <LandingHero />
      <FeatureShowcase/>
      <GridSection/>
      <NextSection/>
      <FooterSection/>
    </>
  )
}

export default App
