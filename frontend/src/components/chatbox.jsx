import { useState, useRef, useEffect } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { sendMessageToBackend } from "../api";

function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "👋 Welcome to GymBuddy! Ask me about workouts or meal plans." },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { role: "user", content: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    const reply = await sendMessageToBackend("user123", inputText);

    const botMessage = { role: "bot", content: reply };
    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #333",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#121212",
      }}
    >
      {/* Chat message area */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.role === "user" ? "#1976d2" : "#333",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: 2,
              maxWidth: "80%",
              boxShadow: 1,
            }}
          >
            {msg.content}
          </Box>
        ))}

        {isTyping && (
          <Box
            sx={{
              alignSelf: "flex-start",
              backgroundColor: "#333",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: 2,
              maxWidth: "80%",
              fontStyle: "italic",
              opacity: 0.7,
            }}
          >
            <CircularProgress size={14} sx={{ mr: 1 }} />
            GymBuddy is typing...
          </Box>
        )}

        <div ref={messagesEndRef} />
      </Box>

      {/* Input section */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          p: 2,
          borderTop: "1px solid #444",
          backgroundColor: "#1e1e1e",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          sx={{
            backgroundColor: "#2a2a2a",
            input: { color: "white" },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          disabled={isTyping}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default ChatBox;
