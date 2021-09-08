import React, { Component } from "react";
import validator from "validator";
import emailjs, { init } from "emailjs-com";
import axios from "axios";
import DatePicker from "react-datepicker";
import Collapsible from "react-collapsible";
import "react-datepicker/dist/react-datepicker.css";

import { Modal } from "antd";
import "antd/dist/antd.css";

var rand = Math.random().toString(36).split(".")[1].slice(0, 8) + "";
var year = new Date().getFullYear();

let URL_Interview = "https://jsonplaceholder.typicode.com/users";

// Qxf2 EMAILJS credentials
let service_id = "default_service";
let template_id = "junior_training";
let user_id = "user_8k6FfpYGOYlfflIsrTFyF";

init(user_id);

class Apply extends Component {
  constructor(props) {
    super(props);

    // this state variable is use to set initial values for the required for the form
    this.state = {
      name: "",
      email: "",
      phone: "",
      highestEducation: "",
      educationYear: new Date(),
    };

    // we can define all the  error variable here
    this.email_error = false;
    this.phone_error = false;

    this.isSubmitted = false;

    //This variable is to define initial state which will be used once the form is submitted successfully
    this.baseState = this.state;

    // message for successfully submitting the application
    this.successMessage = "";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // function to store all the input values according to their ID's
  handleChange = (event) => {
    const id = event.target.id;
    switch (id) {
      case "Name":
        if (event.target.value == "" || event.target.value.match(/^[A-Za-z ]+$/)) {
          this.setState({ name: event.target.value });
        }
        break;
      case "Email":
        this.setState({ email: event.target.value });
        this.email_error = true;
        if (validator.isEmail(event.target.value)|| validator.isEmpty(event.target.value)) {
          this.email_error = false;
        }
        break;
        case "Phone":
          this.setState({ phone: event.target.value });
          this.phone_error = true;
          if (validator.isMobilePhone(event.target.value)|| validator.isEmpty(event.target.value)) {
            this.phone_error = false;
          }
          break;
      case "highest_education":
        this.setState({ highestEducation: event.target.value });
        break;
      default:
        break;
    }
    this.setState({ isEnabled: this.setButton() });
  };

  // checking all validation from the users input
  setButton() {
    if (
      this.state.name.trim().length > 3 &&
      this.state.email.length > 3 &&
      this.state.phone.trim().length > 9 &&
      this.state.phone.trim().length < 14 &&
      this.state.highestEducation.trim().length >= 1 &&
      this.state.educationYear != null
    ) {
        return true;
      }
    else {
      return false;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.isSubmitted = true;
    this.setState({ isEnabled: this.setButton() });
    this.confirmSubmission();
  };

  // Function to send the email and for scheduling the interview
  confirmSubmission() {
    let Answer =
      "<b>Q1 Name</b> <br>" +
      this.state.name +
      "<br> <br> <b>Q2 Email</b> <br>" +
      this.state.email +
      "<br> <br> <b>Q3 Phone number</b> <br>" +
      this.state.phone +
      "<br> <br> <b>Q4 Highest education </b> <br>" +
      this.state.highestEducation +
      "<br> <br> <b>Q5 Year of pass out </b> <br>" +
      this.state.educationYear.getFullYear() ;

    this.successMessage =
      "Thank You for applying with us " +
      this.state.name +
      "! We will get back to you within 5 business days";

    let template_params = {
      contact_number: rand,
      answers: Answer,
    };

    if (this.setButton()) {
      // For emailjs all the credentials are defined on top of the file
      emailjs.send(service_id, template_id, template_params).then(
        (result) => {
          Modal.success({
            content: this.successMessage,
            onOk: async () => {
              window.location.reload(true);
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

      // For getting the API response
      axios.get(URL_Interview).then((res) => {
        if (res.status === 200) {
          const persons = res.data;
          // this.setState({ persons });
        }
      });
    } else {
      this.isSubmitted = false;
      Modal.error({
        content:
          "You need to fill all the req. fields(min 4 chars) in the application",
      });
    }
  }

  // once the app is loaded then this function is called
  componentDidMount() {
    console.log("Find a bug and the course price is free");
  }

  render() {
    const imp = <span className="required">*</span>;

    return (
      <section id="apply" data-testid="apply">
        <div className="row education">
          <div className="eight columns header-col">
            <h1>
              <span>Apply Here</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item"></div>
          </div>
        </div>

        <div className="row work" data-testid="form">
          <div className="twelve columns header-col">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name {imp}
                <input
                  data-testid="name"
                  id="Name"
                  className="input-text form-control form-control-lg"
                  type="text"
                  value={this.state.name}
                  ref={this.state.name}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Email {imp}
                <input
                  data-testid="email"
                  id="Email"
                  className="input-text"
                  type="text"
                  value={this.state.email}
                  ref={this.state.email}
                  onChange={this.handleChange}
                />
                {this.email_error ? (
                  <span className="required">Email not valid</span>
                ) : null}
              </label>

              <label>
                Phone {imp}
                <input
                  data-testid="phone"
                  id="Phone"
                  className="input-text"
                  type="text"
                  value={this.state.phone}
                  ref={this.state.phone}
                  onChange={this.handleChange}
                />
                {this.phone_error ? (
                  <span className="required">Phone number not valid</span>
                ) : null}
              </label>

              <label>Highest education{imp}</label>
                  <input
                    id="highest_education"
                    className="input-text"
                    data-testid="highest_education"
                    type="text"
                    value={this.state.highestEducation}
                    onChange={this.handleChange}
                  />
              <label data-testid="year">year of pass out{imp}</label>

                  <DatePicker
                    placeholderText="Select Year"
                    id="education_year"
                    className="input-text"
                    selected={this.state.educationYear}
                    onChange={(date) => this.setState({ educationYear: date })}
                    showYearPicker
                    minDate={new Date(year - 1, 0, 1)}
                    maxDate={new Date(year + 1, 11, 31)}
                    dateFormat="yyyy"
                    yearItemNumber={11}
                  />

                  <span
                    style={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {this.year_error}
                  </span>
              <br/>
              {this.isSubmitted ? (
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              ) : (
                <input
                  style={{
                    borderRadius: 5,
                    marginTop: 10,
                    width: 100,
                    padding: 4,
                  }}
                  className={!this.state.isEnabled ? "disabled" : null}
                  disabled={!this.state.isEnabled}
                  data-testid="submit"
                  type="submit"
                  value="submit"
                />
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Apply;
