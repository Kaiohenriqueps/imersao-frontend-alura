// import css
import './App.css';

// component imports
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/HeaderComponent';

function App() {

  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
