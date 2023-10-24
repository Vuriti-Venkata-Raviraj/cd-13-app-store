// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, changeTab, isActive} = props
  const {tabId, displayText} = tab

  const tabChanged = () => {
    changeTab(tabId)
  }

  const changeTheme = isActive ? 'change-theme' : ''
  const changeBorder = isActive ? 'change-border' : ''

  return (
    <li className={`tab-card ${changeBorder}`}>
      <button
        type="button"
        onClick={tabChanged}
        className={`tab-name ${changeTheme}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
