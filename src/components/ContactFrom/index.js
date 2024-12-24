import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        guests: '', // Updated state property
        message: '',
        error: {}
    };

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = '';

        this.setState({
            [e.target.name]: e.target.value,
            error
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const { name, email, subject, guests, message, error } = this.state;

        if (name === '') error.name = "Please enter your name";
        if (email === '') error.email = "Please enter your email";
        if (subject === '') error.subject = "Please select a subject";
        if (guests === '') error.guests = "Please enter the number of guests";
        if (message === '') error.message = "Please enter your message";

        if (Object.keys(error).length > 0) {
            this.setState({ error });
        } else {
            this.setState({
                name: '',
                email: '',
                subject: '',
                guests: '',
                message: '',
                error: {}
            });
        }
    };

    sendWhatsAppMessage = () => {
        const { name, email, subject, guests, message } = this.state;
        const error = {};

        if (name === '') error.name = "Please enter your name";
        if (email === '') error.email = "Please enter your email";
        if (subject === '') error.subject = "Please select villa";
        if (guests === '') error.guests = "Please enter the number of guests";
        if (message === '') error.message = "Please enter your message";

        if (Object.keys(error).length > 0) {
            this.setState({ error });
            return; // Stop execution if validation fails
        }

        const phone = "8971220576"; // Your WhatsApp number
        const whatsappMessage = `Hello, \nName: ${name}.\nEmail: ${email}.\nHome Stay: "${subject}".\nNumber of Guests: ${guests}.\nMessage: ${message}`;
        const whatsappLink = `https://wa.me/+918971220576?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, "_blank");
    };

    render() {
        const { name, email, subject, guests, message, error } = this.state;

        return (
            <form onSubmit={this.submitHandler} className="form">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name" />
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={email} onChange={this.changeHandler} type="email" name="email" placeholder="Email" />
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={guests} onChange={this.changeHandler} type="number" name="guests" placeholder="Number of Guests" />
                            <p>{error.guests ? error.guests : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <select value={subject} onChange={this.changeHandler} name="subject" className="form-control">
                                <option value="">Choose Villa</option>
                                <option>WHITE HOUSE</option>
                                <option>GARDEN VILLA</option>
                                <option>COTTAGE HOUSE</option>
                                <option>HILL TOP VILLA</option>
                                <option>SUNRISE HOME</option>
                                <option>CHALET LA BONNE VIE</option>
                                <option>VIEWPOINT OASIS</option>
                            </select>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea value={message} onChange={this.changeHandler} name="message" placeholder="Message"></textarea>
                            <p>{error.message ? error.message : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            {/* <button type="submit" className="theme-btn">Send Message</button> */}
                            <button type="button" onClick={this.sendWhatsAppMessage} className="theme-btn" style={{ marginLeft: '10px' }}>Send via WhatsApp</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ContactForm;
