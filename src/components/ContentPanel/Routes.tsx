import React from 'react'
import SearchBlock from './SearchBlock'
import styles from "../../styles/ContentPanel/Routes.module.css"
import save from "../../assets/save.svg"
import RouteCreator from './RouteCreator'
export default function Routes() {
  return (
    <div className={styles.parent}>
        <SearchBlock name='Search Routes' placeHolder='/users/:user_id'/>
        <div className={styles.child}>
          <div className={styles.childHead}>
            <div className={styles.childHeadHeading}>Manage Routes</div>
            <div className={styles.childHeadAction}>
              <div className={styles.childHeadActionCreateRoute}>Create Route</div>
              <div className={styles.childHeadActionSave}><img src={save} /> Save</div>
            </div>
          </div>
         
            <RouteCreator />
          
         
            <RouteCreator />
        
            <RouteCreator />
         
        </div>
    </div>
  )
}
