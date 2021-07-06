import Button from './Button'

const DesignProject = ({ img, name, description, onShow, showProj }) => {
    return (
        <div className="a_design_project">
            <div>
                <img className="project_logo" alt="project-logo" src={img}/>
            </div>
            <div className="design_project_text">
                <h4 className="design_project_name">{name}</h4>
                <p className="design_project_desc">{description}</p>
                <Button section="proj_detail_btn" text={showProj ? 'hide details' : 'show details'}
                onClick={onShow}/>
            </div>

        </div>
    )
}

export default DesignProject
