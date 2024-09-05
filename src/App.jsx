import Header from "./components/Hader.jsx";
import { ways } from "./data";
import Button from "./components/Button.jsx";
import WayToTeach from "./components/WayToTeach.jsx";


export default function App() {
    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Наш подход к обучению</h3>
                    <ul>
                        <WayToTeach
                            title={ways[0].title}
                            description={ways[0].description}/>
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[2]}/>
                        <WayToTeach {...ways[3]}/>

                    </ul>
                </section>
                <section>
                    <h3>
                        Чем мы отличаемся от других
                    </h3>
                    <Button/>
                </section>
            </main>
        </div>
    )
}


