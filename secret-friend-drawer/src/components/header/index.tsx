import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <div className="image-logo" role="img" aria-label='Drawer Logo'></div>
            <img className='participant' src="/images/participant.png" alt="Participant with a gift in hand" />
        </header>
    )
}

export default Header
