import React, { useEffect, useRef } from "react";
let $ = window.$;

export default function Gallery({image}) {

  let listRef = useRef()

  useEffect(() => {
    $(listRef.current).flickity({
      contain: true,
      wrapAround: false,
      freeScroll: true,
      cellAlign: "left",
      lazyLoad: 3,
      imagesLoaded: true,
      prevNextButtons: false,
    });
  }, []);
  return (
    <section className="section-gallery">
      {(()=>{
        console.log(image)
      })()}
      <div className="textbox">
        <h2 className="main-title">Chúng ta là một team</h2>
      </div>
      <div className="list" ref={listRef}>
       {
         image.map((e) =>(<img data-flickity-lazyload={e} alt="" />))
       }
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
}
