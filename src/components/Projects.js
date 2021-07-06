import Button from "./Button"
import Project from "./Project"
import mail from "/home/haskirisp/Desktop/portfolio/src/img/mail.png"
import airlinedb from "/home/haskirisp/Desktop/portfolio/src/img/airlinedb.png"
import argame from "/home/haskirisp/Desktop/portfolio/src/img/argame.png"
import numrec from "/home/haskirisp/Desktop/portfolio/src/img/numrec.png"
import personal_website from "/home/haskirisp/Desktop/portfolio/src/img/personal_website.png"
import commerce from "/home/haskirisp/Desktop/portfolio/src/img/commerce.png"


const Projects = () => {
    return (
        <div className="projectsContainer">
            <div className="a_project">
                <Project 
                img={personal_website}
                name="Personal Website" 
                p1="A portfolio website where I give more detail about myself and my work."
                p2="This was the first project I did using React.js and the main goal was to understand the basics of it alongside building a personal website for myself."
                tools="HTML, CSS, React.js" />
            </div>


            <div className="a_project">
                <Project 
                img={mail}
                name="Mail Service" 
                p1="A front-end website for an email client that makes API calls to send and receive emails."
                p2="I did this project to practice JSON and Javascript alongside Django."
                tools="HTML, CSS, JavaScript, JSON, Django" />
                <Button text='github repository' section="github_btn" onClick={ () => window.open('https://github.com/pinarhaskiris/mail-proj')} />
            </div>

            <div className="a_project">
                <Project 
                img={commerce}
                name="Commerce" 
                p1="This is an eBay-like e-commerce auction site that allows users to post auction listings, place bids and comment on them as well as add them to a 'watchlist'."
                p2="I did this project to practice using Django models, migrations and user authentication."
                tools="HTML, CSS, Django" />
                <Button text='github repository' section="github_btn" onClick={ () => window.open('https://github.com/pinarhaskiris/commerce-proj')} />
            </div>

            <div className="a_project">
                <Project 
                img={airlinedb}
                name="Airline DB" 
                p1="An airline database where customers can book or refund tickets."
                p2="This was a team project and I was responsible for writing the SQL statements, helping the implementation of the user interface and contributing to the design of the database."
                tools="MySQL, Visual Studio, Windows Forms, C#"/>
                <Button text='github repository' section="github_btn" onClick={ () => window.open('https://github.com/AhsenAmil/AirlineDatabaseProject')} />
            </div>

            <div className="a_project">
                <Project name="Number Recognizer" 
                img={numrec}
                p1="This program takes an image as input and draws red rectangles aroud the numbers it recognizes. Also, on top of the rectangle, it writes the recognized number."
                tools="Python, NumPy and Pil libraries"/>
                <Button text='github repository' section="github_btn" onClick={ () => window.open('https://github.com/pinarhaskiris/Programming-Studio-Project')} />
            </div>
            
            <div className="a_project">
                <Project 
                img={argame}
                name="Fight Like A Snowman" 
                p1="A sinle-player, augmented reality fight game."
                p2="This was a team project but everyone continued where the other one left off. Therefore, we all participated in every part of the project."
                tools="Unity, Vuforia, C#" />
            </div>
        </div>
    )
}

export default Projects
