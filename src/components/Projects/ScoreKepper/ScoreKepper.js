import React, { useEffect, useState } from 'react'

import BackButton from '../../Main/BackButton/BackButton'
import PlayerCol from './PlayerCol';

import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion'

import './ScoreKepper.css'

import { playersList } from '../../constants'

const ScoreKepper = () => {

  const [players, setPlayers] = useState(() => {
    const initValue = JSON.parse(localStorage.getItem('players-list'))
    return initValue || playersList.map((player, index) => ({...player, id: index + 1, rowColor: index % 2 !== 0 ? '#F8D49A' : '#BDC65B'}))
  })
  const [nrOfPlayers, setNrOfPlayers] = useState(() => players.length)
  // const [playerRoundScore, setPlayerRoundScore] = useState(() => 0)
  const [idPlayerToEdit, setIdPlayerToEdit] = useState(() => null)
  const [editPlayerName, setEditPlayerName] = useState({
        id: '',
        playerName: '',
        rowColor: '',
        playerRoundScore: '',
        totalScore: ''
  })
  const [idPlayerScoreToEdit, setIdPlayerScoreToEdit] = useState(() => null)
  const [editPlayerScore, setEditPlayerScore] = useState({
      id: '',
      playerName: '',
      rowColor: '',
      playerRoundScore: '',
      totalScore: ''
  })

  const [rounds, setRounds] = useState(() => [{roundId: 1, roundName: 'Round 1', playerRoundScore: ''}, {roundId: 2, roundName: 'Round 2', playerRoundScore: ''}])
  const [roundToEdit, setRoundToEdit] = useState(() => null)


  const handleAddPlayer = (e) => {
    e.preventDefault()
    if (players.length === 10) return
    let newPlayer = {
      playerName: `Player ${nrOfPlayers + 1}`,
      rowColor: '',
      playerRoundScore: '',
      totalScore: 0,
      id: nrOfPlayers + 1
    }
    const newPlayersList = [...players, newPlayer]
    setPlayers(newPlayersList.map((player, index) => ({...player, rowColor: index % 2 !== 0 ? '#F8D49A' : '#BDC65B',id: index + 1})))
  }
  const handleEditFunction = (e, player) => {
    e.preventDefault()
    setIdPlayerToEdit(player.id)
    const playerToEdit = {
      playerName: player.playerName
    }
    setEditPlayerName(playerToEdit)
  }
  const handleEditedPlayerName = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newPlayerName = {...editPlayerName}
    newPlayerName[fieldName] = fieldValue
    setEditPlayerName(newPlayerName)
  }
  const saveEditedPlayerName = (e) => {
    e.preventDefault()
    const editedPN = {
      playerName: editPlayerName.playerName,
      rowColor: idPlayerToEdit % 2 === 0 ? '#F8D49A' : '#BDC65B',
      playerRoundScore: '',
      totalScore: 0,
      id: idPlayerToEdit
    }
    const newPlayerList = [...players]
    const index = players.findIndex(player => player.id === idPlayerToEdit)
    newPlayerList[index] = editedPN
    setPlayers(newPlayerList)
    setIdPlayerToEdit(null)
  }
  const handleCancelFunction = () => {
    setIdPlayerToEdit(null)
  }
  const handleDeleteFunction = (playerID) => {
    const newPlayerList = [...players]
    const index = players.findIndex(player => player.id === playerID)
    newPlayerList.splice(index, 1)
    setPlayers(newPlayerList.map((player, index) => ({...player, rowColor: index % 2 !== 0 ? '#F8D49A' : '#BDC65B',id: index + 1})))
  }

  const handleEditRowScore = (e, round) => {
    e.preventDefault()
    setRoundToEdit(round.roundId)
  }
  const handleEditedPlayerScore = (e, player) => {
    e.preventDefault()
    setIdPlayerScoreToEdit(player.id)
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newScore = {...editPlayerScore}
    newScore[fieldName] = +fieldValue
    setEditPlayerScore(newScore)
  }
  const handleSavePlayerScore = (e, player, round) => {
    e.preventDefault()
    const editedPS = {
      playerName: player.playerName,
      rowColor: player.rowColor,
      playerRoundScore: editPlayerScore.playerRoundScore,
      totalScore: player.totalScore + editPlayerScore.playerRoundScore,
      id: idPlayerScoreToEdit
    }
    const newPlayerList = [...players]
    const index = players.findIndex(player => player.id === idPlayerScoreToEdit)
    newPlayerList[index] = editedPS
    if (round.roundId === roundToEdit) {
      setPlayers(newPlayerList)
      const editedRound = {
        roundId: roundToEdit,
        roundName: `Round ${roundToEdit}`,
        playerRoundScore: editPlayerScore.playerRoundScore
      }
      const newRoundsList = [...rounds]
      const index = rounds.findIndex(round => round.roundId === roundToEdit)
      newRoundsList[index] = editedRound
      setRounds(newRoundsList)
    }
    if (newPlayerList.every(({playerRoundScore}) => typeof playerRoundScore === 'number')) {
      const newRound = {
        roundId: rounds.length + 1,
        roundName: `Round ${rounds.length + 1}`,
        playerRoundScore: ''
      }
      const newRoundsList = [...rounds, newRound]
      setRounds(newRoundsList)
      setRoundToEdit(null)
      setPlayers(newPlayerList.map(player => ({...player, playerRoundScore: ''})))
    }
  }

  useEffect(() => {
    setNrOfPlayers(players.length)
    localStorage.setItem('players-list', JSON.stringify(players))
  }, [players])

  return (
    <section className='scorekepper-main'>
        <h2>ScoreKeeper</h2>
        <BackButton/>
        <p>This project is under construction at this time...</p>
        <main>
          <table>
            <thead>
              <tr>
                <th className='table-head-row'>Rounds / Players</th>
                {
                  players ? players.sort((a,b) => {
                    return b.totalScore - a.totalScore
                  })
                  .map(player => {
                    return  <motion.th className='table-head-row' style={{backgroundColor: `${player.rowColor}`}} key={player.id}
                                        initial={{x:'-200px'}} animate={{x: 0}} transition={{type: 'spring', duration: 0.5}}
                            >
                                {
                                  idPlayerToEdit !== player.id ?
                                  <>
                                    <div className='table-head-row-div'>
                                      <p>{player.playerName}</p>
                                      <div>
                                        <button type='button' onClick={e => handleEditFunction(e, player)}><EditIcon/></button>
                                        <button type='button' onClick={() => handleDeleteFunction(player.id)}><DeleteIcon style={{color: '#FE8C8C'}}/></button>
                                      </div>
                                    </div>
                                    <p className='table-head-row-p'>Total: <span>{player.totalScore} pts</span></p>
                                  </>                          :
                                  <form onSubmit={saveEditedPlayerName}>
                                    <PlayerCol
                                      editPlayerName={editPlayerName}
                                      handleEditedPlayerName={handleEditedPlayerName}
                                    />
                                    <div>
                                      <button type='submit'><CheckIcon/></button>
                                      <button onClick={handleCancelFunction} type='button'><CloseIcon style={{color: '#FE8C8C'}}/></button>
                                    </div>
                                  </form>
                                }
                            </motion.th>
                  })      : ''
                }
                {
                  players.length === 10 ? '' :
                                    <th className='table-head-row-add'>
                                        <button className='table-head-row-add-button' onClick={handleAddPlayer}><AddIcon/></button>
                                    </th>
                }
              </tr>
            </thead>


            <tbody>
                    {
                      rounds ? rounds.map((round) => {
                        return <tr className='table-body-row' key={round.roundId}>
                                <td className='table-body-row-header'>
                                    {round.roundName}
                                    {
                                      round.roundId === rounds.length ? 
                                                <button type='button' onClick={e => handleEditRowScore(e,round)}><EditIcon/></button>
                                                                    : ''
                                    }
                                </td>
                                {
                                  nrOfPlayers ? players.map(scoreInput => {
                                    return <td key={scoreInput.id}>
                                              {
                                                typeof scoreInput.playerRoundScore === 'string' && roundToEdit === round.roundId ? 
                                                    <form onSubmit={(e) => handleSavePlayerScore(e, scoreInput, round)}>
                                                      <input type='number'
                                                              name='playerRoundScore'
                                                              value={editPlayerScore.rScore}
                                                              onChange={e => handleEditedPlayerScore(e, scoreInput)}
                                                      />
                                                    </form>                        :
                                                        <p>{round.playerRoundScore}</p>
                                              }
                                            </td>
                                  })          : ''
                                }
                              </tr>
                      })      : ''
                    }                
            </tbody>
          </table>
        </main>
    </section>
  )
}

export default ScoreKepper