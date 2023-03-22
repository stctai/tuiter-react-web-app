import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profile);
    let [newProfile, setNewProfile] = useState({name: profile.name, bio: profile.bio, location: profile.location, website: profile.website, bday: profile.bday});
    const dispatch = useDispatch();
    const saveChangesHandler = () => {
        dispatch(updateProfile(newProfile));
        navigate("../profile");
    }
    const nameChangeHandler = (event) => {
        newProfile.name = event.target.value;
        setNewProfile(newProfile);
    }
    const bioChangeHandler = (event) => {
        newProfile.bio = event.target.value;
        setNewProfile(newProfile);
    }
    const locationChangeHandler = (event) => {
        newProfile.location = event.target.value;
        setNewProfile(newProfile);
    }
    const websiteChangeHandler = (event) => {
        newProfile.website = event.target.value;
        setNewProfile(newProfile);
    }
    const dobChangeHandler = (event) => {
        newProfile.bday = event.target.value;
        setNewProfile(newProfile);
    }

    return (
        <div className="border-start border-end">
            <div>
                <i onClick={() => navigate(-1)} className="wd-float-left bi bi-x ms-2 fs-3 wd-fg-black"></i>

                <div className="ms-4 mt-1 wd-float-left">
                    <span className="fs-5 fw-bold">Edit Profile</span>
                </div>

                <button type="submit"
                        className="wd-float-right rounded-pill btn fw-bold wd-follow-button me-2"
                        onClick={(e) => {
                            e.preventDefault()
                            saveChangesHandler(profile)
                        }}>
                    Save
                </button>

                <div className="wd-float-done"></div>
            </div>

            <div>
                <img className="w-100" src={`/images/${profile.bannerPicture}`}/>
                <div className="wd-tuit-container">
                    <div className="wd-profile-box">
                        <img className="wd-float-left wd-profile-pic-big me-3" src={`/images/${profile.profilePicture}`}/>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" defaultValue={profile.name}
                               onChange={nameChangeHandler}></input>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control text-break" rows="3" id="bio"
                                  style={{"height": "100px"}} defaultValue={newProfile.bio}
                                  onChange={bioChangeHandler}></textarea>
                        <label htmlFor="bio">Bio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="location" defaultValue={profile.location}
                               onChange={locationChangeHandler}></input>
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="website" defaultValue={profile.website}
                               onChange={websiteChangeHandler}></input>
                        <label htmlFor="website">Website</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="birthDate" defaultValue={profile.dateOfBirth}
                               onChange={dobChangeHandler}></input>
                        <label htmlFor="Birth date">Birth date</label>
                    </div>
                    <a href="#" className="wd-link fs-6">Switch to Professional
                        <i className="float-end bi bi-chevron-compact-right"></i></a>
                </div>
            </div>
        </div>
    );
};

export default EditProfileComponent;