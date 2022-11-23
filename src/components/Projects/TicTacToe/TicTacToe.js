import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';

import BackButton from '../../Main/BackButton/BackButton'

import './TicTacToe.css'

const TicTacToe = () => {

    const [turn, setTurn] = useState(() => 'X')
    const [cellSign, setCellSign] = useState(() => Array(9).fill(''))
    const [winner, setWinner] = useState(() => '')

    const checkWinner = (squares) => {
        let winCombos = {
            oriz: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            vert: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diag: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in winCombos) {
            winCombos[combo].forEach(pattern => {
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {
                    // do nothing
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]])
                }
            })
        }
    }

    const handleClick = (cellNum) => {
        if (cellSign[cellNum] !== '') {
            return
        } 
        let areas = [...cellSign]
        if (turn === 'X') {
            setTurn('O')
            areas[cellNum] = 'X'
        } else {
            setTurn('X')
            areas[cellNum] = 'O'
        }
        checkWinner(areas)
        setCellSign(areas)
    }
    const handleRestart = () => {
        setWinner('')
        setCellSign(Array(9).fill(''))
        setTurn('X')
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
            <h3 className='tictactoe-game-turn'>Turn: <span>{turn}</span></h3>
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
                {winner && (
                    <div className='tictactoe-win-section'>
                        <p><span>{winner}</span> is the winner!!</p>
                        <button className='tictactoe-play-button' onClick={handleRestart}>Play again!</button>
                    </div>
                )}
        </main>
    </section>
  )
}

export default TicTacToe