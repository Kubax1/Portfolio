import express from "express";
import cors from "cors";
import emailjs from "@emailjs/nodejs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { Subject, Email, Message } = req.body;
  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        Subject,
        Email,
        Message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("EmailJS error:", err);
    res.status(500).json({ error: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
