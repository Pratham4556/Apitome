import React, { useState } from 'react'
import styles from "../../styles/ContentPanel/Component.module.css"
import SearchBlock from './SearchBlock'
import pencil from "../../assets/pencil.svg"

type MiddlewareData = {
  name: string;
  isGlobal: string;
  enabled: boolean;
}

type ControllerData = {
  name: string;
}

export default function Components() {
  const [selected, setSelected] = useState("Middlewares")
  
  const componentTypes = [
    { 
      id: "Middlewares", 
      label: "Middlewares", 
      searchPlaceholder: "jwt-auth-middleware...",
      data: [
        {
          name: "jwt-auth-middleware",
          isGlobal: "Yes",
          enabled: true
        },
        {
          name: "cors-middleware",
          isGlobal: "Yes",
          enabled: true
        },
        {
          name: "rate-limiter-middleware",
          isGlobal: "No",
          enabled: false
        },
        {
          name: "validation-middleware",
          isGlobal: "No",
          enabled: true
        },
        {
          name: "logger-middleware",
          isGlobal: "Yes",
          enabled: true
        },
        {
          name: "error-handler-middleware",
          isGlobal: "Yes",
          enabled: true
        }
      ] as MiddlewareData[]
    },
    { 
      id: "Controllers", 
      label: "Controllers", 
      searchPlaceholder: "auth-controller...",
      data: [
        { name: "AuthController" },
        { name: "UserController" },
        { name: "ProductController" },
        { name: "OrderController" },
        { name: "PaymentController" },
        { name: "NotificationController" },
        { name: "AdminController" },
        { name: "ReportController" }
      ] as ControllerData[]
    }
  ]

  const handleTabClick = (componentType: string) => {
    setSelected(componentType)
  }

  const getCurrentSearchConfig = () => {
    const currentType = componentTypes.find(type => type.id === selected)
    return {
      name: `Search ${currentType?.label}`,
      placeholder: currentType?.searchPlaceholder || "",
      heading: `Manage ${currentType?.label}`,
      button: currentType?.label === "Middlewares" ? "Middleware" : "Controller",
      data: currentType?.data
    }
  }

  const isMiddleware = (item: any): item is MiddlewareData => {
    return 'isGlobal' in item && 'enabled' in item
  }

  const renderMiddlewareItem = (item: MiddlewareData, index: number) => (
    <div key={`middleware-${index}`} className={styles.MainItem}>
      <div className={styles.ItemHead}>{item.name}</div>
      <div className={styles.MainItemChild}>
        <select 
          name={`global-${index}`} 
          id={`global-${index}`}
          defaultValue={item.isGlobal === "Yes" ? "global" : "route"}
          className={styles.OptionItem}
        >
          <option value="global">Global Middleware</option>
          <option value="route">Route Middleware</option>
        </select>
        <select 
          name={`enabled-${index}`} 
          id={`enabled-${index}`}
          defaultValue={item.enabled ? "enabled" : "disabled"}
          className={styles.OptionItem1}
        >
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
        <img src={pencil} alt="Edit" className={styles.pencilIcon}/>
      </div>
    </div>
  )

  const renderControllerItem = (item: ControllerData, index: number) => (
    <div key={`controller-${index}`} className={styles.MainItem}>
       <div className={styles.ItemHead}>{item.name}</div>
      <div className={styles.MainItemChild}>
        <img src={pencil} alt="Edit" className={styles.pencilIcon}/>
      </div>
    </div>
  )

  return (
    <div className={styles.parent}>
      <div className={styles.ComponentHead}>
        {componentTypes.map((type) => (
          <div 
            key={type.id}
            className={
              selected === type.id 
                ? styles.ComponentHeadItem 
                : styles.ComponentHeadItemUnselected
            }
            onClick={() => handleTabClick(type.id)}
          >
            {type.label}
          </div>
        ))}
      </div>
      
      <div className={styles.ComponentBody}>
        <div className={styles.SearchBoxWrapper}>
          <SearchBlock 
            name={getCurrentSearchConfig().name} 
            placeHolder={getCurrentSearchConfig().placeholder} 
          />
        </div>
        <div className={styles.ComponentBodyMain}>
          <div className={styles.ComponentBodyMainHead}>
            <div className={styles.ComponentBodyMainHeadTitle}>
              {getCurrentSearchConfig().heading}
            </div>
            <div className={styles.ComponentBodyMainHeadAction}>
              Create {getCurrentSearchConfig().button}
            </div>
          </div>
          <div className={styles.ComponentBodyMainBody}>
            {getCurrentSearchConfig().data?.map((item, index) => 
              isMiddleware(item) 
                ? renderMiddlewareItem(item, index)
                : renderControllerItem(item, index)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}