const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {

  try {

    const userMessage = req.body.message.toLowerCase();

    let response = "";

    if (userMessage.includes("hello")) {
      response = "Hello! Welcome to SSUET AI Assistant 👋";
    }

    else if (userMessage.includes("admission")) {
      response = "Admissions are currently open at SSUET.";
    }

    else if (userMessage.includes("fee")) {
      response = "Please visit the accounts department for updated fee structure.";
    }

    else if (userMessage.includes("event")) {
      response = "Upcoming event: TechFest will be held next month at SSUET.";
    }

    else if (userMessage.includes("department")) {
      response = "SSUET offers CE, CS, SE, EE and many other departments.";
    }

   else if (userMessage.includes("helpline")) {
  response = "SSUET Helpline: +92-21-34988000";
}

else if (userMessage.includes("contact")) {
  response = "You can contact SSUET at +92-21-34988000";
}

    else if (userMessage.includes("bye")) {
      response = "Goodbye! Have a great day 👋";
    }

    else {
      response = "Sorry, I am still learning 😅";
    }

    res.json({
      reply: response
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      reply: "Error getting response"
    });
  }
});

app.listen(3000, () => {

  console.log("Server running on port 3000");
});