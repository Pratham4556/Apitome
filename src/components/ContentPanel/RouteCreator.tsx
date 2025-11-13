import React from 'react'
import styles from "../../styles/ContentPanel/Routes.module.css"
import plus from "../../assets/plus.png"
import tick from "../../assets/tick.svg"
export default function RouteCreator() {
    const middleware=["Auth","CORS"]
  return (
    <div className={styles.childBody}>
        <div className={styles.RouteCreatorMain}>
        <div className={styles.RouteCreatorMainChild1}>
            <div className={styles.RouteCreatorMainChilditem1}>
                <div className={styles.RouteCreatorMainChilditem1Head}>Path</div>
                <input 
                    className={styles.RouteCreatorMainChilditem1HeadInput} 
                    placeholder='/users/:user_id'
                />
            </div>
            <div className={styles.RouteCreatorMainChilditem1}>
                <div className={styles.RouteCreatorMainChilditem1Head}>Method</div>
                <select 
                    className={styles.RouteCreatorMainChilditem1HeadSelect}
                    name="method" 
                    id="method"
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="PATCH">PATCH</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className={styles.RouteCreatorMainChilditem1}>
                <div className={styles.RouteCreatorMainChilditem1Head}>Controller</div>
                <select 
                    className={styles.RouteCreatorMainChilditem1HeadSelect}
                    name="controller" 
                    id="controller"
                >
                    <option value="">Select Controller</option>
                    <option value="Auth">Auth</option>
                    <option value="User">User</option>
                    <option value="Product">Product</option>
                    <option value="Order">Order</option>
                </select>
            </div>
        </div>
        <div className={styles.LinkedList}>
            <div className={styles.ListMap}>
                <div className={styles.LinkedListItem}>Start</div>
            <img src={tick} className={styles.tickItem}/>
            </div>
            {middleware.map((item,index)=>(
                <div className={styles.ListMap}>
                    <div className={styles.LinkedListItem}>{item}</div>
                    <img src={tick} className={styles.tickItem}/>
                </div>
            ))}
            <div className={styles.ListMap}>
                <div className={styles.LinkedListItemAction}>Add MiddleWare <img src={plus}  className={styles.LinkedListItemPlus}/></div>
                <img src={tick} className={styles.tickItem}/>
            </div>
            <div className={styles.LinkedListItem}>Controller Name</div>
        </div>
    </div>
    </div>
  )
}