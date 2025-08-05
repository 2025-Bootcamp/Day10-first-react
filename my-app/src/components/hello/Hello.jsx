import HeartLogo from './images/heartImage.png'
import styles from './Hello.module.css'

function Hello({ name = 'world' }) {
  
  return (
    <>
      <img className={styles['heart-logo']} src={HeartLogo} />
      Hello {name}！
    </>
  )
}

export default Hello
