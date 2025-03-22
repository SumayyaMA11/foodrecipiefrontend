import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" 
      style={{position:"sticky", top: "0", zIndex: "100"}}
      >
        <div className="container-fluid">
          
          {/* Logo and Brand Name */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img 
              src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" 
              alt="Logo" 
              width="40" 
              height="40" 
              className="d-inline-block align-top me-2"
            />
            Recipe <br/>Box
          </a>

          {/* Navbar Toggler for Mobile View */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
            <li className="nav-item active">

                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Your Recipe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Favourites</a>
              </li>
            </ul>

            {/* Search Form
            <form className="d-flex my-2 my-lg-0">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success me-2" type="submit">Search</button>
            </form> */}

            {/* Login and Register Buttons */}
            <div className="d-flex">
              <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};
