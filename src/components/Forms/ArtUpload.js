import { Component, useState } from "react";
import { storage } from "../../config/Fire";
import Fire from "../../config/Fire";
import { ref } from "firebase/storage";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

export default class ArtUpload extends Component {
  state = {
    imageName: "",
    imageUrls: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { imageName } = this.state;
    const uploadTask = storage.ref(`images/${imageName}`).put(imageName);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
      },
      (error) => {
        // error function
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            this.setState({ imageUrls: [...this.state.imageUrls, url] });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="imageName"
            onChange={this.handleChange}
            value={this.state.imageName}
            placeholder="Image Name"
          />
          <Input type="file" onChange={this.handleChange} />

          <Button type="submit">Upload Image</Button>
        </form>
      </div>
    );
  }
}
