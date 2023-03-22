import React from "react";

const articlePreview = (post) => {
    return(
        <div className="border wd-preview">
            <img className="w-100 wd-article-image-preview" src={post.image}/>
            <div className="wd-top-border wd-tuit-container">
                <span className="wd-content">{post.articleTitle}</span><br/>
                <span className="wd-subtitle">{post.articleContent}</span><br/>
                <span className="wd-subtitle"><i className="bi bi-link-45deg"></i> {post.articleLink}</span>
            </div>
        </div>
    );
}

const imagePreview = (post) => {
    return(
        <div className="border wd-preview">
            <img className="w-100 wd-image-preview" src={post.image}/>
        </div>
    );
}

const PostItem = ({post}) => {
    return(
        <div className="wd-tuit-container border-top border-start border-end d-flex">
            <div className="wd-float-left">
                <img className="wd-profile-pic me-2" src={post.avatarIcon}/>
            </div>

            <div className="wd-float-left">
                <i className="bi bi-three-dots wd-more"></i>
                <span className="wd-title">{post.userName}
                    <i className="fa-solid fa-circle-check"></i></span>
                <span className="wd-subtitle">@{post.handle} · {post.time}</span>
                <p className="wd-content">{post.content}</p>

                {post.articleTitle !== '' ? articlePreview(post) : imagePreview(post)}

                <div className="d-flex justify-content-between mx-4">
                    <a href="#" className="wd-link fs-6 w-25">
                        <i className="bi bi-chat pe-3"></i>
                        <span>{post.comments}</span></a>
                    <a href="#" className="wd-link fs-6 w-25">
                        <i className="bi bi-arrow-repeat pe-3"></i>
                        <span>{post.retuits}</span></a>
                    <a href="#" className="wd-link fs-6 w-25">
                        <i className="bi bi-heart pe-3"></i>
                        <span>{post.likes}</span></a>
                    <a href="#" className="wd-link fs-6 w-25">
                        <i className="bi bi-upload pe-3"></i></a>
                </div>
            </div>
            <div className="wd-float-done"></div>
        </div>
    );
};

export default PostItem;