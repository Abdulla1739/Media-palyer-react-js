import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";



//add video called by add
export const addVIdeoAPI = async (video)=>{ //only export  bcz in this function multiple thing need to happen
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//