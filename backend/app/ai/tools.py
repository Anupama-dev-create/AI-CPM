from langchain_core.tools import tool

from app.ai.groq_client import get_llm
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.parser import parse_llm_response


@tool
def log_interaction(user_input: str):
    """
    Extract structured interaction data from natural language.
    """

    llm = get_llm()

    prompt = f"""
{SYSTEM_PROMPT}

User Input:

{user_input}
"""

    response = llm.invoke(prompt)

    return parse_llm_response(response.content)


@tool
def edit_interaction(text: str):
    """
    Edit an existing interaction.
    """
    return {
        "status": "Interaction updated",
        "text": text
    }


@tool
def summarize_interaction(text: str):
    """
    Summarize interaction.
    """

    llm = get_llm()

    response = llm.invoke(
        f"Summarize:\n{text}"
    )

    return response.content


@tool
def suggest_follow_up(text: str):
    """
    Suggest follow-up actions.
    """

    llm = get_llm()

    response = llm.invoke(
        f"Suggest next follow up:\n{text}"
    )

    return response.content


@tool
def search_interaction(name: str):
    """
    Search interaction.
    """

    return {
        "message": f"Searching interactions for {name}"
    }