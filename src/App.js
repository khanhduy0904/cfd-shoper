import { Route, Switch } from "react-router-dom";
import './assets/custom.scss'
import { Footer, Header, ModelCart, ModelSearch, ModelSizeChart } from "./components";
import AppProvider from "./core/AppProvider";
import Account from "./page/Account";
import Home from "./page/home";
import ShippingAndReturns from "./page/ShippingAndReturns";
import Auth from "./page/Auth";
import Checkout from "./page/Checkout";
import FAQ from "./page/FAQ";
import Page404 from "./page/Page404";
import ShoppingCart from "./page/ShoppingCart";
import ProductDetail from "./page/ProductDetail";
import ContactUs from "./page/ContactUs";
import About from "./page/About";
import Catalog from "./page/Catalog";
import StoreLocator from "./page/StoreLocator";
import reducers from './redux/reducers'
import PrivateRouter from "./core/PrivateRouter";
import CommingSoon from "./page/CommingSoon";
import WithCountDown from "./hoc/withCountDown";
import { useRef } from "react";
import saga from "./redux/saga";
import OrderCompleted from "./page/OrderCompleted";
import { setTranslate } from "./core/Translate";

setTranslate({
  default: localStorage.getItem("language") || "vi"
})

function App() {

  let sizeChartRef = useRef(); 

  return (
    <AppProvider reducers={reducers} saga={saga}>
      <Header />
      <Switch>
        <PrivateRouter path="/account" component={Account} />
        <Route path="/shipping-and-returns" component={ShippingAndReturns} />
        <Route path="/about" component={About} />
        <Route path="/store-locator" component={StoreLocator} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/faq" component={FAQ} />
        <Route path="/catalog/:slug?" component={Catalog} />
        <Route path="/product/:slug" component={ProductDetail} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order-completed/:id" component={OrderCompleted} />
        <Route path="/comming-soon" component={() => <WithCountDown WrapComponent={CommingSoon} timeCountDown={(1 * 24 + 5) * 60 * 60 + 1800}/>} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Home} />
        <Route path="/" component={Page404} />
      </Switch>
      <Footer sizeChartRef={sizeChartRef}/>
      <ModelCart />
      <ModelSearch />
      <ModelSizeChart ref={sizeChartRef}/>
    </AppProvider>
  );
}

export default App;
