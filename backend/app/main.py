
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel


from app.database import Base, engine, get_db
from app.models import Interaction
from app.schemas import InteractionCreate
from app import crud
from app.langgraph.agent import graph

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI CRM Backend")

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI CRM Backend Running Successfully"
    }


@app.post("/interaction")
def create_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db)
):
    result = crud.create_interaction(db, interaction)

    return {
        "message": "Interaction Saved Successfully",
        "id": result.id
    }



class AIRequest(BaseModel):
    text: str


@app.post("/ai/process")
def process_ai(request: AIRequest):
    result = graph.invoke(
        {
            "user_input": request.text
        }
    )

    return result["result"]