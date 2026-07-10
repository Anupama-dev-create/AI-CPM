from app.langgraph.agent import graph

result = graph.invoke(
    {
        "user_input": """
Met Dr Sharma today.

Discussed CardioX.

Shared brochure.

Requested samples.

Follow up next Tuesday.
"""
    }
)

print(result)
