import React, { useEffect, useState } from 'react'

import BackButton from '../../Main/BackButton/BackButton'
import PlayerCol from './PlayerCol';
import ScoreKepPopup from './ScoreKepPopup/ScoreKepPopup';

import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { motion } from 'framer-motion'

import './ScoreKepper.css'

import { playersList } from '../../constants'

const ScoreKepper = () => {

  const [clearRoundsPopup, setClearRoundsPopup] = useState(false)
  const [clearRoundsPopupResponse, setClearRoundsPopupResponse] = useState('')
  const [players, setPlayers] = useState(() => {
    const initValue = JSON.parse(localStorage.getItem('players-list'))
    return initValue || playersList.map((player, index) => ({...player,
                                                        id: index + 1,
                                                        rowColor: index % 2 !== 0 ? '#F8D49A' : '#BDC65B',
                                                        }))
  })
  const [nrOfPlayers, setNrOfPlayers] = useState(() => players.length)
  const [rounds, setRounds] = useState(() => {
    const initValue = JSON.parse(localStorage.getItem('rounds-list'))
    return initValue || [{roundId: 1, roundName: 'Round 1'}]
  })
  const [idPlayerToEdit, setIdPlayerToEdit] = useState(() => null)
  const [editPlayerName, setEditPlayerName] = useState({
        id: '',
        playerName: '',
        rowColor: '',
        playerRoundScore: [''],
        totalScore: ''
  })
  const [idPlayerScoreToEdit, setIdPlayerScoreToEdit] = useState(() => null)
  const [editPlayerScore, setEditPlayerScore] = useState({
      id: '',
      playerName: '',
      rowColor: '',
      playerRoundScore: [''],
      totalScore: ''
  })
  const [roundToEdit, setRoundToEdit] = useState(() => null)

// edit, delete and add players functions
  const handleAddPlayer = (e) => {
    e.preventDefault()
    if (players.length === 10) return
    let newPlayer = {
      playerName: `Player ${nrOfPlayers + 1}`,
      rowColor: '',
      playerRoundScore: players.length === 1 ? [''] : Array.from(Array(rounds.length).keys()).fill('', 0, rounds.length),
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
  const saveEditedPlayerName = (e, player) => {
    e.preventDefault()
    const editedPN = {
      playerName: editPlayerName.playerName,
      rowColor: idPlayerToEdit % 2 === 0 ? '#F8D49A' : '#BDC65B',
      playerRoundScore: player.playerRoundScore[0] === '' && player.playerRoundScore.length === 1 ? editPlayerScore.playerRoundScore : player.playerRoundScore.fill('', player.playerRoundScore.length - 1),
      totalScore: player.totalScore,
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
    if (newPlayerList.length === 0) setRounds([{roundId: 1, roundName: 'Round 1'}])
  }

// edit rounds functions
  const handleClearRounds = (e) => {
    e.preventDefault()
    setClearRoundsPopup(true)
    setEditPlayerScore({
      id: '',
      playerName: '',
      rowColor: '',
      playerRoundScore: [''],
      totalScore: ''
    })
  }
  const handleEditRowScore = (e, round) => {
    e.preventDefault()
    setRoundToEdit(round.roundId)
  }

//edit and saving players scores functions
  const handleEditedPlayerScore = (e, player) => {
    e.preventDefault()
    setIdPlayerScoreToEdit(player.id)
    const fieldValue = e.target.value
    const newScore = {
      id: player.id,
      playerName: player.playerName,
      rowColor: player.rowColor,
      playerRoundScore: [+fieldValue],
      totalScore: player.totalScore
    }
    setEditPlayerScore(newScore)
  }
  const handleSavePlayerScore = (e, player, round) => {
    e.preventDefault()
    const editedPS = {
      playerName: player.playerName,
      rowColor: player.rowColor,
      playerRoundScore: player.playerRoundScore[0] === '' && player.playerRoundScore.length === 1 ? editPlayerScore.playerRoundScore : player.playerRoundScore.fill(editPlayerScore.playerRoundScore[0], player.playerRoundScore.length - 1),
      totalScore: player.totalScore + editPlayerScore.playerRoundScore[editPlayerScore.playerRoundScore.length - 1],
      id: idPlayerScoreToEdit
    }
    const newPlayersList = [...players]
    const index = players.findIndex(player => player.id === idPlayerScoreToEdit)
    newPlayersList[index] = editedPS
    setPlayers(newPlayersList)
    if (round.roundId === roundToEdit) {
      const editedRound = {
        roundId: roundToEdit,
        roundName: `Round ${roundToEdit}`,
      }
      const newRoundsList = [...rounds]
      const index = rounds.findIndex(round => round.roundId === roundToEdit)
      newRoundsList[index] = editedRound
      setRounds(newRoundsList)
    }
    if (newPlayersList.every(({playerRoundScore}) => {
      let lastPlayerScore = playerRoundScore[playerRoundScore.length - 1]
      return typeof lastPlayerScore === 'number'
    })) {
      const newRound = {
        roundId: rounds.length + 1,
        roundName: `Round ${rounds.length + 1}`,
      }
      const newRoundsList = [...rounds, newRound]
      setRounds(newRoundsList)
      setRoundToEdit(null)
      const newPRScore = ''
      setPlayers(newPlayersList.map(player => ({...player, playerRoundScore: [...player.playerRoundScore, newPRScore]})))
    }
  }

  
  useEffect(() => {
    setNrOfPlayers(players.length)
    localStorage.setItem('players-list', JSON.stringify(players))
    localStorage.setItem('rounds-list', JSON.stringify(rounds))
    if (clearRoundsPopupResponse === 1) {
      setRounds([{roundId: 1, roundName: 'Round 1'}])
      setPlayers(players.map(player => ({...player, playerRoundScore: [''], totalScore: 0})))
    }
    setClearRoundsPopupResponse(0)
  }, [players, rounds, clearRoundsPopupResponse])

  return (
    <section className='scorekepper-main'>
        <h2>ScoreKeeper</h2>
        <BackButton/>
        <ScoreKepPopup trigger={clearRoundsPopup}
                        setPopup={setClearRoundsPopup}
                        setPopupResponse={setClearRoundsPopupResponse}
                        popupText={'Are you sure you want to clear this game?'}
        />
        <main>
          <table>
            <thead>
              <tr>
                <th className='table-head-row-header'>
                  <div>
                    <p>Rounds</p>
                    <button onClick={handleClearRounds}><CleaningServicesIcon/></button>
                  </div>
                  <div>
                    <p>Players</p>
                    <p className='table-head-row-header-p'>(Max 10 players)</p>
                  </div>
                </th>
                {
                  players ? players.sort((a,b) => {
                    return b.totalScore - a.totalScore
                  })
                  .map(player => {
                    return  <motion.th className='table-head-row' scope='col' style={{backgroundColor: `${player.rowColor}`}} key={player.id}
                                        initial={{x:'-200px'}} animate={{x: 0}} transition={{type: 'spring', duration: 0.5}}
                            >
                                {
                                  idPlayerToEdit !== player.id ?
                                  <>
                                    <div className='table-head-row-div'>
                                      <p>{player.playerName}</p>
                                      <div>
                                        <button type='button' onClick={e => handleEditFunction(e, player)}><EditIcon/></button>
                                        <button type='button'  onClick={() => handleDeleteFunction(player.id)}><DeleteIcon className='table-head-row-div-button'/></button>
                                      </div>
                                    </div>
                                    <p className='table-head-row-p'>Total: <span>{player.totalScore} pts</span></p>
                                  </>                          :
                                  <form onSubmit={(e) => saveEditedPlayerName(e,player)}>
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
                                <th className='table-body-row-round' key={round.roundId} scope='row' >
                                  <p>
                                      {round.roundName}
                                      {
                                        round.roundId === rounds.length ? 
                                                  <button type='button' onClick={e => handleEditRowScore(e, round)}><EditIcon/></button>
                                                                      : ''
                                      }
                                  </p>
                                </th>
                                {
                                  nrOfPlayers ? players.map(playerScoreInput => {
                                    let roundScore;
                                    for (let [ind, val] of playerScoreInput.playerRoundScore.entries()) {
                                      if (ind + 1 === round.roundId) roundScore = val
                                    }
                                      return <td key={playerScoreInput.id}>
                                              {
                                                typeof roundScore === 'string' && roundToEdit === round.roundId ? 
                                                    <form onSubmit={(e) => handleSavePlayerScore(e, playerScoreInput, round)}>
                                                      <input type='number'
                                                              name='playerRoundScore'
                                                              required
                                                              value={editPlayerScore.rScore}
                                                              onChange={e => handleEditedPlayerScore(e, playerScoreInput)}
                                                      />
                                                    </form>                                           :
                                                roundScore
                                              }
                                            </td>
                                    })        : ''
                                }
                              </tr>
                      }) : ''
                }
            </tbody>
          </table>
        </main>
    </section>
  )
}

export default ScoreKepper