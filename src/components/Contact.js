import { BsInstagram, BsFacebook, BsYoutube, BsSpotify, BsTwitter } from 'react-icons/bs';

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <h1>
          Don't miss a thing. Subscribe to our newsletter to stay informed!
        </h1>
        <div className="contact-newsletter">
          <input className="contact-input" placeholder="Email Adress"></input>
          <button  data-component="green-button">
              Subscribe
          </button>
        </div>

        <div className='contact-social'>
        <h1>
          Follow us!
        </h1>
          <ul>
            <a>
            <BsInstagram size={25}/>
            </a>
            <a>
            <BsFacebook size={25}/>
            </a>
            <a>
            <BsYoutube size={25}/>
            </a>
            <a>
            <BsSpotify size={25}/>
            </a>
            <a>
            <BsTwitter size={25}/>
            </a>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contact