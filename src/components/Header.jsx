import { useState } from 'react';
import '../index.css'
import Login from './Login';

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header>
      <div className='top-nav-container'>

        <div className='nav nav-left'>
          <i className='fa fa-search' aria-hidden='true'></i>
          <input type="text" placeholder='Search...' />
          {/* start to prepopulate items possibly  */}
        </div>

        <div className='nav nav-center'>
          <h1 className='site-title'>sun rise.</h1>
        </div>

        <div className='nav nav-right'>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          <button onClick={openModal}>Log In</button>
          {isModalOpen && <Login closeModal={() => setIsModalOpen(false)} />}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <h2>(0)</h2>
        </div>

      </div>
      <div className='bottom-nav-container'>
        <ul>
          <a href="#">Shop All</a>
          <a href="#">Best Selling</a>
          <a href="#">Sale</a>
          <a href="#">Contact</a>
        </ul>

      </div>
    </header>
  );
};

export default Header;


// Home, Products, Cart, Login
// maybe add a drop down to include 'signup', 'singup', 'logout'
// the cart count will later increase as items are added to the cart