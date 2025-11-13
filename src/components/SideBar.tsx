import React, { useEffect } from 'react'
import routes from "../assets/overview.svg"
import overview from "../assets/routes.svg"
import componenets from "../assets/components.svg"
import versions from "../assets/versions.svg"
import env from "../assets/env.svg"
import monitoring from "../assets/monitor.svg"
import docs from "../assets/docs.svg"
import styles from "../styles/sidebar.module.css"
import useSideBarStore from '../store/SideBarStore'
import Settings from "../assets/options.svg"
interface SidebarOption {
  name: string
  icon: string
}

export default function Sidebar() {
  const { 
    selectedOption, 
    setSelectedOption, 
    setOptions,
    isSelected 
  } = useSideBarStore()

  const optionsData: SidebarOption[] = [
    {
      name: "Overview",
      icon: overview
    },
    {
      name: "Routes", 
      icon: routes
    },
    {
      name: "Components",
      icon: componenets
    },
    {
      name: "Env Variables",
      icon: env
    },
    {
      name: "Version Control",
      icon: versions
    },
    {
      name: "Monitoring",
      icon: monitoring
    },
    {
      name: "Docs",
      icon: docs
    }
  ]


  useEffect(() => {
    setOptions(optionsData)
  }, [setOptions])

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName)
  }

  return (
    <div className={styles.SidebarMain}>
      <div className={styles.SidebarMainOptionsContainer}>
         {optionsData.map((item, index) => (
        <div 
          key={index}
          className={isSelected(item.name) ? styles.SidebarOptionsItemSelected : styles.SidebarOptionsItem} 
          onClick={() => handleOptionClick(item.name)}
        >
          <img src={item.icon} className={styles.SidebarOptionsItemImage} alt={item.name} />
          {item.name}
        </div>
      ))}
      </div>
      <div 
          
          className={styles.SidebarSettings} 
        >
          <img src={Settings} className={styles.SidebarOptionsItemImage} alt={Settings} />
          Project Settings
        </div>
    </div>
  )
}