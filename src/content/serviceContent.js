import React from 'react';

export default function ServiceContent(props) {
    return (
        <a className="cat-item rounded p-4" href="">
                        <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>

      <img src={props.img} alt="img" />
        <h6 className="mb-0" >{props.title}</h6>
    </a>
    );
}
