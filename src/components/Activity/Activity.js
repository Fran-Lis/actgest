import { useDispatch } from "react-redux"
import { remove, complete } from "../../store/slices/actsSlice"
import { Link } from "react-router-dom"
import { toggle } from "../../store/slices/openFormSlice"
import styles from "./Activity.module.css"


export default function Activity(props){
    const dispatch = useDispatch()
    
    function handleComplete(e){
        e.stopPropagation()
        e.preventDefault()
        dispatch(complete(props.id))
    }

    function handleDelete(e){
        e.stopPropagation()
        e.preventDefault()
        dispatch(remove(props.id))
    }

    return(
        <Link to={`/${props.id}`} onClick={() => dispatch(toggle())} className={`${styles.activity} ${props.completed && styles.completed}`} >
            <h3 className={styles.name}>{props.name}</h3>
            <div className={styles.btnContainer}>
                <button type="button" className={`${styles.btn} ${styles.btnCompleted}`} onClick={handleComplete}>Completed</button>
                <button type="button" className={`${styles.btn} ${styles.btnDelete}`} onClick={handleDelete}>Delete</button>
            </div>
        </Link>
    )
}