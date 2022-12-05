import React, { useState, Fragment } from 'react'
import BackButton from '../../Main/BackButton/BackButton'
import Popup from './Popup/Popup'
import ContactsForm from './ContactsForm'
import ReadOnlyRow from './ReadOnlyRow'
import EditRow from './EditRow'

import Lottie from 'lottie-react'
import saveAnimation from './Popup/save_animation.json'
import deleteAnimation from './Popup/delete_animation.json'
import addAnimation from './Popup/add_animation.json'

import { contactsList } from '../../constants'

import './Contacts.css'

const Contacts = () => {
    const [popupAddButton, setPopupAddButton] = useState(() => false)
    const [popupSaveButton, setPopupSaveButton] = useState(() => false)
    const [popupDeleteButton, setPopupDeleteButton] = useState(() => false)
    const [contacts, setContacts] = useState(() => contactsList)
    const [editContact, setEditContact] = useState(null)
    const [addFormData, setAddFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    })
    const [editFormData, setEditFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    })
    const [query, setQuery] = useState(() => '')

    const handleFormInput = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value
        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        const newContact = {
            firstName: addFormData.firstName,
            lastName: addFormData.lastName,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email
        }
        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
        const clearFormData = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: ""
        }
        setAddFormData(clearFormData)
        setPopupAddButton(true)
    }
    const handleSubmitEditedForm = (e) => {
        e.preventDefault();
        const editedContact = {
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex(
            (contact) => contact.email === editContact
        );
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContact(null);
        setPopupSaveButton(true)
    }
    
    const handleEditFunction = (e, contact) => {
        e.preventDefault()
        setEditContact(contact.email)
        const editValues = {
            firstName: contact.firstName,
            lastName: contact.lastName,
            phoneNumber: contact.phoneNumber,
            email: contact.email
        }
        setEditFormData(editValues)
    }
    const handleEditFormChange = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value
        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue
        setEditFormData(newFormData)
    }
    const handleCancelFunction = () => {
        setEditContact(null)
    }
    const handleDeleteFunction = (contactEmail) => {
        const newContactsList = [...contacts]
        const index = contacts.findIndex(contact => contact.email === contactEmail)
        newContactsList.splice(index, 1)
        setContacts(newContactsList)
        setPopupDeleteButton(true)
    }

  return (
    <section className='contacts-main'>
        <h2>Contacts</h2>
        <BackButton/>
        <Popup trigger={popupAddButton}
                setPopup={setPopupAddButton}
                popupText={'Contact added!'}
                popupAnimation={<Lottie loop='true'
                                        animationData={addAnimation}
                                />}
        />
        <Popup trigger={popupSaveButton}
                setPopup={setPopupSaveButton}
                popupText={'Contact saved!'}
                popupAnimation={<Lottie loop='true'
                                        animationData={saveAnimation}
                                />}
        />
        <Popup trigger={popupDeleteButton}
                setPopup={setPopupDeleteButton}
                popupText={'Contact deleted!'}
                popupAnimation={<Lottie loop='true'
                                        animationData={deleteAnimation}
                                />}
        />
        <main>
            <div className='contacts-form'>
                <div className='contacts-form-search-div'>
                    <input type='search'
                        className='contacts-form-search-input'
                        name='searchContact'
                        placeholder='Name or email...'
                        onChange={(e => setQuery(e.target.value.toLowerCase()))}
                        />
                    <label className='contacts-form-search-label' htmlFor='searchContact'>Search for contact</label>
                </div>
                <ContactsForm
                    handleFormInput={handleFormInput}
                    handleSubmitForm={handleSubmitForm}
                    addFormData={addFormData}
                />
            </div>
            <div className='contacts-list'>
                <h4>List of contacts:</h4>
                <form onSubmit={handleSubmitEditedForm}>
                    <table>
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='contacts-list-table-body'>
                            {
                                contacts ? contacts.filter(
                                    contact => contact.firstName.toLowerCase().includes(query) ||
                                                contact.lastName.toLowerCase().includes(query) ||
                                                contact.email.toLowerCase().includes(query)
                                )
                                .map(contact => {
                                    return (
                                        <Fragment key={contact.email}>
                                            {
                                                editContact === contact.email ?
                                                    <EditRow
                                                    editFormData = {editFormData}
                                                    handleCancelFunction = {handleCancelFunction}
                                                    handleEditFormChange = {handleEditFormChange}
                                                    />
                                                                :
                                                    <ReadOnlyRow 
                                                    contact = {contact}
                                                    handleEditFunction = {handleEditFunction}
                                                    handleDeleteFunction = {handleDeleteFunction}
                                                    />
                                            }
                                        </Fragment>
                                    )
                                }) : null
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </main>
    </section>
  )
}

export default Contacts