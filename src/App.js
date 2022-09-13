// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className="container-fluid">
          <a href="/" className="navbar-brand">TextUtils</a>

          <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target='hamburger'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collpase navbar-collapse" id='hamburger'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">About</a>
              </li>
            </ul>

            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
