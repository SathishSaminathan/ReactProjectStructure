import React, { Component } from "react";
import arrayMove from "array-move";

import DragAndDropComponent from "components/shared/DragAndDropComponent";
import Notification from "components/shared/NotificationComponent";
import { Notifications } from "constants/AppConstants";

class Script extends Component {
  constructor() {
    super();
    this._notification = new Notification();
    this.state = {
      items: [
        { Item: "sathish1" },
        { Item: "sathish2" },
        { Item: "sathish3" },
        { Item: "sathish4" },
        { Item: "sathish5" },
        { Item: "sathish6" }
      ]
    };
  }

  saveChanges = (data, oldIndex, newIndex) => {
    this.setState(
      ({ items }) => ({
        items: arrayMove(items, oldIndex, newIndex)
      }),
      () => console.log(this.state.items)
    );
    
    this._notification.showNotifications(
      Notifications.SUCCESS,
      Notifications.SUCCESS_CAP,
      "Saved Changes"
    );
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        Scripts
        <DragAndDropComponent items={items} onSortEnd={this.saveChanges} />
      </div>
    );
  }
}

export default Script;
