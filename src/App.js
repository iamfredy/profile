import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
  <div>
     <div className="card">
      <h2>Fred</h2>
      <Todo name="primary"/>
      <div className="row">
        <Todo name="success" className="col-md-6"/>
        <Todo name="danger" className="col-md-6"/>
      </div>
    </div>
  </div>
);
}
export default App;
