import Button from './Button'

const Navbar = () => {
    return (
        <div className="navbar">
            <Button text="about" section="navbar-btn" 
            onClick={ () => window.location.replace("#about")} />
            <Button text="projects" section="navbar-btn" 
            onClick={ () => window.location.replace("/#projects")} />
            <Button text="artwork" section="navbar-btn" 
            onClick={ () => window.location.replace("/#artwork")}/>
        </div>
    )
}

export default Navbar