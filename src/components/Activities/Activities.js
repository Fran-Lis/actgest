import { useSelector, useDispatch } from "react-redux";
import Activity from "../Activity/Activity";
import NoActivities from "../NoActivities/NoActivities";
import { load } from "../../store/slices/actsSlice";
import { useEffect } from "react";
import styles from './Activities.module.css'

export default function Activities(){
    const dispatch = useDispatch()
    const acts = useSelector((state) => state.activities.value)
    useEffect(() => {
        localStorage.getItem('acts') && dispatch(load())
    }, [dispatch])
    return(
        <div className={styles.list}>
            {acts.length > 0 ?
                acts.map(el =>{
                    return <Activity id={el.id} name={el.name} notes={el.notes} completed={el.completed} />
                })
                :
                <NoActivities />
            }
        </div>
    )
}