import React, {useState} from "react";
import {createTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
    }

    return (
        <div className="wd-tuit-container border-top border-start border-end d-flex">
            <img className="wd-float-left wd-profile-pic me-3" src="/images/Sabrina.jpeg"/>

            <div className="wd-float-left  w-100">
                <textarea value={whatsHappening} placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <hr/>
                <div>
                    <button className="wd-float-right rounded-pill btn btn-primary fw-bold wd-new-tuit-button"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="wd-color-tuit fs-5">
                        <i className="bi bi-image ms-3"></i>
                        <i className="bi bi-filetype-gif ms-3"></i>
                        <i className="bi bi-bar-chart ms-3"></i>
                        <i className="bi bi-emoji-smile ms-3"></i>
                        <i className="bi bi-geo-alt ms-3"></i>
                    </div>
                </div>
            </div>

            <div className="wd-float-done"></div>
        </div>
    );
}

export default WhatsHappening;