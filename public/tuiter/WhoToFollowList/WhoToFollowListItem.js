const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row wd-align-center">
                <div class="col-2">
                    <img class="wd-profile-pic float-start" src="../../images/${who.avatarIcon}"/>
                </div>
                <div class="col-8">
                    <span class="fw-bold">${who.userName}
                        <i class="fa-solid fa-circle-check"></i></br>
                        @${who.handle}</span>
                </div>
                <div class="col-2">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;