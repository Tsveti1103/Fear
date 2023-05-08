import { useState } from 'react';

import * as itemService from "../services/itemService";
import useFetcher from './useFetcher';

export default function useProfile(fears) {

    const [showCreatedFears, setShowCreatedFears] = useState(false)
    const [showLikedFears, setShowLikedFears] = useState(false)
    const [createdFears] = useFetcher(itemService.getUserFears(), [fears], []);
    const [likedFears] = useFetcher(itemService.getUserLikedFears(), [fears], []);
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