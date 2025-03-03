import {useRef, useState} from "react";

import {generateLottoCard} from "./utils/generateLottoCard.ts";
import {LottoCard} from "./components/LottoCard";

import './App.css'

function App() {

    const cardRef = useRef<number[][]>(generateLottoCard());
    const [, forceUpdate] = useState({});

    const handleGenerateButtonClick = () => {
        cardRef.current = generateLottoCard();
        forceUpdate({});
    }

    return (
        <>
          <LottoCard cardRef={cardRef} onGenerate={handleGenerateButtonClick} />
        </>
    )
}

export default App;
