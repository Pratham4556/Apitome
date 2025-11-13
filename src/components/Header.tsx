import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import styles from "../styles/header.module.css"
import rocket from "../assets/rocket.svg"
import start from "../assets/start-up.png"
import play from "../assets/play.png"
import pause from "../assets/pause.png"

export default function Header() {
    const [state, setState] = useState('start')
    const [projectId] = useState('project_001')

    const getState = () => {
        switch(state) {
            case "start":
                return { 
                    icon: start, 
                    label: "Ready to Start",
                    nextState: "play",
                    iconClass: styles.statusIconStart,
                    buttonClass: styles.PlayAbleButtonStateStart
                }
            case "play":
                return { 
                    icon: play, 
                    label: "Running",
                    nextState: "pause",
                    iconClass: styles.statusIconPlay,
                    buttonClass: styles.PlayAbleButtonStatePlay
                }
            case "pause":
                return { 
                    icon: pause, 
                    label: "Paused",
                    nextState: "play",
                    iconClass: styles.statusIconPause,
                    buttonClass: styles.PlayAbleButtonStatePause
                }
            default:
                return { 
                    icon: start, 
                    label: "Ready to Start",
                    nextState: "play",
                    iconClass: styles.statusIconStart,
                    buttonClass: styles.PlayAbleButtonStateStart
                }
        }
    }

    const handlePlayPauseClick = () => {
        const currentState = getState()
        setState(currentState.nextState)
    }

    const handleDeployClick = () => {
        
    }

    const currentState = getState()

    return (
        <div className={styles.Headermain}>
            <img src={Logo} className={styles.logoStyles} alt="Logo" />
            
            <div className={styles.ProjectStatus}>
                <div>{projectId}</div>
                <div 
                    className={styles.PlayAbleButton} 
                    onClick={handlePlayPauseClick}
                >
                    <img 
                        src={currentState.icon} 
                        className={currentState.iconClass}
                    />
                    <div className={currentState.buttonClass}>
                        {currentState.label}
                    </div>
                </div>
            </div>
            
            <div 
                className={styles.DeployButton} 
                onClick={handleDeployClick}
            >
                <img src={rocket} className={styles.rocketImage}/>
                Deploy
            </div>
        </div>
    )
}