import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../../store/slices/openFormSlice";
import styles from './BtnBar.module.css'

export default function BtnBar(){
    const dispatch = useDispatch()
    const open = useSelector(state => state.openForm.value)

    return(
        <div className={`${styles.bar} ${open && styles.barOnForm}`}>
            {open ?
                <Link to='/' className={styles.btnToHome} onClick={() => dispatch(toggle())}>Back</Link>
                :
                <Link to='/addNew' className={styles.btnToForm} onClick={() => dispatch(toggle())}>Add New Activity</Link>
            }
        </div>
    )
}
