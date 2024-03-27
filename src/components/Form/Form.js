import Header from "../Header/Header"
import BtnBar from "../BtnBar/BtnBar"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../../store/slices/actsSlice"
import styles from "./Form.module.css"

export default function Form(){
    const dispatch = useDispatch()
    const [newAct, setNewAct] = useState({
        id: 0,
        name: '',
        notes: '',
        completed: false
    })

    function createId(){
        return Math.random() * Number.MAX_VALUE
    }

    function handleInput(e){
        const {id, value} = e.target
        setNewAct({
            ...newAct,
            [id] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        newAct.id = createId()
        dispatch(add(newAct))
        setNewAct({
            id: 0,
            name: '',
            notes: '',
            completed: false
        })
    }

    return(
        <>
            <Header />
            <BtnBar />
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label} htmlFor="name">Activity Name</label>
                <input className={styles.name} type="text" id="name" value={newAct.name} onChange={handleInput}/>
                <label className={styles.label} htmlFor="notes">Notes</label>
                <textarea className={styles.notes} id="notes" value={newAct.notes} onChange={handleInput}></textarea>
                <button className={styles.btn} type="submit">Add</button>
            </form>
        </>
    )
}