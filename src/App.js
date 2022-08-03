import classes from "./App.module.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
