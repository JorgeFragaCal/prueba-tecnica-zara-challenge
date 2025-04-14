import styles from './LoadingBar.module.css'
export const LoadingBar = ({ loading }: { loading: boolean }) => {
  return <div className={`${styles.loader} ${loading ? styles.loading : ''}`} />
}
