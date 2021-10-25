import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import AddProducts from "./components/AddProducts/AddProducts";
import ManageProducts from "./components/ManageProducts/ManageProducts";

import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>
            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>
            <Route path="/products/addproducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/products/manageproducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/products/updateproduct/:id">
              <UpdateProduct></UpdateProduct>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
