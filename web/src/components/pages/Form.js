import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [find, setFind] = useState("");
  const [textBox, setTextBox] = useState("");
  const [file, setFile] = useState("");
  const [term, setTerm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Email Address:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          How did you find this website?
          <select
            name="find"
            value={find}
            onChange={(e) => setFind(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">LinkedIn</option>
            <option value="2">Resume</option>
            <option value="3">GitHub</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label>
          Additional Information:
          <textarea
            name="textBox"
            rows="3"
            value={textBox}
            onChange={(e) => setTextBox(e.target.value)}
            placeholder="If you have something you like me to know..."
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          <input
            className="term"
            name="term"
            type="checkbox"
            checked={term}
            onChange={(e) => setTerm(e.target.checked)}
            required
          />
          I agree to the <a href="">terms and conditions</a>
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
