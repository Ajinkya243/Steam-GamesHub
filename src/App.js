
import './App.css';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
function App({cartQuantity,wishlistCount}) {
  return (
    <>
    <Nav cartQuantity={cartQuantity} wishlistCount={wishlistCount}/>
    <Main/>
    </>
  );
}

export default App;
