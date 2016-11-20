import React from 'react';
import { Link } from 'react-router';
import class_names from 'classnames';

export default ({text, link, icon_class, active_route}) =>
<li className = {class_names({active: link === active_route})}>
  <Link to={link}>
    <span className="nav-icon">
      <i className={icon_class}></i>
    </span>
    <span className="nav-text">{text}</span>
  </Link>
</li>;
