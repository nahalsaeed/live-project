import Footer from '../common/Footer'
import Header from '../common/Header'
import SocialMedia from '../common/SocialMedia'
import FirstPlacesToGo from './FirstPlacesToGo'
import { GalleryComponent } from './Gallery'
import MustDo from './MustDo'
import ThingsToDo from './ThingsToDo'


export default function MainComponent() {
    return (
        <>
            <Header />
            <FirstPlacesToGo />
            <GalleryComponent />
            <ThingsToDo />
            <MustDo />
            <SocialMedia />
            <Footer />
        </>
    )
}
