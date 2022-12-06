interface Props {
    title: string,
    img: any,
    para1: string,
    para2: string,
    para3 : string,
    liveLink: string,
    gitLink: string,
}

const Project = (props: Props) => {

    const { title, img, para1, para2, para3, liveLink, gitLink } = props;

    return (
        <div className="projects">
            <div className='project-title'>{title}</div>
            <img className="project-img" src={require('../img/'+img)}></img>
            <div className="project-desc">
                <p className="para1">{para1}</p>
                <p className="para2">{para2}</p>
                <p className="para3">{para3}</p>
                <div className="project-btn"><a href={liveLink}>Live App</a></div>
                <div className="project-btn"><a href={gitLink}>GitHub Repo</a></div>
            </div>
        </div>
    );
}

export default Project;
