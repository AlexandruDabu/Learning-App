const channelId = import.meta.env.VITE_CHANNEL_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const getYtCourses = async () => {
    try{
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
    return response;
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

export default getYtCourses