import React from 'react';

import './ribbon.scss';

const Ribbon = (props) => (
    <h3 className="kbts-ribbon-header"><i className="kbts-ribbon-header-text">{props.title}</i></h3>
)

export default Ribbon