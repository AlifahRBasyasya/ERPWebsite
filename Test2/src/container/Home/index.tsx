import { PureComponent } from "react";
import { Navigate } from "react-router-dom";

import HomeComponent from "../../component/Home";

export class HomeContainer extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showLogin: false,
      showError: false,
      showSuccess: false,
      username: "",
      password: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleBuyPackage = this.handleBuyPackage.bind(this);
  }

  private toggleModal(name: string): void {
    this.setState({
      ...this.state,
      [name]: !this.state[name]
    });
  }

  private handleInputChange(e: any): void {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  private handleLogin(): void {
    const { username } = this.state;
    if (username === "basic") {
      localStorage.setItem("USER", "BASIC");
    }
    else if (username === "business") {
      localStorage.setItem("USER", "BUSINESS");
    }
    else if (username === "entrepreneur") {
      localStorage.setItem("USER", "ENTREPRENEUR");
    }
    this.setState({
      ...this.state,
      showLogin: false
    })
  }

  private handleLogout(): any {
    localStorage.removeItem("USER");
    window.location.reload();
    return <Navigate to="/" />;
  }

  private handleBuyPackage(): void {
    const user = localStorage.getItem("USER");
    if (!user) {
      this.toggleModal("showError");
    }
    else {
      this.toggleModal("showSuccess");
    }
  }

  render() {
    const { showLogin, showError, showSuccess, username, password } = this.state;
    return (
      <HomeComponent
        showLogin={showLogin}
        showError={showError}
        showSuccess={showSuccess}
        username={username}
        password={password}
        toggleModal={this.toggleModal}
        handleInputChange={this.handleInputChange}
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        handleBuyPackage={this.handleBuyPackage}
      />
    )
  }
}

export default HomeContainer;