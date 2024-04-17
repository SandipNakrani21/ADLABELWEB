import Logo from '../Contents/ALD-02.png'


export default function Header() {
    return (
        <>
        <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      JoGeek
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links pullUpDown">
    <a href="//github.io/jo_geek" target="_blank">Home</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">About Us</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Services</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Clients</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Contact Us</a>
  </div>
</div>
</>
    );
}

