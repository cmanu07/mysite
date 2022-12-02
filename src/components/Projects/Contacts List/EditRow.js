import React from 'react'

const EditRow = ({ editFormData, handleCancelFunction, handleEditFormChange }) => {
  return (
    <tr>
        <td>
          <input
            className='edit-row-inputs'
            type="text"
            name="firstName"
            value={editFormData.firstName}
            required='required'
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            className='edit-row-inputs'
            type="text"
            name="lastName"
            value={editFormData.lastName}
            required='required'
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            className='edit-row-inputs'
            type="tel"
            name="phoneNumber"
            value={editFormData.phoneNumber}
            required='required'
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            className='edit-row-inputs'
            type="email"
            name="email"
            value={editFormData.email}
            required='required'
            onChange={handleEditFormChange}
          />
        </td>
        <td>
            <button className='contacts-list-save-button'
                    type='submit'
                    >
                Save
            </button>
            <button className='contacts-list-cancel-button'
                    type='button'
                    onClick={handleCancelFunction}>
                Cancel
            </button>
        </td>
    </tr>
  )
}

export default EditRow