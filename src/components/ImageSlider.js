import React from "react";
import Counter from "./Counter";

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaeIIKr7wBXtNe5ecW_-FP555yUXECpWBmQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYbFDz170UK_QFm_BNGfxd7IhQtErqxgPLw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShirR0Yx4SVXMiGnGWh71R6NaT13cSYfZKug&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6rVV6hygxsgs-iALNF4sdPn3rktcT7mMJg&usqp=CAU",
      ],
      whichComponentToShow: "image-slider",
    };
  }

  changeImage = () => {
    this.setState({
      images: [...this.state.images.slice(1), this.state.images[0]],
    });
  };

  render() {
    const showImage = (
      <div
        className={
          this.state.whichComponentToShow === "image-slider"
            ? "visible"
            : "hidden"
        }
      >
        <img style={{ width: 100, height: 100 }} src={this.state.images[0]} />
        <br />
        <button onClick={this.changeImage}>next image</button>
        <button
          onClick={() => {
            this.setState({
              whichComponentToShow: "counter",
            });
          }}
        >
          switch to counter
        </button>
      </div>
    );

    const showCounter = (
      <div
        className={
          this.state.whichComponentToShow === "counter" ? "visible" : "hidden"
        }
      >
        <Counter />
        <button
          onClick={() => {
            this.setState({
              whichComponentToShow: "image-slider",
            });
          }}
        >
          switch to image slider
        </button>
      </div>
    );

    return (
      <div>
        {showImage}
        {showCounter}
      </div>
    );
  }
}
