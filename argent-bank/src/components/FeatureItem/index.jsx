import chatIcon from '../../assets/images/icon-chat.png'
import moneyIcon from '../../assets/images/icon-money.png'
import securityIcon from '../../assets/images/icon-security.png'

const featuresIcons = {
  chat: chatIcon,
  savings: moneyIcon,
  security: securityIcon
}

function FeatureItem({feature, title, text}) {
  return (
    <article className='feature-item'>
      <img src={featuresIcons[feature]} alt={feature} className='feature-item__icon' />
      <h2 className='feature-item__title'>{title}</h2>
      <p className='feature-item__text'>{text}</p>
    </article>
  )
}

export default FeatureItem