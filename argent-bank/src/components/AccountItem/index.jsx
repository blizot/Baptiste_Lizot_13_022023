function AccountItem({ account }) {
  return (
    <article className='account-item'>
      <div>
        <h2 className='account-item__title prevent-text-overflow'>{account.name}</h2>
        <p className='account-item__amount prevent-text-overflow'>
          {Number(account.amount).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className='account-item__description'>{account.comment}</p>
      </div>
      <button className='account-item__button primary-button'>View Transactions</button>
    </article>
  )
}

export default AccountItem