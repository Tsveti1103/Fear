import { useEffect, useState } from 'react';
import * as itemService from "../services/itemService";

export default function useProfile(id, fears) {
    const [showCreatedFears, setShowCreatedFears] = useState(false)
    const [showLikedFears, setShowLikedFears] = useState(false)
    const [createdFears, setCreatedFears] = useState([]);
    const [likedFears, setLikedFears] = useState([]);
    useEffect(() => {
        let userF = []
        itemService.getAllFears()
            .then((fears) => {
                for (let fear of fears) {
                    if (fear.user == id) {
                        userF.push(fear)
                    }
                }
                setCreatedFears(userF)
            })
    }, [fears]);

    useEffect(() => {
        let userlF = []
        itemService.getAllFears()
            .then((fears) => {
                for (let fear of fears) {
                    if (fear.likes.includes(id))
                        userlF.push(fear)
                }
                setLikedFears(userlF)
            })
    }, [fears]);
    const onShowFearsClick = (e) => {
        let button = e.target.id
        e.preventDefault();
        if (button === 'create') {
            setShowCreatedFears(current => !current)
            setShowLikedFears(false)
        }
        else if (button === 'like') {
            setShowLikedFears(current => !current)
            setShowCreatedFears(false)
        }
    }
    return [showCreatedFears, showLikedFears, createdFears, likedFears, onShowFearsClick]
}