import './LoadingBar.modules.css'
export const LoadingBar = ({ loading }: { loading: boolean }) => {
  return <div id='loader' className={loading ? 'loading' : ''} />
}
