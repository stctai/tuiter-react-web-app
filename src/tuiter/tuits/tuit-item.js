import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <div className="wd-tuit-container border-top border-start border-end d-flex">
            <img className="wd-float-left wd-profile-pic me-3" src={`/images/${tuit.image}`}/>

            <div className="wd-float-left w-100">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                <span className="wd-title">{tuit.userName}
                    <i className="fa-solid fa-circle-check"></i></span>
                <span className="wd-subtitle"> {tuit.handle} · {tuit.time}</span>
                <br/>
                {tuit.tuit}
                {TuitStats(tuit)}
            </div>

            <div className="wd-float-done"></div>
        </div>
    );
};

export default TuitItem;