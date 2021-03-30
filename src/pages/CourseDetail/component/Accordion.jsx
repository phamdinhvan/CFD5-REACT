import React, { useEffect, useRef } from 'react'
let $ = window.$;

export default function Accordion({  num, title, content, active, handleAnccordion  }) {
  let ref = useRef();
  useEffect(() => {
    if (active) {
      $(ref.current).slideDown(200);
    } else {
      $(ref.current).slideUp(200);
    } 
  }, [active]);

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
        <div className="accordion__title" onClick={handleAnccordion}>
            <div className="date">Ngày {num}</div>
            <h3>{title}</h3>
        </div>
        <div className="content" ref={ref}>
            {content}
        </div>
    </div>
)
}
