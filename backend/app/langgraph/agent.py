from typing import TypedDict

from langgraph.graph import StateGraph, END

from app.ai.tools import log_interaction


class AgentState(TypedDict):
    user_input: str
    result: dict


def extract_information(state: AgentState):
    data = log_interaction.invoke(
        {
            "user_input": state["user_input"]
        }
    )

    return {
        "result": data
    }


builder = StateGraph(AgentState)

builder.add_node("extract_information", extract_information)

builder.set_entry_point("extract_information")

builder.add_edge("extract_information", END)

graph = builder.compile()