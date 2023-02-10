import UserWelcome from '../../components/UserWelcome'
import Accounts from '../../layouts/Accounts'

function User() {
  return (
    <main className='user full-width-fill'>
      <UserWelcome user={'Tony Jarvis'} />
      <Accounts accounts={[
        {
          name: 'Argent Bank Checking (x8349)',
          amount: 2082.79,
          comment: 'Available Balance',
        },
        {
          name: 'Argent Bank Savings (x6712)',
          amount: 10928.42,
          comment: 'Available Balance',
        },
        {
          name: 'Argent Bank Credit Card (x8349)',
          amount: 184.30,
          comment: 'Current Balance',
        },
      ]}/>
    </main>
  )
}

export default User