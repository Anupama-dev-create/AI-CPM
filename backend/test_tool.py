from app.ai.tools import log_interaction

result = log_interaction.invoke({
    "user_input":
"""
Met Dr Sharma today.

Discussed CardioX.

Doctor liked efficacy.

Shared brochure.

Requested samples.

Follow-up next Tuesday.
"""
})

print(result)