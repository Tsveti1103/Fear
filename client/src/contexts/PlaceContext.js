import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import * as itemService from "../services/itemService";

export const PlaceContext = createContext();

export const PlaceProvider = ({
  children,
}) => {
  const [fears, setFears] = useFetcher(itemService.getAllFears(), []);
  const navigate = useNavigate();

  const likeFear = async (data, fearId) => {
    try {
      return await itemService.likeFear(data, fearId)
    }
    catch (err) {
      throw err
    }
  }
  const delFears = (fearId) => {
    itemService.deleteFear(fearId)
    setFears(state => state.map(fear => fear.id !== fearId))
    document.body.classList.remove("modal-open");
    navigate('/fears/all');

  };

  const addFear = async (data) => {
    try {
      const result = await itemService.createFear(data)
      setFears(state => [
        ...state,
        result,
      ]);
      navigate('/fears/all');
    }
    catch (err) {
      throw err
    }
  };

  const editFear = async (data, fearId) => {
    try {
      const result = await itemService.editFear(fearId, data)
      setFears(state => state.map(x => x._id === fearId ? result : x));
      navigate(`/fears/${fearId}`);
    }
    catch (err) {
      throw err
    }
  };

  const getFear = (fearId) => {
    for (let fear of fears) {
      if (fear.id === fearId)
        return fear
    }
  };
  const userFears = (userId) => {
    let userF = []
    for (let fear of fears) {
      if (fear.user === userId)
        userF.push(fear)
    }
    return userF
  }
  const userLikedFears = (userId) => {
    let userF = []
    for (let fear of fears) {
      if (fear.likes.includes(userId))
        userF.push(fear)
    }
    return userF
  }
  const contextValues = {
    addFear,
    editFear,
    delFears,
    getFear,
    likeFear,
    userFears,
    userLikedFears,
  }
  return (
    <>
      <PlaceContext.Provider value={contextValues}>
        {children}
      </PlaceContext.Provider>
    </>
  );
};

export const usePlaceContext = () => {
  const context = useContext(PlaceContext);
  return context;
};