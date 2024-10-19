
// import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(props) {
  
  const changeMode=(bgColor)=>{
    props.setStyles({backgroundColor:bgColor,color:"white"});
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">{props.title}</a> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</a> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>

                </li>
                <li className="nav-item">
                {/* <Link className="nav-link" to="/about">about</a> */}
                <a className="nav-link" href="#">about</a>

                </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className="colors">
              <button className="color" onClick={()=>changeMode("#3b3b3b")} style={{backgroundColor:"#3b3b3b"}}></button>
              <button className="color" onClick={()=>changeMode("#0c0414")} style={{backgroundColor:"#0c0414"}}></button>
              <button className="color" onClick={()=>changeMode("#5ee9da")} style={{backgroundColor:"#5ee9da"}}>
            </button></div>
            <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                  <label className={`form-check-label text-${props.mode=="light"?"dark":"white"}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
