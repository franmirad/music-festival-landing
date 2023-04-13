import React from 'react'

function Artists() {

  const artists=[
    {
      image: 'peter.jpg',
      title: 'Peter Frampton',
      id: 1,
    },
    {
      image: 'smashing.jpg',
      title: 'The Smashing Pumpkins',
      id: 2,
    },
    {
      image: 'cypress.jpg',
      title: 'Cypress Hill',
      id: 3,
    },
    {
      image: 'youth.jpg',
      title: 'Sonic Youth',
      id: 4,
    },
  ]

  const Artists = artists.map(
    (data) => {
        return (
          <div className="artist" key={data.id}>
          <img src={`/images/${data.image}`}></img>
          <div className='artist-name'>
          <h2>
            {data.title}
          </h2>
        </div>
        </div>
          )
        }
        )


  return (
    <div>
      <div className="artist-grid">
        {Artists}
      </div>
    </div>
  )
}

export default Artists