import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';

import BackButton from '../../Main/BackButton/BackButton'

import './TicTacToe.css'

const TicTacToe = () => {

    const [isX, setIsX] = useState(() => true)
    const [cellSign, setCellSign] = useState(() => Array(9).fill(''))
    
    const checkWinner = (cellSign) => {
        let winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winCombos.length; i += 1) {
            const [a, b, c] = winCombos[i];
            
            if (cellSign[a] && cellSign[a] === cellSign[b] && cellSign[a] === cellSign[c]) {
                return cellSign[a]
            }
        }
        return null
    }

    let winner = checkWinner(cellSign);

    const handleClick = (i) => {
        if (checkWinner(cellSign) || cellSign[i]) {
            return
        } 
        cellSign[i] = isX ? 'X' : 'O';
        setCellSign(cellSign)
        setIsX(!isX)
    }
    
    const handleRestart = () => {
        setCellSign(Array(9).fill(''))
        setIsX(true)
    }


const Cell = ( {celNum} ) => {
    return <p className='tictactoe-cell' onClick={() => handleClick(celNum)}>
                <span>{cellSign[celNum]}</span>
            </p>
}

  return ( <section className='tictactoe'>
        <Spline className='tictactoe-spline' scene="https://prod.spline.design/ea49VypT7Jy2Sjrk/scene.splinecode" />
        <div className='tictactoe-title'>
            <h4>TicTacToe</h4>
            <BackButton/>
        </div>
        <main>
            <h3 className='tictactoe-game-turn'>Turn: <span>{isX ? 'X' : 'O'}</span></h3>
            <div className='tictactoe-game'>
                <Cell celNum = {0} />
                <Cell celNum = {1} />
                <Cell celNum = {2} />
                <Cell celNum = {3} />
                <Cell celNum = {4} />
                <Cell celNum = {5} />
                <Cell celNum = {6} />
                <Cell celNum = {7} />
                <Cell celNum = {8} />
            </div>
                {(winner === 'X' || winner === 'O') ? (
                    <div className='tictactoe-win-section'>
                        {<p><span>{winner}</span> is the winner!!</p>}
                        <button className='tictactoe-play-button' onClick={handleRestart}>Play again!</button>
                    </div>
                ) : (winner === '-') ? (
                    <div className='tictactoe-win-section'>
                        <p>Egalitate!</p>
                        <button className='tictactoe-play-button' onClick={handleRestart}>Play again!</button>
                    </div>
                ) : ''
                }
        </main>
    </section>
  )
}

export default TicTacToe