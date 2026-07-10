from app.ai.groq_client import get_llm

llm = get_llm()

response = llm.invoke("Say Hello")

print(response.content)