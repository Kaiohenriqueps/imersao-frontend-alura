import './App.css';
import Header from './components/Header/HeaderComponent';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
