import React, { Component } from 'react'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation';
import AlertSection from './components/AlertSection/AlertSection';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import Footer from './components/Footer/Footer';
export default class App extends Component {
  render() {
    return (
      <>
      <HeaderNavigation />
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
      
      </>
    )
  }
}

