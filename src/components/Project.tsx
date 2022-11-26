interface Props {
    title: string,
    para1: string,
    para2: string,
    para3 : string,
    liveLink: string,
    gitLink: string,
}

const Project = (props: Props) => {

    const { title, para1, para2, para3, liveLink, gitLink } = props;

    return (
        <div className="projects">
            <div className='project-title'>{title}</div>
            <div className="project-imgs"></div>
            <div className="project-desc">
                <p className="para1">{para1}</p>
                <p className="para2">{para2}</p>
                <p className="para3">{para3}</p>
                <div className="project-btn">Live App</div>
                <div className="project-btn">GitHub Repo</div>
            </div>
        </div>
    );
}

export default Project;
