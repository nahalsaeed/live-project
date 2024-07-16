import Header from './Header'
import HeroSection from './HeroSection'
import { GalleryComponent } from './Gallery'
import MakePlan from './MakePlan'
import ThingsToDo from './ThingsToDo'
import StartPlanning from './StartPlanning'
import TravelAdvice from './TravelAdvice'
import MustDo from './MustDo'
import Travelling from './Travelling'
import SocialMedia from './SocialMedia'
import Footer from './Footer'

export default function MainComponent() {
    return (
        <>
            <Header />
            {/* <HeroSection /> */}
            <GalleryComponent />
            {/* <MakePlan /> */}
            <ThingsToDo />
            {/* <StartPlanning /> */}
            {/* <TravelAdvice /> */}
            <MustDo />
            {/* <Travelling /> */}
            <SocialMedia />
            <Footer />
        </>
    )
}
