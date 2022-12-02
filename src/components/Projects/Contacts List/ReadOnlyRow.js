import React from 'react'

const ReadOnlyRow = ({contact, handleEditFunction, handleDeleteFunction}) => {
  return (
    <tr>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
            <button className='contacts-list-button'
                    type='button'
                    onClick={e => handleEditFunction(e, contact)}>
                Edit
            </button>
            <button className='contacts-list-cancel-button'
                    type='button'
                    onClick={() => handleDeleteFunction(contact.email)}>
                Delete
            </button>
        </td>
    </tr>
  )
}

export default ReadOnlyRow