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
      educationCollege: "",
      educationCourse: "",
      educationBranch: "",
      educationYear: new Date(),
      personalInfo: "",
      isCollegeProject: false,
      projects_outside: "",
      isHardware: "",
      git_url: "",
      video_software_url: "",
      video_url: "",
      linkedIn_url: "",
      about_testing: "",
      start_testing: "",
      programming_level: "",
      programming_language: "",
      how_u_find_us: "",
      technical_interest: "",
      looking_from_us: "",
      isEnabled: false,
    };

    // this is for the checkboxes at the bottom of the form
    this.checks = {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
    };

    // we can define all the  error variable here
    this.email_error = false;

    this.isSubmitted = false;

    //This variable is to define initial state which will be used once the form is submitted successfully
    this.baseState = this.state;

    // message for successfully submitting the application
    this.successMessage = "";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  // function for handling the select options
  handleSelectChange = (programming_level) => {
    this.setState({ programming_level });
    this.setState({ isEnabled: this.setButton() });
  };

  // function for checkbox
  handleInputChange = (event) => {
    const id = event.target.id;

    switch (id) {
      case "check1":
        this.checks.check1 = !this.checks.check1;
        break;
      case "check2":
        this.checks.check2 = !this.checks.check2;
        break;
      case "check3":
        this.checks.check3 = !this.checks.check3;
        break;
      case "check4":
        this.checks.check4 = !this.checks.check4;
        break;
      case "check5":
        this.checks.check5 = !this.checks.check5;
        break;
      default:
        break;
    }
    this.setState({ isEnabled: this.setButton() });
  };

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
      case "education_college":
        this.setState({ educationCollege: event.target.value });
        break;
      case "education_course":
        this.setState({ educationCourse: event.target.value });
        break;
      case "education_branch":
        this.setState({ educationBranch: event.target.value });
        break;
      case "personalInfo":
        this.setState({ personalInfo: event.target.value });
        break;
      case "projects_outside":
        this.setState({ projects_outside: event.target.value });
        break;
      case "github":
        this.setState({ git_url: event.target.value });
        break;
      case "video_software":
        this.setState({ video_software_url: event.target.value });
        break;
      case "video":
        this.setState({ video_url: event.target.value });
        break;
      case "linkedIn":
        this.setState({ linkedIn_url: event.target.value });
        break;
      case "testing-knowledge":
        this.setState({ about_testing: event.target.value });
        break;
      case "software-testing":
        this.setState({ start_testing: event.target.value });
        break;
      case "languages":
        this.setState({ programming_language: event.target.value });
        break;
      case "find-us":
        this.setState({ how_u_find_us: event.target.value });
        break;
      case "looking-for":
        if (validator.isLength(event.target.value, { max: 100 })) {
          this.setState({ looking_from_us: event.target.value });
        }
        break;
      case "technical-interest":
        this.setState({ technical_interest: event.target.value });
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
      this.state.educationCollege.trim().length > 3 &&
      this.state.educationCourse.trim().length >= 2 &&
      this.state.educationBranch.trim().length >= 2 &&
      this.state.educationYear != null &&
      this.state.personalInfo.trim().length > 3 &&
      this.state.linkedIn_url.trim().length > 3 &&
      this.state.start_testing.trim().length > 3 &&
      this.state.programming_language.trim().length > 3 &&
      this.state.programming_level != null &&
      this.state.how_u_find_us.trim().length > 3 &&
      this.state.technical_interest.trim().length > 3 &&
      this.state.looking_from_us.trim().length > 3 &&
      this.checks.check1 &&
      this.checks.check2 &&
      this.checks.check3 &&
      this.checks.check4 &&
      this.checks.check5
    ) {
      // this is for additional checks
      if (this.state.isCollegeProject) {
        if (
          (this.state.git_url.length >= 3 &&
            this.state.video_software_url.length >= 3) ||
          this.state.video_url.length >= 3
        ) {
          console.log("All set");
          return true;
        } else {
          return false;
        }
      } else {
        console.log("All set");
        return true;
      }
    } else {
      return false;
    }
  }

  // function to handle the radio options
  onRadioChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    switch (name) {
      case "college-projects":
        if (val === "yes") {
          this.setState({ isCollegeProject: true });
        } else {
          this.setState({ isCollegeProject: false });
        }
        break;
      case "project-type":
        if (val === "hardware") {
          this.setState({ isHardware: true });
        } else {
          this.setState({ isHardware: false });
        }
        break;
      default:
        break;
    }
    this.setState({ isEnabled: this.setButton() });
  };

  handleChangeSelect = (event) => {
    this.setState({ programming_level: event.target.value });
    this.setState({ isEnabled: this.setButton() });
  };

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
      "<br> <br> <b>Q3.a college </b> <br>" +
      this.state.educationCollege +
      "<br> <br> <b>Q3.b course </b> <br>" +
      this.state.educationCourse +
      "<br> <br> <b>Q3.c branch </b> <br>" +
      this.state.educationBranch +
      "<br> <br> <b>Q3.d year of pass out </b> <br>" +
      this.state.educationYear.getFullYear() +
      "<br> <br> <b>Q4 A little bit about yourself</b> <br>" +
      this.state.personalInfo +
      "<br> <br> <b>Q5 Have you done any projects outside of college?</b> <br>" +
      (this.state.isCollegeProject ? "Yes" : "No");

    if (this.state.isCollegeProject) {
      Answer +=
        "<br> <br> <b>Q5.1 What projects have you done outside of college?</b> <br>" +
        this.state.projects_outside +
        "<br> <br> <b>Q5.2 Hardware or software radio button</b> <br>" +
        (this.state.isHardware ? "Hardware" : "Software");

      if (this.state.isHardware) {
        Answer +=
          "<br> <br> <b>Q5.2.a (if hardware) Link to a Video of a working hardware project</b> <br>" +
          this.state.video_url;
      } else {
        Answer +=
          "<br> <br> <b>Q5.2.a (if software) GitHub profile</b> <br>" +
          this.state.git_url +
          "<br> <br> <b>Q5.2.b (if software) Link to a Video of a working software project</b> <br>" +
          this.state.video_software_url;
      }
    }

    Answer +=
      "<br> <br> <b>Q6 LinkedIn profile</b> <br>" +
      this.state.linkedIn_url +
      "<br> <br> <b>Q7 What do you know about testing?</b> <br>" +
      this.state.about_testing +
      "<br> <br> <b>Q8 Would you like to start your career in software testing? Why or why not?</b> <br>" +
      this.state.start_testing +
      "<br> <br> <b>Q9 Level of programming</b> <br>" +
      this.state.programming_level +
      "<br> <br> <b>Q9.1 What languages do you code in?</b> <br>" +
      this.state.programming_language +
      "<br> <br> <b>Q10 How did you find out about us?</b> <br>" +
      this.state.how_u_find_us +
      "<br> <br> <b>Q11 What are you looking for from this program?</b> <br>" +
      this.state.looking_from_us +
      "<br> <br> <b>Q12 What are your technical interests?</b> <br>" +
      this.state.technical_interest;

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
                Enter all your education detail expanding the Education{imp}
              </label>

              <Collapsible trigger={<a href="">Education</a>}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 15,
                  }}
                >
                  <label>College{imp}</label>
                  <input
                    id="education_college"
                    data-testid="college"
                    className="input-text"
                    type="text"
                    value={this.state.educationCollege}
                    ref={this.state.educationCollege}
                    onChange={this.handleChange}
                  />

                  <label>Course{imp}</label>
                  <input
                    id="education_course"
                    className="input-text"
                    data-testid="course"
                    type="text"
                    value={this.state.educationCourse}
                    onChange={this.handleChange}
                  />

                  <label>Branch{imp}</label>
                  <input
                    id="education_branch"
                    data-testid="branch"
                    className="input-text"
                    type="text"
                    value={this.state.educationBranch}
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
                </div>
              </Collapsible>

              <label>
                A little bit about yourself {imp}
                <textarea
                  id="personalInfo"
                  className="input-text"
                  data-testid="personalInfo"
                  type="text"
                  value={this.state.personalInfo}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Have you done any projects outside of college? {imp}
                <br />
                <div onChange={this.onRadioChange}>
                  <label>
                    <input type="radio" value="yes" name="college-projects" />
                    &nbsp; Yes
                  </label>

                  <label>
                    <input type="radio" value="no" name="college-projects" />{" "}
                    &nbsp; No
                  </label>
                </div>
                <br />
              </label>
              {this.state.isCollegeProject && (
                <div>
                  <label>
                    What projects have you done outside of college? {imp}
                    <textarea
                      id="projects_outside"
                      className="input-text"
                      type="text"
                      value={this.state.projectOutside}
                      onChange={this.handleChange}
                    />
                  </label>

                  <label>
                    What is your project related to? {imp}
                    <br />
                    <div onChange={this.onRadioChange}>
                      <input
                        type="radio"
                        value="hardware"
                        name="project-type"
                      />
                      Hardware
                      <br />
                      <input
                        type="radio"
                        value="software"
                        name="project-type"
                      />
                      Software
                    </div>
                  </label>
                  {!this.state.isHardware ? (
                    <div>
                      <label>
                        GitHub profile {imp}
                        <input
                          id="github"
                          className="input-text"
                          type="text"
                          value={this.state.git_url}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label>
                        Link to a Video of a working software project {imp}
                        <input
                          id="video_software"
                          className="input-text"
                          type="text"
                          value={this.state.video_software_url}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                  ) : (
                    <label>
                      Link to a Video of a working hardware project {imp}
                      <input
                        id="video"
                        className="input-text"
                        type="text"
                        value={this.state.video_url}
                        onChange={this.handleChange}
                      />
                    </label>
                  )}
                </div>
              )}

              <label>
                LinkedIn profile {imp}
                <input
                  id="linkedIn"
                  data-testid="linkedIn"
                  className="input-text"
                  type="text"
                  value={this.state.linkedIn_url}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                What do you know about testing? {imp}
                <textarea
                  id="testing-knowledge"
                  data-testid="testing"
                  className="input-text"
                  type="text"
                  value={this.state.about_testing}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Would you like to start your career in software testing? Why or why not?{imp}
                <textarea
                  id="software-testing"
                  data-testid="likeToTesting"
                  className="input-text"
                  type="text"
                  value={this.state.start_testing}
                  onChange={this.handleChange}
                />
              </label>

              <label
                data-testid="programs"
                htmlfor="selectId"
                style={{ width: "fit-content" }}
              >
                <label htmlFor="programs">Level of programming {imp}</label>
                <select
                  id="selectId"
                  data-testid="select"
                  defaultValue="Select...."
                  onChange={this.handleChangeSelect}
                >
                  <option data-testid="select-option" value="beginner">
                    Beginner
                  </option>
                  <option data-testid="select-option" value="intermediate">
                    Intermediate
                  </option>
                  <option data-testid="select-option" value="expert">
                    Expert
                  </option>
                </select>
              </label>

              <label>
                What languages do you code in? {imp}
                <input
                  id="languages"
                  className="input-text"
                  data-testid="programmingLang"
                  type="text"
                  value={this.state.programming_language}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                How did you find out about us? {imp}
                <input
                  id="find-us"
                  data-testid="findUs"
                  className="input-text"
                  type="text"
                  value={this.state.how_u_find_us}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                What are you looking for from this program? (max 100 chars)
                {imp}
                <input
                  id="looking-for"
                  data-testid="lookingFor"
                  className="input-text"
                  type="text"
                  value={this.state.looking_from_us}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                What are your technical interests? {imp}
                <input
                  id="technical-interest"
                  data-testid="techInterest"
                  className="input-text"
                  type="text"
                  value={this.state.technical_interest}
                  onChange={this.handleChange}
                />
              </label>

              <label>Do you understand that <small><a href="/#before-you-apply">[learn more]</a></small>:</label>

              <div>
                <label className="container" data-testid="check1">
                  fully remote{" "}
                  <input
                    type="checkbox"
                    id="check1"
                    onChange={this.handleInputChange}
                  />{" "}
                  {imp}
                  <span className="checkmark"></span>
                </label>

                <label className="container" data-testid="check2">
                  {" "}
                  not for everyone{" "}
                  <input
                    type="checkbox"
                    id="check2"
                    onChange={this.handleInputChange}
                  />{" "}
                  {imp}
                  <span className="checkmark"></span>
                </label>

                <label className="container" data-testid="check3">
                  {" "}
                  fast paced{" "}
                  <input
                    type="checkbox"
                    id="check3"
                    onChange={this.handleInputChange}
                  />{" "}
                  {imp}
                  <span className="checkmark"></span>
                </label>

                <label className="container" data-testid="check4">
                  {" "}
                  no placement guarantee{" "}
                  <input
                    type="checkbox"
                    id="check4"
                    onChange={this.handleInputChange}
                  />{" "}
                  {imp}
                  <span className="checkmark"></span>
                </label>

                <label className="container" data-testid="check5">
                  {" "}
                  no money back{" "}
                  <input
                    type="checkbox"
                    id="check5"
                    onChange={this.handleInputChange}
                  />{" "}
                  {imp}
                  <span className="checkmark"></span>
                </label>
              </div>
              {!this.state.isEnabled ? (
                <span className="required">
                  please fill all the required* fields(min 4 characters each) to
                  submit your application <br />{" "}
                </span>
              ) : null}

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
