import React, { Component } from "react";

class ViewPointForm extends Component {
  state = {
    checkInDate: "", // Check-in date
    numHouses: 0, // Number of houses
    error: {},
    totalPrice: 0,
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value,
        error: { ...this.state.error, [name]: "" },
      },
      () => {
        this.calculateTotalPrice();
      }
    );
  };

  calculateTotalPrice = () => {
    const { numHouses } = this.state;

    // Each house costs Rs. 1000
    const housePrice = 1000;
    const total = Math.max(0, numHouses) * housePrice; // Ensure non-negative numbers
    this.setState({ totalPrice: total });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { checkInDate, numHouses, totalPrice } = this.state;

    const newError = {};

    if (!checkInDate) newError.checkInDate = "Please select your check-in date";
    if (numHouses <= 0) newError.numHouses = "Please select at least one house";

    if (Object.keys(newError).length) {
      this.setState({ error: newError });
      return;
    }

    const message = `Hello,Book VIEWPOINT OASIS For,
    Check-in Date: ${checkInDate}
    Number of Hours: ${numHouses}
    Total Price: Rs. ${totalPrice}`;

    const whatsappURL = `https://wa.me/+918971220576?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    this.setState({
      checkInDate: "",
      numHouses: 0,
      error: {},
      totalPrice: 0,
    });
  };

  render() {
    const { checkInDate, numHouses, error, totalPrice } = this.state;

    const today = new Date().toISOString().split("T")[0];

    return (
      <div>
        <div className="wpo-contact-title">
          <h4>Book Your Stay Today</h4>
        </div>
        <form onSubmit={this.submitHandler} className="form">
          <div className="row">
            {/* Check-in Date */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="form-field">
                <label htmlFor="checkInDate" style={{ fontWeight: "bold" ,color:'black',textAlign:'center',display:'block'}}>
                  Check-in Date:
                </label>
                <input
                  value={checkInDate}
                  onChange={this.changeHandler}
                  type="date"
                  name="checkInDate"
                  min={today}
                  className="form-control"
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.checkInDate}</p>
              </div>
            </div>

            {/* Number of Houses */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="form-field">
                <label htmlFor="numHouses" style={{ fontWeight: "bold",color:'black',textAlign:'center',display:'block' }}>
                  Number Of Hour:
                </label>
                <input
                  value={numHouses}
                  onChange={this.changeHandler}
                  type="number"
                  name="numHouses"
                  min="0"
                  id="numHouses"
                  className="form-control"
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.numHouses}</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-center" style={{marginTop:'20px'}}>
              <div className="form-field">
                <button
                  type="submit"
                  className="theme-btn"
                  style={{ padding: "10px 20px", borderRadius: "3px" }}
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="col-lg-12 col-md-12 col-12 text-center mt-3" >
              <h4 style={{fontFamily:'poppins'}}>Total Price: Rs. {totalPrice}</h4>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ViewPointForm;
