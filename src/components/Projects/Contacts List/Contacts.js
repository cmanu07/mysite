import React, { useState, Fragment } from 'react'
import BackButton from '../../Main/BackButton/BackButton'
import ContactsForm from './ContactsForm'
import ReadOnlyRow from './ReadOnlyRow'
import EditRow from './EditRow'

import { contactsList } from '../../constants'

import './Contacts.css'

const Contacts = () => {
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
        console.log(newFormData)
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
    }
    
  return (
    <section className='contacts-main'>
        <h2>Contacts</h2>
        <BackButton/>
        <main>
            <div className='contacts-form'>
                <div className='contacts-form-search-div'>
                    <input type='search'
                        className='contacts-form-search-input'
                        name='searchContact'
                        placeholder='Name or email...'
                        onChange={(e => setQuery(e.target.value))}
                        />
                    <label className='contacts-form-search-label' htmlFor='searchContact'>Search for contact</label>
                </div>
                <ContactsForm
                    handleFormInput={handleFormInput}
                    handleSubmitForm={handleSubmitForm}
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
                                contacts && contacts.filter(
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
                                })
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