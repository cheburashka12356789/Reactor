import Header from "./components/Hader.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import SectionButton from "./components/SectionButton.jsx";
 import IntroSection from "./components/IntroSection.jsx";

export default function App() {
    return (
        <div>
            <Header/>
            <main>
                <IntroSection/>
                <TeachingSection/>
                <SectionButton/>
            </main>
        </div>
    )
}


