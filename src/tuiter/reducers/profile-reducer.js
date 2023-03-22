import { createSlice } from "@reduxjs/toolkit";

let initialProfile =
    {
        name: 'Sabrina Tai', firstName: 'Sabrina', lastName: 'Tai', handle: '@sabrinatai',
        profilePicture: 'Sabrina.jpeg', 	bannerPicture: 'banner.jpg',
        bio: 'Student, Software Engineer, Web Developer, and Boba Enthusiast.',
        website: 'linkedin.com/sabrinatai',
        location: 'Santa Clara, CA',	dateOfBirth: 'July 31, 1998',	dateJoined: 'November, 2012',
        followingCount: 287,	followersCount: 223,     tuitsCount: 251,
    }

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            const profile = state
            profile.name = action.payload.name
            profile.firstName = profile.name.split(' ')[0]
            profile.lastName = profile.name.split(' ')[1]
            profile.bio = action.payload.bio
            profile.location = action.payload.location
            profile.website = action.payload.website
            profile.dateOfBirth = action.payload.bday
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;