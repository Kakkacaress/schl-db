import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import Register from "./register/register.component";
import SignIn from "./sign-in/sign-in.component";
import Contact from "./contact/contact.component";
import Dashboard from "./dashboard/dashboard.component";
import HomePage from "./homepage/homepage.component";
import SocialNetworks from "./social networks/social-networks.component";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  //getting the app aware of the current user on firebase, whether they sign-in or sign-out
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
        <div className="social_networks">
          {" "}
          <SocialNetworks />
        </div>
      </div>
    );
  }
}

export default App;
