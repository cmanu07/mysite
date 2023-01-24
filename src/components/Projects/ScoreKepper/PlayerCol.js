import React from 'react'

const PlayerCol = ({editPlayerName, handleEditedPlayerName}) => {
  return (
    <input type='text'
        value={editPlayerName.playerName}
        name='playerName'
        onChange={handleEditedPlayerName}
        required='required'
        autoFocus
    />
  )
}

export default PlayerCol