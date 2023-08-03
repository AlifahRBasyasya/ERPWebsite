import { PureComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeContainer from "../Home";

export class AppContainer extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default AppContainer;