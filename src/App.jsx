import Header from './components/Header'
import './App.css'
import Section from './components/Section'
import HeroSection from './components/HeroSection'
import SectionSpliter from '../src/containers/SectionSpliter'
import ContactSection from '../src/components/ContactSection'
import CalcSection from './components/CalcSection'
import DataSection from './components/DataSection'
import ComingSoon from './components/ComingSoonSection'
import Footer from './components/Footer'
function App() {

  return (
    <div className='App'>
        <Header />
        <Section />
        <HeroSection />
        <SectionSpliter />
        <ContactSection />
        <SectionSpliter />
        <CalcSection />
        <SectionSpliter />
        <DataSection />
        <SectionSpliter />
        <ComingSoon />
        <Footer />
    </div>
  )
}

export default App
