# API Route: Recieves chat messages
from fastapi import APIRouter
from app.schemas.chat_schemas import ChatRequest, ChatResponse
from app.services.chat_service import process_message

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    response = await process_message("user123", request.message)
    return ChatResponse(response=response)