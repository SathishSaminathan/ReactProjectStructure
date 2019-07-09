import React, { Component } from "react";

import TextComponent from "components/shared/TextComponent";
import IconComponent from "components/shared/IconComponent";
import { Icons } from "constants/AppConstants";

class Dashboard extends Component {
  componentDidMount() {
    console.log("componentDidMount Dashboard");
  }

  render() {
    console.log(this.props);

    /** Code for endcode and decode the string */
    // var text = "Highlight";

    // // Encode the String
    // var encodedString = btoa(text);
    // console.log(encodedString); // Outputs: "SGlnaGxpZ2h0"

    // // Decode the String
    // var decodedString = atob(encodedString);
    // console.log(decodedString); // Outputs: "Highlight"
    return (
      <div>
        <TextComponent style={{ color: "red" }} customize>
          Dashboard
          <IconComponent name={Icons.TRASH} />
        </TextComponent>
      </div>
    );
  }
}

export default Dashboard;
