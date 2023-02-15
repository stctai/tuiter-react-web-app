const articlePreview = (post) => {
    return(`
        <div class="wd-dark-gray-border wd-preview">
            <img class="w-100 wd-image-preview" src="${post.image}"/>
            ${post.articleTitle !== '' ? '<br/>' : ''}
            <div class="wd-top-border wd-tuit-container">
                <span class="wd-content">${post.articleTitle}</span></br>
                <span class="wd-subtitle">${post.articleContent}</span></br>
                <span class="wd-subtitle"><i class="fa-solid fa-link"></i> ${post.articleLink}</span>
            </div>
        </div>
    `);
}

const imagePreview = (post) => {
    return(`
        <div class="wd-dark-gray-border wd-preview">
            <img class="w-100 wd-image-preview" src="${post.image}"/>
        </div>
    `);
}

const PostItem = (post) => {
    return(`
        <div class="wd-tuit-container wd-dark-gray-border border-bottom-0 d-flex">
            <div class="wd-float-left">
                <img class="wd-profile-pic me-2" src="${post.avatarIcon}"/>
            </div>
            
            <div class="wd-float-left">
                <i class="fa-solid fa-ellipsis wd-more"></i>
                <span class="wd-title">${post.userName}
                    <i class="fa-solid fa-circle-check"></i></span>
                <span class="wd-subtitle">@${post.handle} · @${post.time}</span>
                <p class="wd-content">${post.content}</p>
                
                ${post.articleTitle !== '' ? articlePreview(post) : imagePreview(post)}
                
                <div class="d-flex justify-content-between mx-4">
                    <a href="#" class="wd-link fs-6 w-25">
                        <i class="fa-regular fa-comment pe-3"></i>
                        <span>${post.comments}</span></a>
                    <a href="#" class="wd-link fs-6 w-25">
                        <i class="fa-solid fa-retweet pe-3"></i>
                        <span>${post.retuits}</span></a>
                    <a href="#" class="wd-link fs-6 w-25">
                        <i class="fa-regular fa-heart pe-3"></i>
                        <span>${post.likes}</span></a>
                    <a href="#" class="wd-link fs-6 w-25">
                        <i class="fa-solid fa-arrow-up-from-bracket pe-3"></i></a>
                </div>
            </div>
            <div class="wd-float-done"></div>
        </div>
    `);
}
export default PostItem;