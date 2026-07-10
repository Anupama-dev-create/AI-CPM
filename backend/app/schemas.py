from pydantic import BaseModel

class InteractionCreate(BaseModel):
    doctor_name: str
    interaction_type: str
    date: str
    time: str
    attendees: str
    topics: str
    materials: str
    samples: str
    sentiment: str
    outcome: str
    follow_up: str
    summary: str