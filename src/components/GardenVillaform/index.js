import React, { Component } from "react";

class GardenVillaform extends Component {
  state = {
    name: "", // Check-in date
    lastname: "", // Check-out date
    guests: "20", // Default value for guests
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
    if (month === 12 && day >= 20 && day <= 31) return 21950;

    // General pricing
    if (month >= 1 && month <= 3) return 9800; // Jan to Mar
    if (month >= 4 && month <= 5) return 12500; // Apr to May
    if (month >= 6 && month <= 8) return 9800; // Jun to Aug
    if (month >= 9 && month <= 12) return 12500; // Sep to Nov, Dec (excluding special pricing period)

    return 0;
  };

  calculateTotalPrice = () => {
    const { name, lastname, guests } = this.state;
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

    const guestCount = parseInt(guests, 10);
    const extraGuestCount = guestCount > 30 ? guestCount - 30 : 0;
    const extraCharges = extraGuestCount * 650;

    this.setState({ totalPrice: totalPrice + extraCharges });
  };

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

    const guestCount = parseInt(guests, 10);
    const extraGuestCount = guestCount > 20 ? guestCount - 20 : 0;
    const extraCharges = extraGuestCount * 650;

    const message = `Hello, Book GARDEN VILLA For:
    Check-in Date: ${name}
    Check-out Date: ${lastname}
    Number of Guests: ${guests}
    Total Price: Rs. ${totalPrice} 
    Extra Charges: Rs. ${extraCharges}`;

    const whatsappURL = `https://wa.me/+918971220576?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    this.setState({
      name: "",
      lastname: "",
      guests: "21", // Reset to default
      error: {},
      totalPrice: 0,
    });
  };

  handleGuestsChange = (e) => {
    const value = e.target.value;
    this.setState({
      guests: value,
      error: {
        ...this.state.error,
        guests:
          value > 20
            ? "Maximum 20 guests, Rs 650 extra per guest"
            : "",
      },
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

    const labelStyle = {
      color: "black",
      textAlign: "center",
      display: "block",
    };

    const guestCount = parseInt(guests, 10);
    const extraGuestCount = guestCount > 20 ? guestCount - 20 : 0;
    const extraCharges = extraGuestCount * 650;

    return (
      <div>
        <div className="wpo-contact-title">
          <h4>Book Your Stay Today</h4>
        </div>
        <form onSubmit={this.submitHandler} className="form">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="form-field">
                <label htmlFor="checkInDate" style={labelStyle}>
                  Check-in Date
                </label>
                <input
                  id="checkInDate"
                  value={name}
                  onChange={this.changeHandler}
                  type="date"
                  name="name"
                  placeholder="dd-mm-yyyy"
                  min={today}
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.name}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="form-field">
                <label htmlFor="checkOutDate" style={labelStyle}>
                  Check-out Date
                </label>
                <input
                  id="checkOutDate"
                  value={lastname}
                  onChange={this.changeHandler}
                  type="date"
                  name="lastname"
                  placeholder="dd-mm-yyyy"
                  min={minCheckoutDate}
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.lastname}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="form-field">
                <label htmlFor="guests" style={labelStyle}>
                  Number of Guests
                </label>
                <input
                  id="guests"
                  value={guests}
                  onChange={this.handleGuestsChange}
                  type="number"
                  name="guests"
                  placeholder="0"
                  min="1"
                  max="40"
                  style={{ backgroundColor: "white" }}
                />
                <p style={{ color: "red" }}>{error.guests}</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-12 col-12 d-flex justify-content-center"
              style={{ marginTop: "20px" }}
            >
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
            <div
              className="col-lg-12 col-md-12 col-12"
              style={{ marginTop: "30px", textAlign: "center" }}
            >
              <h4 style={{fontFamily:'poppins'}}>
                Total Price: Rs. {totalPrice}
                {extraCharges > 0 &&
                  `  +${extraCharges}`}
              </h4>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default GardenVillaform;
