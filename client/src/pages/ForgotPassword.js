import { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={forgotPasswordHandler}>
        <h1>Forgot Password</h1>
        {error && <span>{error}</span>}
        {success && <span>{success}</span>}
        <div>
          <h4>
            Please enter your email address. We will send you a recovery email.
          </h4>
          <FloatingLabel className="form-label" label="Enter Email">
            <Form.Control
              className="form-input"
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
