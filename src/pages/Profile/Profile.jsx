import './Profile.css'
export default function Profile() {
    const loggedIn = localStorage.getItem('username');
    if(!loggedIn){
        return (
            <div className="profileContent">
            <div className="profile-group">
                <h1>We are sorry, you have to connect first, Press Login!</h1>
            </div>
        </div>
        )
    }
    return (
        <div className="profileContent">
            <div className="profile-group">
                <img src='../../assets/random.jpg'/>
            </div>
            <div className="profile-group">
                <h1>{localStorage.getItem('username')}</h1>
                <textarea readOnly>Just some bio</textarea>
                <h3>Best score Quiz {localStorage.getItem('quizPercentage')}%</h3>
            </div>
        </div>
    )
}