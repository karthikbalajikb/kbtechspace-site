import React, { useEffect } from 'react'

import './ribbon.scss'
import '../../styles/animation.scss'

const Ribbon = props => {
  const id = props.title.replace(/\s+/g, '')
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.getElementById(`${entry.target.id}`).classList.add('expand');
        }
        if(!entry.isIntersecting) {
            document.getElementById(`${entry.target.id}`).classList.remove('expand');
        }
      });
  }, options)

  useEffect(() => {
    let target = document.getElementById(id);
    console.log('load >>', id, target);
    observer.observe(target);

    return () => {
        observer.unobserve(target);
    }
  },[]);

  return (
    <h3 className="kbts-ribbon-header">
      <i id={id} className="kbts-ribbon-header-text animated">
        {props.title}
      </i>
    </h3>
  )
}

export default Ribbon
