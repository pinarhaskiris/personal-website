import Button from "./Button"
import Project from "./Project"
import mail from "../img/mail.png"
import airlinedb from "../img/airlinedb.png"
import argame from "../img/argame.png"
import numrec from "../img/numrec.png"
import personal_website from "../img/personal_website.png"
import commerce from "../img/commerce.png"


const Projects = () => {
    return (
        <div className="projectsContainer">
            <div className="a_project">
                <Project 
                img={personal_website}
                name="Personal Website" 
                p1="A portfolio website where I give more detail about myself and my work."
                p2="This was the first project I did using React.js and the main goal was to understand the basics of it alongside building a personal website for myself."
                tools="HTML, CSS, React.js, Adobe XD" />
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
                p1="A website for an airline where: clients can book, refund, question tickets and flight schedulers can add/delete flights."
                p2="This was a team project and I was responsible for the implementation of the website alongside few diagrams for the report."
                p3="This project is an improved version of another one. Previous version was implemented as a desktop application with less functionality to practice relational databases. Contrast to the previous one, this project was made to learn common software development practices."
                tools="HTML, CSS, Django (web)"
                tools2="MySQL, Visual Studio, Windows Forms, C# (desktop)"/>
                <Button text='github repository (web)' section="github_btn" onClick={ () => window.open('https://github.com/pinarhaskiris/blue-airline')} />
                <Button text='report (web)' section="github_btn" onClick= { () => window.open('https://docs.google.com/document/d/11OZekBdJDJDN9xlHz8z3BdV19d4XKayP7zUkguJ4vBw/')} />
                <Button text='github repository (desktop)' section="github_btn" onClick={ () => window.open('https://github.com/AhsenAmil/AirlineDatabaseProject')} />
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
                p1="A single-player, augmented reality fight game."
                p2="This was a team project but everyone continued where the other one left off. Therefore, we all participated in every part of it."
                p3="It was made to see how capable we are of creating a game with no prior knowledge about how to make it. (Took us 3 weeks.)"
                tools="Unity, Vuforia, C#" />
            </div>
        </div>
    )
}

export default Projects
