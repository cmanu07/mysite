import {React} from 'react'

const ContactsForm = ({ handleFormInput, handleSubmitForm }) => {
    
  return (      <form onSubmit={handleSubmitForm}>
                    <div>
                        <input type='text'
                            className='contacts-form-firstName-input'
                            name='firstName'
                            required
                            onChange={handleFormInput}
                        />
                        <label className='contacts-form-firstName-label' htmlFor='firstName'>
                            Firstname
                        </label>
                    </div>
                    <div>
                        <input type='text'
                            className='contacts-form-lastName-input'
                            name='lastName'
                            required
                            onChange={handleFormInput}
                        />
                        <label className='contacts-form-lastName-label' htmlFor='lastName'>
                            Lastname
                        </label>
                    </div>
                    <div>
                        <input type='tel'
                            className='contacts-form-phone-input'
                            name='phoneNumber'
                            required
                            onChange={handleFormInput}
                        />
                        <label className='contacts-form-phone-label' htmlFor='phoneNumber'>
                            Phone number
                        </label>
                    </div>
                    <div>
                        <input type='email'
                            className='contacts-form-email-input'
                            name='email'
                            required
                            onChange={handleFormInput}
                        />
                        <label className='contacts-form-email-label' htmlFor='email'>
                            Email
                        </label>
                    </div>
                    <button>Add Contact</button>
                </form>
  )
}

export default ContactsForm