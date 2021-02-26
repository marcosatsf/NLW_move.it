import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)
    
    const [minuteDecimal, minuteUnit] = String(minutes).padStart(2, '0').split('');
    const [secondDecimal, secondUnit] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteDecimal}</span>
                    <span>{minuteUnit}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondDecimal}</span>
                    <span>{secondUnit}</span>
                </div>
            </div>

        { hasFinished ? (
            <button
            disabled
            type="button" 
            className={styles.countdownButton}>
            Ciclo encerrado
        </button>
        ): (
            <>
            { isActive ? (
                <button 
                type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}>
                Abandonar ciclo
            </button>
            ) : (
                <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}>
                Iniciar um ciclo
            </button>
            )}
            </>
        )}
        </div>
    );
}