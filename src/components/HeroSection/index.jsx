import './style.css'

function HeroSection() {
    return (
        <div className='HeroSection-wrapper'>
            <div className='HeroSection'>
                <div className='content'>
                    <h2>Share your home, nanny and costs</h2>
                    <p>You have a fantastic home, a fantastic nanny and wouldn't cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a>Hapu means tribe</a> and it's our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
                    <a href="/">Ready to get started?</a>
                </div>
                <img src="src\images\notebook.svg" alt="notebook" />
            </div>
        </div>
    )
}

export default HeroSection;