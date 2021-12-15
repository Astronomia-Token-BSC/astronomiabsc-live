import React from 'react'
import Body from './Components/Body'
import BodyMobile from './Components/mobile/BodyMobile'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {useMediaQuery} from 'react-responsive'
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileDashboard from "./Components/mobile/MobileDashboard"
import BuySellButtons from "./Components/mobile/BuySellButtons"
import useWindowDimensions from "./Helpers.js"

function App() {
  
  //const ourMediaQuery = useMediaQuery('(min-width:320px)');

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  const { height, width } = useWindowDimensions();
  
  let newHeight = height-130
  let chartHeight = newHeight-59

  return (
    <div className="app-root">
      <div className="app-body">
      { /* <Bodydiv className="adds-promo-bannner">
          <img src="promo-banner.png" alt="promo-banner"/>
  </div> */ }
      <Header height={chartHeight}/>
      {isDesktopOrLaptop && <Body/> }
      {isTabletOrMobile && <BodyMobile/> }
      <Footer/>
      
      </div>
    </div>
  )
}
export default App;
