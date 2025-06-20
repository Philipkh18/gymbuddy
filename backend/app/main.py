from typing import Union
from fastapi import FastAPI
from app.api import chat
from fastapi.middleware.cors import CORSMiddleware


# Creates the FastAPI app instance
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Allow requests from only our domain
    allow_origins=['*'],
    allow_credentials=True,
    # Allow any HTTP method (*)
    allow_methods=["*"],
    # Allow headers like authorization (*)
    allow_headers=['*']
)

# Register your routes
app.include_router(chat.router)


@app.get("/")
def read_root():
    return {"olleh ereht" : "Hello World!"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}