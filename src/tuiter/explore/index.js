import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
        <div className="border-start border-end">
            <div className="d-flex ms-3 mb-3">
                <i className="bi bi-search wd-magnifier"></i>
                <input className="wd-search-bar border-0" placeholder="Search Tuiter"/>
                <a className="wd-gear" href="explore-settings.html"><i className="bi bi-gear"></i></a>
            </div>

            <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="my-1 position-relative">
                <img className="w-100" src="../../images/banner.jpg"/>
                <div className="wd-header-text">Tennis Tournament · LIVE<br/>
                    <span className="fs-5 fw-bold">Australian Open 2023</span>
                </div>
            </div>
            <PostSummaryList/>
        </div>
);
};

export default ExploreComponent;