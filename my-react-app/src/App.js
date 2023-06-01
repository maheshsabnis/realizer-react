import logo from './logo.svg';
import './App.css';
import SecondChildComponent from './secondchildcomponent';
import Headers from './components/demand/heades';
import Login from './components/demand/login';
import Footer from './components/demand/footer';

// using props the properties from
// parent can be accessed in child component
function App(props) {
  // define a local variable
  const info = "I am from your parent";
  return (
    <div className="container">
       {/* <h3>The First Component</h3>
       <span>
          <strong>
             Data REceived from Parent {props.actorname}
          </strong>
        </span> 
        <br/>
        <FirstChildComponent message={'Hello!!!First Child Component'}></FirstChildComponent>
        <br/>
        <SecondChildComponent information={info}></SecondChildComponent> */}

        <table className='table table-bordered'>
           <thead>
            <Headers></Headers>
           </thead>
           <tbody>
            <Login></Login>
           </tbody>
           <tfoot>
            <Footer></Footer>
           </tfoot>
        </table>


    </div>
  );
}



function FirstChildComponent(props){
  return(
    <div className='container'>
      <h3>I am the FIrst Child Component</h3>
      <strong>{
        props.message
      }</strong>
    </div>
  );
}
// Export the App function as JavaScript Module
// SO that it can be imported
export default App;
