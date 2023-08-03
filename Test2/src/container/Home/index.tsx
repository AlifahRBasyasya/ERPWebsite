import { PureComponent } from "react";

import HomeComponent from "../../component/Home";

export class HomeContainer extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <HomeComponent />
    )
  }
}

export default HomeContainer;