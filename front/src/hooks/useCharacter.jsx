import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getCharacterDetail } from "../redux/actions";

const useCharacter = () => {
    const dispatch = useDispatch();
    const {detailId} = useParams();
    const character = useSelector((state) => state.characterDetail);

    useEffect (() => {
        dispatch(getCharacterDetail(detailId));

        return () => {
            dispatch(cleanDetail());
        }
    }, [detailId]);

    return character;
};

export default useCharacter;