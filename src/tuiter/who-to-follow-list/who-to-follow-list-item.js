import React from "react";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row wd-align-center">
                <div className="col-2">
                    <img className="wd-profile-pic float-start" src={`../../images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8">
                    <span className="wd-title">{who.userName}
                        <i className="ps-1 bi bi-check-circle-fill wd-color-tuit"></i></span><br/>
                    <span className="wd-subtitle">@{who.handle}</span>
                </div>
                <div className="col-2">
                    <button className="wd-follow-button float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;