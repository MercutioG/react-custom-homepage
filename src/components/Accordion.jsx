import React from 'react'

const Accordion = () => {
  return (
    <section className="accordion-container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              &#9654; Ice Cream Song
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <iframe title='Ice Cream Song Spotify' src="https://open.spotify.com/embed/track/2wCLmJ4EWsfTXGqYpPyJmx?utm_source=generator&theme=0" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            &#9654; All My Fellas
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <iframe title='All My Fellas Spotify' src="https://open.spotify.com/embed/track/1ckhUtD8nBH2ShPlU8w2nU?utm_source=generator&theme=0" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accordion