import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function ProjectsCard(props) {
  return (
    <div className="row">
      <div className="col-lg-5 col-sm-12">
        <h3>{props.title}</h3>
        <div>
          <p className="mb-4">{props.description}</p>
        </div>
        <h4>Built with:</h4>
        <p className="mb-4">{props.tools}</p>
        <button className="button btn-1 hover-slide-right">
          <a rel="noreferrer" target="_blank" href={props.live}>
            See Live
          </a>
        </button>
        <a
          rel="noreferrer"
          target="_blank"
          className="other"
          href={props.github}
        >
          Source Code
        </a>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6 col-sm-12">
        <a rel="noreferrer" href={props.live} target="_blank">
          <img alt={props.title} className="img-fluid" src={props.image} />
        </a>
      </div>
      <div style={{marginBottom:'2rem'}}></div>
    </div>
  );
}

export default ProjectsCard;
