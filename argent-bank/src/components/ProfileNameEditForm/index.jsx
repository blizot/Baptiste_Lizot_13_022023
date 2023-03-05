import { Form } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { editName } from '../../utils/services/redux.profile'

function ProfileNameEditForm({ formVisibility, data }) {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editName({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value
    }, data.jwt))
    event.target.reset()
    formVisibility.toggle()
  }

  return (
    <div className={`${formVisibility.value ? 'name-edit-form' : 'hide-everything'}`}>
      <Form onSubmit={handleSubmit} onReset={formVisibility.toggle} method='post'>
          <div className='name-edit-form__text-inputs'>
            <input type='text'name='firstName' placeholder={data.profileData?.firstName} required />
            <input type='text'name='lastName' placeholder={data.profileData?.lastName} required />
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

export default ProfileNameEditForm
