import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
           <li class="list-group-item fw-bold">Who to follow</li>
            ${
                who.map(user => {
                    return WhoToFollowListItem(user);
                }).join('')
            }
       </ul>
       <div class="border-top flex-wrap mt-3 pt-3 ps-3 pe-3">
            <a class="wd-link" href="#">Terms of Service</a>
            <a class="wd-link" href="#">Privacy Policy</a>
            <a class="wd-link" href="#">Cookie Policy</a>
            <a class="wd-link" href="#">Accessibility</a>
            <a class="wd-link" href="#">Ads Info</a>
            <a class="wd-link" href="#">More <i class="fa-solid fa-ellipsis"></i></a></br>
            <span class="wd-subtitle">© 2023 Tuiter, Inc.</span>
        </div>
    `);
}
export default WhoToFollowList;