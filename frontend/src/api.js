import axios from "axios";

const API_URL = "http://localhost:8000/chat"; // Ensure this matches your FastAPI URL

export const sendMessageToBackend = async (userId, message) => {
  try {
    const response = await axios.post(API_URL, {
      user_id: userId,
      message: message,
    });
    return response.data.response;
  } catch (error) {
    console.error("❌ API Error:", error);
    return "⚠️ Something went wrong. Try again!";
  }
};