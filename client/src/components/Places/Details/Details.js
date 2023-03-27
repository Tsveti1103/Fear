import styles from './Details.module.css';
import { Link, useParams } from 'react-router-dom';
import * as itemService from "../../../services/itemService";
import { useFetcher } from '../../../hooks/useFetcher';
import { useAuthContext } from "../../../contexts/AuthContext";
import Delete from '../Delete/Delete';

export default function Details() {
    const { fearId } = useParams();
    const [currentFear,setFear] = useFetcher(itemService.details(fearId), [fearId])
    const { user } = useAuthContext();

    const latitude = Number(currentFear.latitude).toFixed(6)
    const longitude = Number(currentFear.longitude).toFixed(6)

    return (
        <>
            <h1 className={styles.heading}>{currentFear.title}</h1>
            {user.user_id === currentFear.user &&
                <div className={styles.icons}>
                    <Link to={`edit/`} title="Edit">
                        <i className="fa-solid fa-pen-clip"></i>
                    </Link>
                    <Delete currentFear={currentFear}></Delete>
                </div>}
            <div className={styles.content}>
                <div className={styles.info}>
                    <ul role="list" className={styles.stats}>
                        <h2>Info</h2>
                        <li>City: {currentFear.city}</li>
                        <li>Website: <Link to={currentFear.website} target="_blank"> {currentFear.website}</Link></li>
                        <li>Free: {currentFear.cost_free ? 'Yes' : "Not"}</li>
                        <li>Coordinates: {latitude} , {longitude}</li>
                    </ul>
                    <ul role="list" className={styles.fears}>
                        <h2>Fears</h2>
                        <li>Water: {currentFear.fear_water ? <i style={{ color: "green" }} className={`${styles.green} fa-solid fa-check`}></i> : <i className="fa-solid fa-xmark"></i>}</li>
                        <li>Height: {currentFear.fear_height ? <i style={{ color: "green" }} className={`${styles.green} fa-solid fa-check`}></i> : <i className="fa-solid fa-xmark"></i>}</li>
                        <li>Animals: {currentFear.fear_animals ? <i style={{ color: "green" }} className={`${styles.green} fa-solid fa-check`}></i> : <i className="fa-solid fa-xmark"></i>}</li>
                        <li>Other: {currentFear.fear_other ? <i style={{ color: "green" }} className={`${styles.green} fa-solid fa-check`}></i> : <i className="fa-solid fa-xmark"></i>}</li>
                    </ul>
                </div>
                <div className={styles.img} style={{ backgroundImage: `url(${currentFear.image})` }} alt="" />
            </div>
            <p className={styles.description}>{currentFear.description}</p>
        </>
    )
}