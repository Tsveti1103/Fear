import { useState } from 'react';
import * as itemService from "../services/itemService";
import useFetcher from './useFetcher';

export default function useProfile(id, fears) {
    const [showCreatedFears, setShowCreatedFears] = useState(false)
    const [showLikedFears, setShowLikedFears] = useState(false)
    const [createdFears] = useFetcher(itemService.getAllFears(), [fears],[],sortCreatedFears);
    const [likedFears] = useFetcher(itemService.getAllFears(), [fears],[],sortLikedFears);
    function sortCreatedFears(fears) {
        let userF = []
        for (let fear of fears) {
            if (fear.user == id) {
                userF.push(fear)
            }
        }
        return userF
    }
    function sortLikedFears(fears){
        let userlF = []
        for (let fear of fears) {
            if (fear.likes.includes(id))
                userlF.push(fear)
        }
        return userlF
    }
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