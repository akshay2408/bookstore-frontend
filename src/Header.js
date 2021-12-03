import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    // const state = useSelector(state => state)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to="/" class="nav-link" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/signin" class="nav-link" href="#">Singin</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/create_book" class="nav-link" href="#">create_book</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/favourite" class="nav-link" href="#">your Favourite</Link>
                            </li>
                           
                        </ul>
                      
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
