import Footer from '../common/Footer'
import Header from '../common/Header'
import SocialMedia from '../common/SocialMedia'
import FirstPlacesToGo from './FirstPlacesToGo'
import { GalleryComponent } from './Gallery'
import MustDo from './MustDo'
import ThingsToDoHeroSection from '../thingstodopage/ThingsToDoHeroSection'
import ThingsToDo from './ThingsToDo'
import northimg from "@/assets/NorthHero.webp";

export default function MainComponent() {
    return (
        <>
            <Header />
            <ThingsToDoHeroSection image={northimg} button={"true"}/>
            <FirstPlacesToGo />
            <GalleryComponent />
            <ThingsToDo />
            <MustDo />
            <SocialMedia />
            <Footer />
        </>
    )
}
