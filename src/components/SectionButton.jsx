import Button from "./Button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";

export default function SectionButton(){
    const [content,setContent] = useState(null)
        function handleClick(type ) {

            setContent(type)

        }
        return (
        <section>
            <h3>
                Чем мы отличаемся от других
            </h3>
            <Button isActive={content === 'way'} onClick={() => handleClick('way')}>Подход</Button>
            <Button isActive={content === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
            <Button isActive={content === 'program'} onClick={() => handleClick('program')}>Концентрация </Button>

            {content ? (
                <p>{differences[content]}</p>
            ) : (
                <p>Нажми на кнопку</p>)}

        </section>
    )
}