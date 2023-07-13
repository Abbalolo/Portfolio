import { useState } from "react"
import styles from "./sideBar.module.scss"
import {NavLink} from "react-router-dom"

function SideBar() {
const [home, setHome] = useState("01")
const [home2, setHome2] = useState("02")
const [home3, setHome3] = useState("03")
const [home4, setHome4] = useState("04")
const [home5, setHome5] = useState("05")
const [home6, setHome6] = useState("06")




const changeClick = () => {
  setTimeout(() => {
    home === "01" ? setHome("Home") : setHome("01")
  },500)
 
 

}
const changeClickL1 = () => {
  setTimeout(() => {
    setHome("01")
  },500)

}


const changeClick2 = () => {
  setTimeout(() => {
    (home2 === "02") ? setHome2("Service") : setHome2("02")
  },500)
}
const changeClickL2 = () => {
  setTimeout(() => {
    setHome2("02")
  },500)
 
 }


const changeClick3 = () => {
  setTimeout(() => {
    (home3 === "03") ? setHome3("About"): setHome3("03")
  },500)
 
}
const changeClickL3 = () => {
  setTimeout(() => {
    setHome3("03")
  },500)
 
 }


const changeClick4 = () => {
  setTimeout(() => {
    (home4 === "04") ? setHome4("Work") : setHome4("04")
  },500)
} 
const changeClickL4 = () => {
  setTimeout(() => {
    setHome4("04")
  },500)
 
 }


const changeClick5 = () => {
  setTimeout(() => {
    (home5 === "05") ? setHome5("Contact") : setHome5("05")
  },500)
} 
const changeClickL5 = () => {
  setTimeout(() => {
    setHome5("05")
  },500)
 
 }

const changeClick6 = () => {
  setTimeout(() => {
    (home6 === "06") ? setHome6("Hire") : setHome6("06")
  },500)
} 
const changeClickL6 = () => {
  setTimeout(() => {
    setHome6("06")
  },500)
 
 }



  return (
    <div className={`relative z-50  hidden md:block`}>
      <div className={styles.navigator}>
        <li  className={styles.left}><NavLink onMouseEnter={changeClick} onMouseLeave={changeClickL1} to="/"style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black' ,
              background: isActive ? '#4169E1' : 'white',
              padding: "2px",
              opacity: "0.8"
            })}>{home}</NavLink></li>
            
        <li className={styles.right}><NavLink onMouseEnter={changeClick2} onMouseLeave={changeClickL2} to="/service" style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black' ,
              background: isActive ? '#4169E1' : 'white',
              padding: "2px",
              opacity: "0.8"
            })}>{home2}</NavLink></li>
            

        <li className={styles.left}><NavLink onMouseEnter={changeClick3} onMouseLeave={changeClickL3}  to="/about" style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black' ,
              background: isActive ? '#4169E1' : 'white',
              padding: "2px",
              opacity: "0.8"
            })}>{home3}</NavLink></li>

        <li className={styles.right}><NavLink onMouseEnter={changeClick4} onMouseLeave={changeClickL4}  to="/project" style={({ isActive }) => ({
             color: isActive ? '#fff' : 'black' ,
             background: isActive ? '#4169E1' : 'white',
             padding: "2px",
             opacity: "0.8"
            })}>{home4}</NavLink></li>

        <li className={styles.left}><NavLink onMouseEnter={changeClick5} onMouseLeave={changeClickL5}  to="/contact" style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black' ,
              background: isActive ? '#4169E1' : 'white',
              padding: "2px",
              opacity: "0.8"
            })}>{home5}</NavLink></li> 

      </div>
    </div>
  )
}

export default SideBar