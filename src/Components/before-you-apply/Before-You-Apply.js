import React, { Component } from "react";
import Fade from "react-reveal";

class BeforeApply extends Component {
  render() {
    return (
      <section id="before-you-apply" data-testid="before-you-apply" >
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <Fade bottom>
              <h4 className="">BEFORE YOU APPLY!</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <p>This training program is <b><u>NOT meant for everyone</u></b>! Please make sure you have read this section carefully before you apply for the training program.</p>
                <ol>
                  <li> Fully remote </li><p>This training program will be fully remote. It takes a lot of discipline and motivation to sit at home for 9 hours/day and 5 day/week.</p>
                  <li> Not for everyone </li><p>The training methodology is geared towards self-starters. So we only accept trainees who have done demoable projects out of their own interest.</p>
                  <li> Fast paced</li><p>We do not spoonfeed. We will be giving you real work and expect you to keep pace with us. You need to be a quick learner to adapt to our fast pace.</p>
                  <li> No placement guarantee </li><p>Unlike other training programs we do NOT include a placement guarantee. We go out of our way to help you with resume reviews, mock interviews, exposure to how the industry works and giving you real world experience. But we will not be bringing in companies to interview and select you. Our training is real, practical and hands-on. We believe that alone should help you land your next job.</p>
                  <li> No money back </li><p>We do not offer refunds if you are unable to complete the program. Please self-assess if you are suitable for this program before you commit to it.</p>
                </ol>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default BeforeApply;
