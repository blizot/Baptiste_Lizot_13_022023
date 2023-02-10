import AccountItem from '../../components/AccountItem'

function Accounts({ accounts }) {
  return (
    <section className='accounts'>
      {accounts.map((account, index) => 
        <AccountItem account={account} key={`account-item-${index}`} />
      )}
    </section>
  )
}

export default Accounts