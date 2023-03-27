import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as itemService from "../services/itemService";
export const PlaceContext = createContext();


export const PlaceProvider = ({
  children,
}) => {
  const [fears, setFears] = useState([]);
  const navigate = useNavigate();

  const delFears = (fearId) => {
    itemService.deleteFear(fearId).then(() => {
      setFears(state => state.map(fear => fear.id !== fearId))
      document.body.classList.remove("modal-open");
      navigate('/fears/all');
    })
  }

  const addFear = (data) => {
    itemService.createFear(data).then(result => {
      setFears(state => [
        ...state,
        result,
      ]);
      navigate('/fears/all');
    });
  };

  const editFear = (data,fearId) => {
    itemService.editFear(fearId, data).then(result => {
      setFears(state => state.map(x => x._id === fearId ? result : x));
      navigate(`/fears/${fearId}`);
    });
  }

  const contextValues = {
    addFear,
    editFear,
    delFears,
  }
  return (
    <>
      <PlaceContext.Provider value={contextValues}>
        {children}
      </PlaceContext.Provider>
    </>
  );
}

export const usePlaceContext = () => {
  const context = useContext(PlaceContext);
  return context;
};