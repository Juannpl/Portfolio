import React from "react";
import "./Contact.css";
import "../../App.css";
import Button from "../button/Button";
import Input from "../input/Input";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title" id="contact">
        <h2>Contact.</h2>
      </div>
      <div className="contactFormParent">
        <form className="contactForm" action="" method="POST">
          <div class="form-group">
            <div>
              <Input
                wild="text"
                appellation="firstName"
                me="firstName"
                place="Nom"
              />
              <Input
                wild="text"
                appellation="lastName"
                me="lastName"
                place="Prénom"
              />
              <Input
                wild="email"
                appellation="email"
                me="email"
                place="Email"
              />
              <Input
                wild="tel"
                appellation="phone"
                me="phone"
                place="Télephone"
              />
            </div>
            <textarea
              placeholder="Ecrivez votre message ici..."
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="btnSubmit">
            <Button name="ENVOYER" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
