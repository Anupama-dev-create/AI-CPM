import json
import re

EMPTY_RESPONSE = {
    "doctor_name": "",
    "interaction_type": "",
    "date": "",
    "time": "",
    "attendees": "",
    "topics": "",
    "materials": "",
    "samples": "",
    "sentiment": "",
    "outcome": "",
    "follow_up": "",
    "summary": "",
}

def parse_llm_response(response: str):
    try:
        # Remove markdown code fences
        response = response.strip()

        response = re.sub(r"^```json", "", response, flags=re.IGNORECASE)
        response = re.sub(r"^```", "", response)
        response = re.sub(r"```$", "", response)

        response = response.strip()

        return json.loads(response)

    except Exception:
        pass

    try:
        match = re.search(r"\{[\s\S]*\}", response)

        if match:
            return json.loads(match.group())

    except Exception:
        pass

    return EMPTY_RESPONSE