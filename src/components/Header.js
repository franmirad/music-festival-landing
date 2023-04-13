
function Header() {

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  const openNav = () => {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.right = '0px';
    document.body.style.overflow = "hidden";
    overlay.style.display = "block"

  };

  const closeNav = () => {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.right = '-280px';
    document.body.style.overflow = "auto";
    overlay.style.display = "none";
  };

  return (
    <div className="header">
        <ul className="header-desktop">
        <li>
          <a href="#tickets">
            Tickets
          </a>
        </li>
        <li>
          <a href="#lineup">
            Lineup
          </a>
        </li>
        <li>
          <a className="header-logo"  href="#hero">
          <img src="/images/logo-no-background.png"/>
          </a>
        </li>
        <li>
          <a href="#info">
            Info
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
        </ul>
        <div className="mobile-nav">
      <a className="open-nav hidden">
      <img src="/images/icon-hamburger.svg" alt=""></img>
    </a>
      <a className="mobile-logo" href="#hero">
          <img src="/images/logo-no-background.png"/>
          </a>
      <a className="open-nav" onClick={openNav}>
      <img src="/images/icon-hamburger.svg" alt=""></img>
    </a>
        </div>
        <div className="sidenav" id="sidenav">
        <a className="close-button"  onClick={closeNav}>
          <img src="/images/icon-close.svg" alt=""></img>
        </a>
          <ul>
        <li>
          <a href="#tickets">
            Tickets
          </a>
        </li>
        <li>
          <a href="#lineup">
            Lineup
          </a>
        </li>
        <li>
          <a href="#info">
            Info
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
        </ul>
        </div>
        <div className="overlay" id="overlay" onClick={closeNav}>
        </div>
    </div>
  )
}

export default Header