const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item wd-tuit-container">
            <img class="wd-img float-end" src="${post.image}"/>
            <span class="wd-subtitle">${post.topic}</span>
            ${post.topic !== '' ? '<br/>' : ''}
            <span class="wd-title">${post.userName}
            ${post.userName !== '' ? '<i class="fa-solid fa-circle-check"></i>' : ''}</span>
            <span class="wd-subtitle"> - ${post.time}</span>
            ${post.time !== '' ? '<br/>' : ''}
            <span class="wd-title">${post.title}</span>
        </li>
    `);
}
export default PostSummaryItem;