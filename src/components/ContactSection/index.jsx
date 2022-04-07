import './style.css'

function ContactSection() {
    return (
        <div className="ContactSection-wrapper">
            <div className="ContactSection">
                <h3>Are you a parent without a nanny and looking to share?</h3>
                <p>Leave us your name and email and we'll update you as soon as a share becomes available in your area!</p>
            </div>
            <form action="POST" className='ContactSection-form'>
                <input type="text" placeholder='Your Name' minLength={2} maxLength={175}/>
                <input type="email" placeholder='Your E-mail' minLength={5} maxLength={250}/>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ContactSection;