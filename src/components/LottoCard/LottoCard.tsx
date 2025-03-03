import {RefObject} from "react";
import { v4 as uuidv4 } from 'uuid';

import styles from './LottoCard.module.css'

interface LottoCardProps {
    cardRef: RefObject<number[][]>;
    onGenerate: () => void;
}

export const LottoCard = ({cardRef, onGenerate}: LottoCardProps) => {
    return (
        <>
            <div className={styles.card}>
                {cardRef.current.flat().map((number: number | null) => (
                    <div key={uuidv4()} className={styles.cardCell}>
                        {number || ""}
                    </div>
                ))}
            </div>
            <button onClick={onGenerate} className={styles.button}>Сгенерировать новую карточку</button>
        </>

    )

}
