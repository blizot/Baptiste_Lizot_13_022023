import AccountItem from '../../components/AccountItem'

function Accounts({ accounts }) {
  return (
    <section className='accounts'>
      {accounts.map(account => <AccountItem account={account}/>)}
    </section>
  )
}

export default Accounts