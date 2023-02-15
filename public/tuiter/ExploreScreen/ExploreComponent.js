import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="wd-dark-gray-border border-top-0 border-bottom-0">
            <div class="d-flex mb-3">
                <i class="fa fa-search wd-magnifier"></i>
                <input class="form-control wd-search-bar border-0" placeholder="Search Tuiter" />
                <a class="wd-gear" href="explore-settings.html"><i class="fa fa-cog"></i></a>
            </div>
            
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
            <div class="my-1 position-relative">
                <img class="w-100" src="../../images/banner.jpg"/>
                <div class="wd-header-text">Tennis Tournament · LIVE</br>
                    <span class="fs-5 fw-bold">Australian Open 2023</span>
                </div>
            </div>
                       
           ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;
