import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <div className="pt-2 ps-3">
            <ul className="wd-gray-card list-group">
                <li className="list-group-item">
                    <span className="fs-5 fw-bold">Who to follow</span>
                </li>
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who}/>
                    )
                }
                <li className="list-group-item">
                    <a className="wd-blue-link" href="#">Show More</a>
                </li>
            </ul>
            <div className="border-top flex-wrap mt-3 pt-3 ps-3 pe-3">
                <a className="wd-link" href="#">Terms of Service</a>&nbsp;&nbsp;
                <a className="wd-link" href="#">Privacy Policy</a>&nbsp;&nbsp;
                <a className="wd-link" href="#">Cookie Policy</a><br/>
                <a className="wd-link" href="#">Accessibility</a>&nbsp;&nbsp;
                <a className="wd-link" href="#">Ads Info</a>&nbsp;&nbsp;
                <a className="wd-link" href="#">More <i className="bi bi-three-dots"></i></a><br/>
                <span className="wd-subtitle">© 2023 Tuiter, Inc.</span>
            </div>
        </div>
    );
};

export default WhoToFollowList;