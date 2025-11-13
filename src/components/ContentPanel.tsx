import React from 'react'
import styles from "../styles/contentPanel.module.css"
import useSideBarStore from '../store/SideBarStore'
import Overview from './ContentPanel/Overview';
import Routes from './ContentPanel/Routes';
import Components from './ContentPanel/Components';
import Env from './ContentPanel/Env';
import Version from './ContentPanel/Version';
import Monitor from './ContentPanel/Monitor';
import Docs from './ContentPanel/Docs';
export default function ContentPanel() {
const{selectedOption}=useSideBarStore();

const renderContent = () => {
    switch (selectedOption) {
      case 'Overview':
        return <Overview />
      case 'Routes':
        return <Routes />
      case 'Components':
        return <Components />
      case 'Env Variables':
        return <Env />
      case 'Version Control':
        return <Version />
      case 'Monitoring':
        return <Monitor />
      case 'Docs':
        return <Docs />
      default:
        return <div>Overview Content</div>
    }
  }
  return (
    <div className={styles.ContentMain}>
        {renderContent()}
    </div>
  )
}
