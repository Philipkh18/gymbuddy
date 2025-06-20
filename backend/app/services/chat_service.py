import requests
from app.core.config import GEMINI_API_KEY, GEMINI_MODEL

async def process_message(user_id: str, message: str) -> str:
    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={GEMINI_API_KEY}"

        payload = {
            "contents": [
                {
                    "parts": [
                        {"text": f"You are GymBuddy, a helpful fitness and nutrition coach. {message}"}
                    ]
                }
            ]
        }

        headers = {
            "Content-Type": "application/json"
        }

        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()

        # Extract the Gemini-generated reply
        reply = response.json()['candidates'][0]['content']['parts'][0]['text']
        return reply

    except Exception as e:
        return f"Something went wrong (Gemini HTTP): {str(e)}"
