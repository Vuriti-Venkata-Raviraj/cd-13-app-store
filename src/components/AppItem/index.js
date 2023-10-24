// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="app-card">
      <img src={imageUrl} alt={appName} className="app-img" />

      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
