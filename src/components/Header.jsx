import '../index.css'

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl font-bold">Your E-Commerce Site</h1>
      <nav className="mt-2">
        <ul className="flex">
          <li className="mr-4 text-white">Home</li>
          <li className="mr-4 text-white">Products</li>
          <li className="mr-4 text-white">Cart</li>
          <li className="text-white">Login</li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;