import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {GrMailOption} from "react-icons/gr";
import {FaPhoneAlt} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="main">
      <h5 className="heading">GET IN TOUCH</h5>

      <div className="contact">
        <div>
        <FaMapMarkerAlt className="logoicon"/>

          {/* <span class="glyphicon glyphicon-map-marker"></span>

      */}

          <h6> ADDRESS</h6>

          <p className="paracontent">
            Welfiled Group Contracting
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;146 Yuma Street
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;denver CO 80223
          </p>
        </div>

        <div>
          <FaPhoneAlt className="logoicon"/>

          <h6>PHONE</h6>

          <p className="paracontent">
            Welfiled Group Contracting
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;303.428.2011 phone
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;303.202.0466 facsmile
          </p>

          <p className="paracontent">
            &nbsp;&nbsp;&nbsp;Welfiled 24/7 Service
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Department
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;303.202.0466 facs
          </p>

          <p className="paracontent">
            Northern Division Office
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;303.428.2011 phone
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;303.202.0466 facsmile
          </p>
        </div>

        <div>
          <GrMailOption className="logoicon"/>

          <h6>EMAIL</h6>

          <p className="paracontent">
            Request for proposal
            <br />
            Info@weifieldgroup.com
          </p>

          <p className="paracontent">
            Electrical service Calls
            <br />
            service@weifieldcontracting.com
          </p>
        </div>
      </div>

      {/* < h5 className="left-section">Message Us</h5> */}

      <div className="contactsection">
        <div className="left-section">
          <h5 className="message">Message Us</h5>

          <p className="belowpara">
            If you wish to be considered for employment at aweilfiled,please do
            not send a message.here- insted,please fill your deatils and sumbit.
          </p>
        </div>

        <div className="formd">
          <form>
            <input
              type="text"
              placeholder=" Enter Your Name "
              className="inputBox"
            ></input>
            <input
              type="email"
              placeholder=" Enter Your Email "
              className="inputBox"
            ></input>

            <input
              type="text"
              placeholder=" Enter Your Phoneno "
              className="inputBox"
            ></input>

            <textarea
              type="textarea"
              cols="30"
              rows="5"
              placeholder=" Enter your comments here"
              className="inputBox"
            ></textarea>

            <button type="submit" className="readbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
