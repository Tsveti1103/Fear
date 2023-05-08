import styles from './Details.module.css';

import { Link, useParams, useNavigate } from 'react-router-dom';

import Delete from '../Delete/Delete';
import * as itemService from "../../../services/itemService";
import useFetcher from '../../../hooks/useFetcher';
import { useAuthContext } from "../../../contexts/AuthContext";
import { usePlaceContext } from '../../../contexts/PlaceContext';

export default function Details() {
    const { fearId } = useParams();
    const { likeFear } = usePlaceContext();
    const [currentFear, setFear] = useFetcher(itemService.details(fearId), [fearId])
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const latitude = Number(currentFear.latitude).toFixed(6)
    const longitude = Number(currentFear.longitude).toFixed(6)
    const isOwner = user.user_id === currentFear.user
    const isLiked = currentFear.likes ? currentFear.likes.includes(user.user_id) : false
    function onLikeFear(e) {
        e.preventDefault();
        if (typeof currentFear.image == "string") {
            delete currentFear.image;
        }
        likeFear(currentFear, fearId).then(
            result => {
                let likes = []
                for (let i of result["likes"]) {
                    likes.push(i['id'])
                }
                setFear(state => ({ ...state, 'likes': likes, "image": result.image }));
                navigate(`/fears/${fearId}`);
            }
        ).catch((err) => {
            throw (err)
        })
    }
    return (
        <>
            <h1 className={styles.heading}>{currentFear.title}</h1>
            {isOwner &&
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
                        <li>Likes: {currentFear.likes ? currentFear.likes.length : 0}</li>
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
            <button onClick={onLikeFear} className={styles.likeBtn}>
                {isLiked ? <i className="fa-solid fa-heart"> <span>DISLIKE</span></i> : <i className="fa-regular fa-heart"><span>LIKE</span></i>}
            </button>
            <p className={styles.description}>{currentFear.description}</p>
        </>
    )
}