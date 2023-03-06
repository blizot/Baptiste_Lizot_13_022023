import { useState } from 'react'
import { Form } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { editName } from '../../utils/redux/profile'

function NameEditForm({ jwt, profileData }) {
  const dispatch = useDispatch()

  const [isFormVisible, setFormVisibility] = useState(false)
  const toggleFormVisibility = () => setFormVisibility(!isFormVisible)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editName({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value
    }, jwt))
    event.target.reset()
    toggleFormVisibility()
  }

  if (!isFormVisible) {
    return (
      <button onClick={toggleFormVisibility} className='primary-button'>Edit Name</button>
    )
  }

  return (
    <div className='name-edit-form'>
      <Form onSubmit={handleSubmit} onReset={toggleFormVisibility} method='post'>
          <div className='name-edit-form__text-inputs'>
            <input type='text'name='firstName' placeholder={profileData?.firstName} required />
            <input type='text'name='lastName' placeholder={profileData?.lastName} required />
          </div>
          <div className='name-edit-form__buttons'>
            <button type='submit'
              className='primary-button'>
                Save
            </button>
            <button type='reset'
              className='cancel-button'>
                Cancel
            </button>
          </div>
      </Form>
    </div>
  )
}

export default NameEditForm
