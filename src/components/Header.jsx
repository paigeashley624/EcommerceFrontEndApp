import '../index.css'

const Header = () => {
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
          {/* maybe add a drop down to include 'signup', 'singup', 'logout' */}
          {/* <h2> Sign In</h2> */}
          <a href='/login'>Sign In</a>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <h2>(0)</h2>
          {/* the count here will later increase when items are added to the cart   */}
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