import { useEffect, useState } from "react"
import getYtCourses from "../../api/youtubeAPI";
import './Courses.css'

export default function Courses() {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErorr] = useState('');
    
    useEffect(() =>{
        const fetchPlaylist = async () => {
            try{
                const response = await getYtCourses();
                if(!response.ok) throw new Error('not found');
                const data = await response.json();
                setPlaylists(data.items);
                setLoading(false);
            }catch(error){
                setErorr(error);
                setLoading(false);
            }
        }
        
        fetchPlaylist();
        console.log(playlists);
    },[])
    function truncateTitle(title) {
        return title.length > 50 ? title.slice(0,50) + '...' : title;
    }
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error.message}</h1>
    return (
        <>
        <h1>Courses</h1>
        <div className="videos-container">
        {playlists.map(playlist => (
            <a href={`https://www.youtube.com/watch?v=${playlist.id.videoId}`} target="_blank">
                <div key={playlist.id} className="video-card">
                    <h2>{truncateTitle(playlist.snippet.title)}</h2>
                <img src={playlist.snippet.thumbnails.default.url} alt={playlist.snippet.title} />
                </div>
            </a>
        ))}
    </div>
    </>
    )
}