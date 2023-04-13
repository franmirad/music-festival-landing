import { BsSpotify } from 'react-icons/bs';

function Info() {

const info=[
  {
    image: 'tickets.jpg',
    title: 'Tickets',
    id: 1,
  },
  {
    image: 'food.gif',
    title: 'Food & Drinks',
    id: 2,
  },
  {
    image: 'activities.jpg',
    title: 'Activities',
    id: 3,
  },
  {
    image: 'location.jpg',
    title: 'Location',
    id: 4,
  },
  {
    image: 'playlist.gif',
    title: 'Playlist',
    icon: <BsSpotify size={25}/>,
    id: 5,
  },
  {
    image: 'security.jpg',
    title: 'Security',
    id: 6,
  },
]

const Info = info.map(
  (data) => {
      return (
        <div className='info-card' key={data.id}>
          <img src={`/images/${data.image}`}></img>
          <div className="info-title">
          <h2>
            {data.title}
            {data.icon}
          </h2>
          </div>
      </div>
      )
  }
)
  return (
    <div>
      <section className="info" id="info">
        <div className="info-header">
          <h2>
            everything you need to know
          </h2>
        </div>
        <div className="info-grid">
        {Info}
        </div>
      </section>
    </div>
  )
}

export default Info