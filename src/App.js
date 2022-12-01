import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mint from "./components/Mint";
import Mission from "./components/Mission";
import TopSeller from "./components/Top-Seller";
import AllAuthor from "./components/All-Author";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Support from "./components/Support";
import Help from "./components/Help";
import Subscribe from "./components/Subscribe";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Rankings from "./components/Rankings";
import Activity from "./components/Activity";
import WalletConnect from "./components/Wallet-Connect";
import BlogDetails from "./components/Blog-Details";
import Collection from "./components/Collection";
import CreateCollection from "./components/CreateCollection";
import Sellers from "./components/Sellers";
import Dashboard from "./components/users/Dashboard";
import Bids from "./components/users/Bids";
import ListUsers from "./components/users/List-Users";
import Saved from "./components/users/Saved";
import UserWallet from "./components/users/User-Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mint">
            <Mint />
          </Route>
          <Route exact path="/mission">
            <Mission />
          </Route>
          <Route exact path="/top-seller">
            <TopSeller />
          </Route>
          <Route exact path="/all-author">
            <AllAuthor />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/subscribe">
            <Subscribe />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/edit-profile">
            <EditProfile />
          </Route>
          <Route exact path="/rankings">
            <Rankings />
          </Route>
          <Route exact path="/activity">
            <Activity />
          </Route>
          <Route exact path="/wallet-connect">
            <WalletConnect />
          </Route>
          <Route exact path="/blog-details">
            <BlogDetails />
          </Route>
          <Route exact path="/collection">
            <Collection />
          </Route>
          <Route exact path="/create-collection">
            <CreateCollection />
          </Route>
          <Route exact path="/sellers">
            <Sellers />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/bids">
            <Bids />
          </Route>
          <Route exact path="/list-users">
            <ListUsers />
          </Route>
          <Route exact path="/user-wallet">
            <UserWallet />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
