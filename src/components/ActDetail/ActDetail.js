import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import BtnBar from "../BtnBar/BtnBar";
import styles from "./ActDetail.module.css"

export default function ActDetail(){
    const {activityId} = useParams()
    const activity = useSelector((state) => state.activities.value.filter((el) => {
        return el.id.toString() === activityId.toString()
    }
    ))[0]

    return(
        <>
            <Header />
            <BtnBar />
            <div className="ActivityDetail">
                <h2 className={styles.name}>{activity.name}</h2>
                <p className={styles.notes}>{activity.notes}</p>
            </div>
        </>
    )
}