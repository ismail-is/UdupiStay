import React, { Component } from "react";
import whatsapp1 from '../../images/allimg/whatsapp/whatsapp1.png';

class BookingForm extends Component {
  state = {
    name: "",
    lastname: "",
    subject: "",
    guests: "",
    error: {},
    villaPrices: {
      "WHITE HOUSE": { "JANUARY TO MARCH ": 10800, "APRIL TO MAY": 13600, "JUNE TO AUGUST": 10800, "SEPT TO DEC 20TH": 13600, "DEC 20TH TO 31ST DEC": 19950 },
      "GARDEN VILLA": { "JANUARY TO MARCH ": 9800, "APRIL TO MAY": 12500, "JUNE TO AUGUST": 9800, "SEPT TO DEC 20TH": 12500, "DEC 20TH TO 31ST DEC": 21950 },
      "COTTAGE HOUSE": { "JANUARY TO MARCH ": 5800 , "APRIL TO MAY": 7500 , "JUNE TO AUGUST": 5800 , "SEPT TO DEC 20TH": 7500 , "DEC 20TH TO 31ST DEC": 11900  },
      "HILL TOP VILLA": { "JANUARY TO MARCH ": 6200 , "APRIL TO MAY": 7800 , "JUNE TO AUGUST": 6200 , "SEPT TO DEC 20TH": 7800 , "DEC 20TH TO 31ST DEC": 12500  },
      "SUNRISE HOME": { "JANUARY TO MARCH ": 4800 , "APRIL TO MAY": 6500 , "JUNE TO AUGUST": 4800  , "SEPT TO DEC 20TH": 6500  , "DEC 20TH TO 31ST DEC": 9900   },
      "CHALET LA BONNE VIE": { "JANUARY TO MARCH ": 12000   , "APRIL TO MAY": 15000  , "JUNE TO AUGUST": 12000 , "SEPT TO DEC 20TH": 15000 , "DEC 20TH TO 31ST DEC": 19500  }
    },
    totalPrice: 0
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    const error = this.state.error;

    if (name === "lastname" && this.state.name) {
      const checkinDate = new Date(this.state.name);
      const checkoutDate = new Date(value);

      if (checkoutDate <= checkinDate) {
        alert("Checkout date cannot be before or the same as the check-in date.");
        return; // Prevents updating the state if invalid
      }
    }

    error[name] = ""; // Clear error for the current field
    this.setState({ [name]: value, error }, this.updateTotalPrice);
  };

  updateTotalPrice = () => {
    const { name, lastname, subject, guests } = this.state;

    if (!name || !lastname || !subject || !guests) return;

    const checkinDate = new Date(name);
    const checkoutDate = new Date(lastname);
    const nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);
    const pricePerNight = this.state.villaPrices[subject][this.getSeason(name)];
    const totalPrice = pricePerNight * nights;

    this.setState({
      totalPrice,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();
    const { name, lastname, subject, guests, error } = this.state;

    if (!name) {
      error.name = "Please select your check-in date";
    }
    if (!lastname) {
      error.lastname = "Please select your check-out date";
    }
    if (!subject) {
      error.subject = "Please select villa";
    }
    if (!guests) {
      error.guests = "Please enter the number of guests";
    }

    if (Object.values(error).some((err) => err !== "")) {
      this.setState({ error });
      return;
    }

    const checkinDate = new Date(name);
    const checkoutDate = new Date(lastname);
    const nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);
    const pricePerNight = this.state.villaPrices[subject][this.getSeason(name)];
    const totalPrice = pricePerNight * nights;

    this.setState({
      totalPrice,
      error,
    });

    const message = `Hello, 
    Check-in Date:    ${name}
    Check-out Date:  ${lastname}
    Choose villa:  ${subject}
    Number of Guests:  ${guests}
    Total Price: Rs. ${totalPrice}`;

    const whatsappURL = `https://wa.me/+918971220576?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    this.setState({
      name: "",
      lastname: "",
      subject: "",
      guests: "",
      error: {},
    });
  };

  getSeason = (dateString) => {
    const month = new Date(dateString).getMonth() + 1;
    if (month >= 1 && month <= 3) return "JANUARY TO MARCH ";
    if (month >= 4 && month <= 5) return "APRIL TO MAY";
    if (month >= 6 && month <= 8) return "JUNE TO AUGUST";
    if (month >= 9 && month <= 12) return "SEPT TO DEC 20TH";
  };

  render() {
    const { name, lastname, subject, guests, error, totalPrice } = this.state;
    const today = new Date().toISOString().split("T")[0];
    const minCheckoutDate = name
      ? new Date(new Date(name).setDate(new Date(name).getDate() + 1))
          .toISOString()
          .split("T")[0]
      : today;

    return (
      <div>
        <div className="wpo-contact-title">
          <h4>Book your stay today</h4>
        </div>
        <form onSubmit={this.subimtHandler} className="form">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="form-field">
                <label htmlFor="checkin-date" style={{textAlign:'center',display:"block",color:'#0d0845'}}>Check-in Date</label>
                <input
                  id="checkin-date"
                  value={name}
                  onChange={this.changeHandler}
                  type="date"
                  name="name"
                  min={today}
                  placeholder="Check-in Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                />
                <p>{error.name}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
              <div className="form-field">
                <label htmlFor="checkout-date" style={{textAlign:'center',display:"block",color:'#0d0845'}}>Check-out Date</label>
                <input
                  id="checkout-date"
                  value={lastname}
                  onChange={this.changeHandler}
                  type="date"
                  name="lastname"
                  min={minCheckoutDate}
                  placeholder="Check-out Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                />
                <p>{error.lastname}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6" style={{ marginTop: "20px" }}>
              <div className="form-field">
                <input
                  value={guests}
                  onChange={this.changeHandler}
                  type="number"
                  name="guests"
                  placeholder="No.of Guests"
                  min="1"
                />
                <p>{error.guests}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6" style={{ marginTop: "20px" }}>
              <div className="form-field">
                <select
                  className="form-control"
                  onChange={this.changeHandler}
                  value={subject}
                  name="subject"
                >
                  <option value="">Choose Villa</option>
                  <option value="WHITE HOUSE">WHITE HOUSE</option>
                  <option value="GARDEN VILLA">GARDEN VILLA</option>
                  <option value="COTTAGE HOUSE">COTTAGE HOUSE</option>
                  <option value="HILL TOP VILLA">HILL TOP VILLA</option>
                  <option value="SUNRISE HOME">SUNRISE HOME</option>
                  <option value="CHALET LA BONNE VIE">CHALET LA BONNE VIE</option>
                </select>
                <p>{error.subject}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 d-flex justify-content-center" style={{ marginTop: "20px" }}>
              <div className="form-field">
                <button
                  type="submit"
                  className="theme-btn d-flex align-items-center"
                  style={{ borderRadius: "3px", height: "55px" }}
                >
                  <img src={whatsapp1} alt="WhatsApp Icon" style={{ height: "40px", marginRight: "8px" }} />
                  Book Now
                </button>
              </div>
            </div>

            <h4 style={{ textAlign: "center", marginTop: "30px" }}>Total Price: Rs. {totalPrice}</h4>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
