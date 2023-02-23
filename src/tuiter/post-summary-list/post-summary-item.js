import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    {post.topic && <div className="wd-subtitle">{post.topic}</div>}
                    {post.userName &&
                        <span className="wd-title">{post.userName}
                        <i className="ps-1 bi bi-check-circle-fill"></i></span>}
                    {post.time && <span className="wd-subtitle"> - {post.time}</span>}
                    <div className="wd-title">{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;