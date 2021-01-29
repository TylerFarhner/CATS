import aboutPhoto from '../images/aboutPhoto.JPG'

export default function AboutPage(props) {
    return (
        <main className="AboutPage">
            <h1>Alix Boyle</h1>
            <div>
                <img className="profileImage" src={ aboutPhoto } alt="whoops" />
                
            </div>
            <div>
                <p className="aboutText">
                    Bellevue-native bringing high-end attention to detail and cleanliness to your home.
                </p>
            </div>
        </main>
    )
}