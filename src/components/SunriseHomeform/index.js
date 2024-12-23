import React, { Component } from "react";

class SunriseHomeform extends Component {
  state = {
    name: "", // Check-in date
    lastname: "", // Check-out date
    guests: "",
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
        if (!this.state.name || !this.state.lastname) {
          this.setState({ totalPrice: 0 });
        } else {
          this.calculateTotalPrice();
        }
      }
    );
  };

  calculatePricePerDay = (date) => {
    const parsedDate = new Date(date);
    const month = parsedDate.getMonth() + 1; // Months are 0-indexed
    const day = parsedDate.getDate();

    // Special pricing for December 20th to 31st
    if (month === 12 && day >= 20 && day <= 31) return 9900 ;

    // General pricing
    if (month >= 1 && month <= 3) return 4800 ; // Jan to Mar
    if (month >= 4 && month <= 5) return 6500 ; // Apr to May
    if (month >= 6 && month <= 8) return 4800 ; // Jun to Aug
    if (month >= 9 && month <= 12) return 6500 ; // Sep to Nov, Dec (excluding special pricing period)

    return 0;
  };

  calculateTotalPrice = () => {
    const { name, lastname } = this.state;
    if (!name || !lastname) return;

    const checkInDate = new Date(name);
    const checkOutDate = new Date(lastname);
    if (checkOutDate <= checkInDate) {
      this.setState({ totalPrice: 0 });
      return;
    }

    let totalPrice = 0;
    let currentDate = new Date(checkInDate);

    while (currentDate < checkOutDate) {
      totalPrice += this.calculatePricePerDay(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    this.setState({ totalPrice });
  };

  componentDidUpdate(_, prevState) {
    if (
      (prevState.name !== this.state.name || prevState.lastname !== this.state.lastname) &&
      this.state.name &&
      this.state.lastname
    ) {
      this.calculateTotalPrice();
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { name, lastname, guests, totalPrice } = this.state;

    const newError = {};

    if (!name) newError.name = "Please select your check-in date";
    if (!lastname) newError.lastname = "Please select your check-out date";
    if (!guests) newError.guests = "Please enter the number of guests";

    if (Object.keys(newError).length) {
      this.setState({ error: newError });
      return;
    }

    const message = `Hello,Book SUNRISE HOME For 
    Check-in Date: ${name}
    Check-out Date: ${lastname}
    Number of Guests: ${guests}
    Total Price: Rs. ${totalPrice}`;

    const whatsappURL = `https://wa.me/+918971220576?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    this.setState({
      name: "",
      lastname: "",
      guests: "",
      error: {},
      totalPrice: 0,
    });
  };

  render() {
    const { name, lastname, guests, error, totalPrice } = this.state;

    const today = new Date().toISOString().split("T")[0];
    const minCheckoutDate = name
      ? new Date(new Date(name).setDate(new Date(name).getDate() + 1))
          .toISOString()
          .split("T")[0]
      : today;

    return (
      <div>
        <div className="wpo-contact-title">
          <h4>Book Your Stay Today</h4>
        </div>
        <form onSubmit={this.submitHandler} className="form">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="form-field">
                <input
                  value={name}
                  onChange={this.changeHandler}
                  type="date"
                  name="name"
                  min={today}
                  placeholder="Check-in Date"
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.name}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="form-field">
                <input
                  value={lastname}
                  onChange={this.changeHandler}
                  type="date"
                  name="lastname"
                  min={minCheckoutDate}
                  placeholder="Check-out Date"
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.lastname}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="form-field">
                <input
                  value={guests}
                  onChange={this.changeHandler}
                  type="number"
                  name="guests"
                  placeholder="No. of Guests"
                  min="1"
                  max='30'
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.guests}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 d-flex justify-content-center">
              <div className="form-field">
                <button
                  type="submit"
                  className="theme-btn"
                  style={{ borderRadius: "3px" }}
                  
                >
                    Book Now
                </button>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <h4>Total Price: Rs. {totalPrice}</h4>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SunriseHomeform;
