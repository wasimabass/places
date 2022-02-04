import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';


import Header from './Header/Header' 
import HomeBanner from './HomeBanner'
import Categories from './Categories' 
import Footer from './Footer/Footer' 

function App() {

  var catNav = {
    'x z' : 'Food' ,
    'two' : 'Restaurant' ,
    'three' : "play"
  }

  return (
      <>
        <Header/>
        <HomeBanner/>
        <Categories cats = {catNav} />
        <Footer/>
      </>
  );
}

export default App;