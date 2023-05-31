import { useState } from 'react';

import * as itemService from "../services/itemService";
import useFetcher from './useFetcher';
import { useEffect } from 'react';

export default function useProfile() {

    const [showCreatedFears, setShowCreatedFears] = useState(false)
    const [showLikedFears, setShowLikedFears] = useState(false)
    const [createdFears, setCreatedFears, isCreatedLoad] = useFetcher(itemService.getUserFears);
    const [likedFears, setLikedFears, isLikedLoad] = useFetcher(itemService.getUserLikedFears);
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
    return [showCreatedFears, showLikedFears, createdFears, likedFears, onShowFearsClick, isCreatedLoad,isLikedLoad ]
}