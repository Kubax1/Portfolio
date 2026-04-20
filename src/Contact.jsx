import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import axios from "axios";
import classes from "./GetInTouch.module.css";
import { IoIosSend } from "react-icons/io";
export function GetInTouch() {
  const form = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const Subject = form.current["Subject"].value;
    const Email = form.current["Email"].value;
    const Message = form.current["Message"].value;

    if (!validateEmail(Email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    if (Subject.length === 0 || Email.length === 0 || Message.length === 0) {
      setError("All fields are required.");
      setMessage("");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        Subject,
        Email,
        Message,
      });
      if (response.status === 200) {
        form.current.reset();
        setMessage("Message sent successfully!");
      } else {
        setError("Failed to send message. Please try again.");
        setMessage("");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      setMessage("");
    }
  };

  return (
    <>
      <div className={classes.ContactBlock}>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <Text fw={700} className={classes.title}>
            Contact me
          </Text>
          <div className={classes.formButtons}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                id="Subject"
                name="Subject"
                label="Subject"
                placeholder="Job Offer"
                required
              />
              <TextInput
                id="Email"
                name="Email"
                label="Email"
                placeholder="name@example.com"
                required
              />
            </SimpleGrid>
          </div>
          <Textarea
            className={classes.Textarea}
            mt="md"
            id="Message"
            name="Message"
            label="Message"
            placeholder="Please include all relevant information"
            minRows={4}
            required
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" className={classes.control}>
              Send Message &nbsp; <IoIosSend />
            </Button>
          </Group>
          <div style={{ height: "24px", marginTop: "8px" }}>
            {error && (
              <p style={{ color: "#e03131", margin: 0, fontSize: "18px" }}>
                {error}
              </p>
            )}
            {!error && message && (
              <p style={{ color: "#2f9e44", margin: 0, fontSize: "18px" }}>
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
      <br></br>
    </>
  );
}
export default GetInTouch;
