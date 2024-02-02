import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import Content from './components/Content';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  )
};

export default App;


// import { Sidebar } from "./Sidebar";
// import { Content } from "./Content";
// import { Footer } from "./Footer";
// import { BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Sidebar />
//       <Content />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;