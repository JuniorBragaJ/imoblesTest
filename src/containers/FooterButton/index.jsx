import './style.css'

function FooterButton() {
    return (
        <div className='footer-button-wrapper'>
            <button className='footer-button'>
                <div className='footer-button-caledar'>
                    <img src="src\images\calendar.svg" alt="calendar" />
                </div>
                <div className='footer-button-content'>
                    <span>Create Your Nanny Share</span>
                    <p>Takes less than 5 minutes</p>
                </div>
            </button>
        </div>
    )
}

export default FooterButton;
