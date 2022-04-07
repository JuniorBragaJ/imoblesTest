import './style.css'

function HeaderContent() {
    return (
        <>
            <div className="HeaderContent-wrapper">
                <div className='HeaderContent'>
                    <h1>Easily create or join a local nanny share with Hapu</h1>
                    <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                    <div className='HeaderAction'>
                        <div className='HeaderActionPlay'>
                            <img src='src\images\headerPlayButton.svg' alt="Play" />
                        </div>
                        <a href="/">See hapu in action (27 seconds)</a>
                    </div>
                </div>

                <div className='HeaderPhoto'>
                    <img src="src\images\headerPhoto.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default HeaderContent;