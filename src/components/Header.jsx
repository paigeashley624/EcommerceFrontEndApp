import '../index.css'

const Header = () => {
  return (
    <header>
      <div className='top-nav-container'>

        <div className='nav nav-left'>
          <i className='fa fa-search' aria-hidden='true'></i>
          <input type="text" placeholder='Search...' />
        </div>

        <div className='nav nav-center'>
          <h1 className='site-title'>sun rise.</h1>
        </div>

        <div className='nav nav-right'>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          <h2>Sign In</h2>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>

      </div>
      <div className='bottom-nav-container'>
        <ul>
          <li>Shop All</li>
          <li>Best Selling</li>
          <li>Sale</li>
          <li>Contact</li>
        </ul>

      </div>
    </header>
  );
};

export default Header;


// Home, Products, Cart, Login