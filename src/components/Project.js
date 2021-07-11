
const Project = ({ img, name, p1, p2, p3, tools, tools2 }) => {
    return (
        <div>
            <center>
                <img className="project_image" alt="project_image" src={img}/>
            </center>
            <h3 className="project_name">{name}</h3>
            <p className="project_p1">{p1}</p>
            <p className="project_p2">{p2}</p>
            <p className="project_p3">{p3}</p>
            <div className="tools">
                <p className="project_tools">{tools}</p>
                <p className="project_tools">{tools2}</p>
            </div>
        </div>
    )
}

export default Project
