import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <body className="App-body">
        <h1>MAKE AN IMPACT, ANYWHERE</h1>
        <form>
          <input type="text" id="fname" name="fname" class="search" placeholder="Where would you like to make a difference?"></input>
        </form>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
