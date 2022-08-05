import { BrowserRouter, Switch, Route } from "react-router-dom";
import classes from "./App.module.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./containers/Layout/Layout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route exact path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
