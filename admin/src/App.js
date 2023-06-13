import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/orders"
import Order from "./pages/order/order";
import Mail from "./pages/mail/Mail";
import { useSelector } from "react-redux";

function App() {
   // Retrieve the 'currentUser' and 'isAdmin' values from the Redux store using the 'useSelector' hook
  const admin = useSelector((state) =>
    state.user.currentUser ? state.user.currentUser.isAdmin : null
  );
  return (
    <Router>
      <Switch>
        {admin ? (
          <>
           {/* Render the top bar */}
            <Topbar />
            <div className="container">
               {/* Render the sidebar */}
              <Sidebar />
              <Route exact path="/">
                 {/* Render the Home component */}
                <Home />
              </Route>
              <Route path="/users">
                {/* Render the UserList component */}
                <UserList />
              </Route>
              <Route path="/user/:userId">
                {/* Render the User component */}
                <User />
              </Route>
              <Route path="/products">
                {/* Render the ProductList component */}
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                 {/* Render the Product component */}
                <Product />
              </Route>
              <Route path="/newproduct">
                {/* Render the NewProduct component */}
                <NewProduct />
              </Route>
              <Route path="/orders">
                {/* Render the Orders component */}
                <Orders />
              </Route>
              <Route path="/order/:orderId">
                 {/* Render the Order component */}
                <Order />
              </Route>
              <Route path="/mail">
                  {/* Render the Mail component */}
                <Mail />
              </Route>
            </div>
          </>
        ) : (
            <Login />
        )}
      </Switch>
    </Router>
  );
}

export default App;
