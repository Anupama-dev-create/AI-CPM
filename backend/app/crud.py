from sqlalchemy.orm import Session
from app import models, schemas

def create_interaction(db: Session, interaction: schemas.InteractionCreate):

    new_interaction = models.Interaction(
        doctor_name=interaction.doctor_name,
        interaction_type=interaction.interaction_type,
        date=interaction.date,
        time=interaction.time,
        attendees=interaction.attendees,
        topics=interaction.topics,
        materials=interaction.materials,
        samples=interaction.samples,
        sentiment=interaction.sentiment,
        outcome=interaction.outcome,
        follow_up=interaction.follow_up,
        summary=interaction.summary
    )

    db.add(new_interaction)
    db.commit()
    db.refresh(new_interaction)

    return new_interaction