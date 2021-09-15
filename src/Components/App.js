//import logo from '../assets/logo.svg';
import '../css/App.css';
import AdminLoginComponent from './adminLogin/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Dashboard from './adminDashboard/index.js';
import AddProduct from './addProduct/index.js'
import AddCategory from './addCategory/index.js';
import Categories from './categories';
import UsersManagement from './usersManagement';
import Orders from './Orders';
import Comments from './comments';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ProductsByCategory from './ProductsByCategory';
import ContactPage from './ContactPage';
import HomePage from './Home';
import ProductsByCategoryClients from './CategoryClient';
import AboutUs from './aboutUs';
import Search from './search';
import CategoryPageClient from './categoryPageClient';
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/home" component={HomePage} />
        <Route path="/adminLogin" component={AdminLoginComponent} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/addCategory" component={AddCategory} />
        <Route path="/categories" component={Categories} />
        <Route path="/clientsManagement" component={UsersManagement} />
        <Route path="/ordersManagement" component={Orders} />
        <Route path="/comments" component={Comments} />
        <Route path="/sideBar" component={Sidebar} />
        <Route path="/productsByCategory" component={ProductsByCategory} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/category/:idCategory" component={ProductsByCategoryClients} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/search" component={Search} />
        <Route path="/categoriesFilter" component={CategoryPageClient} />
      </Switch>
    {/*localStorage.getItem('loggedAdmin')!=null?null:<Footer style={{width:'100%'}} />*/}
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
