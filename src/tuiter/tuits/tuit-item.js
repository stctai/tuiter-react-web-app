import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitStats = (tuit) => {
    return(
        <div className="d-flex justify-content-between mt-2 mx-4">
            <a href="#" className="wd-link fs-6 w-25">
                <i className="bi bi-chat pe-3"></i>
                <span>{tuit.replies}</span></a>
            <a href="#" className="wd-link fs-6 w-25">
                <i className="bi bi-arrow-repeat pe-3"></i>
                <span>{tuit.retuits}</span></a>
            <a href="#" className="wd-link fs-6 w-25">
                <i className="bi bi-heart pe-3"></i>
                <span>{tuit.likes}</span></a>
            <a href="#" className="wd-link fs-6 w-25">
                <i className="bi bi-upload pe-3"></i></a>
        </div>
    );
}

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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