import React, { useEffect, useRef, useState } from 'react'

import BackButton from '../../Main/BackButton/BackButton'

import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './ScoreKepper.css'

import { playersList } from '../../constants'

const ScoreKepper = () => {

  const [players, setPlayers] = useState(() => {
    const initValue = JSON.parse(localStorage.getItem('players-list'))
    return initValue || playersList
  })
  const [nrOfPlayers, setNrOfPlayers] = useState(() => 2)
  const [idPlayerToEdit, setIdPlayerToEdit] = useState(() => null)
  const [addPlayer, setAddPlayer] = useState({
        id: '',
        playerName: '',
        rowColor: '',
        totalPointsNr: ''
  })
  const [editPlayerName, setEditPlayerName] = useState({
        id: '',
        playerName: '',
        rowColor: '',
        totalPointsNr: ''
  })
  const playerNameInputRef = useRef(null)

  const handleAddPlayer = (e) => {
    e.preventDefault()
    if (players.length === 10) return
    const newPlayer = {
        id: players.length + 1,
        playerName: addPlayer.playerName,
        rowColor: players.length % 2 !== 0 ? '#F8D49A' : '#F8BC9A',
        totalPointsNr: 0
    }
    const newPlayersList = [...players, newPlayer]
    setPlayers(newPlayersList)
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
      id: idPlayerToEdit,
      playerName: editPlayerName.playerName,
      rowColor: idPlayerToEdit % 2 === 0 ? '#F8D49A' : '#F8BC9A',
      totalPointsNr: 0
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
    setPlayers(newPlayerList)
  }

  useEffect(() => {
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
                <th className='table-head-row'>Round / Players</th>
                {
                  players ? players.sort((a,b) => {
                    return b.totalPointsNr - a.totalPointsNr
                  })
                  .map(player => {
                    return  <th className='table-head-row' style={{backgroundColor: `${player.rowColor}`}} key={player.id}>
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
                                    <p className='table-head-row-p'>Total: <span>{player.totalPointsNr} pts</span></p>
                                  </>                          :
                                  <form onSubmit={saveEditedPlayerName}>
                                    <input type='text'
                                          value={editPlayerName.playerName}
                                          name='playerName'
                                          onChange={handleEditedPlayerName}
                                          required='required'
                                          ref={playerNameInputRef}
                                    />
                                    <div>
                                      <button type='submit'><CheckIcon/></button>
                                      <button onClick={handleCancelFunction} type='button'><CloseIcon style={{color: '#FE8C8C'}}/></button>
                                    </div>
                                  </form>
                                }
                            </th>
                  })      : ''
                }
                <th className='table-head-row-add'>
                  <button className='table-head-row-add-button' onClick={handleAddPlayer}><AddIcon/></button>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {
                
              }
              <tr className='table-body-row'>
                <td>
                  <button className='table-body-row-add-button'><AddIcon/></button>
                </td>
              </tr> */}
              <tr className='table-body-row'>
                <td className='table-body-row-header'>Round 1</td>
                <td>43</td>
              </tr>
            </tbody>
          </table>
        </main>
    </section>
  )
}

export default ScoreKepper