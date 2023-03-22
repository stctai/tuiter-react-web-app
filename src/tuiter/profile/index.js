import React from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const ProfileComponent = () => {
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profile);

    return (
        <div className="border-start border-end">
            <div>
                <i onClick={() => navigate(-1)} className="wd-float-left bi bi-arrow-left-short ms-2 fs-3 wd-fg-black"></i>

                <div className="ms-4 wd-float-left">
                    <span className="fs-5 fw-bold">{profile.name}</span><br/>
                    <span className="wd-subtitle">{profile.tuitsCount} Tuits</span>
                </div>

                <div className="wd-float-done"></div>
            </div>

            <div>
                <img className="w-100" src={`/images/${profile.bannerPicture}`}/>
                <div className="wd-tuit-container">
                    <div className="wd-profile-box">
                        <Link to="/tuiter/edit-profile">
                            <button className="wd-float-right rounded-pill btn fw-bold wd-edit-profile-button">
                                Edit Profile
                            </button>
                        </Link>
                        <img className="wd-float-left wd-profile-pic-big me-3" src={`/images/${profile.profilePicture}`}/>
                    </div>
                    <div>
                        <span className="fs-5 fw-bolder">{profile.name}</span><br/>
                        <span className="wd-subtitle">{profile.handle}</span>
                    </div>
                    <p>
                        {profile.bio}
                    </p>
                    <p className="wd-subtitle fs-6">
                        <i className="bi bi-balloon px-1 wd-bold-icon"></i>
                        Born {profile.dateOfBirth}
                        <i className="bi bi-calendar4-week mx-1 px-1 wd-bold-icon"></i>
                        Joined {profile.dateJoined}
                    </p>
                    <p>
                        <span className="fs-6 fw-bold">{profile.followingCount} </span>
                        <span className="wd-subtitle">Following </span>
                        <span className="fs-6 fw-bold">{profile.followersCount} </span>
                        <span className="wd-subtitle">Followers</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;