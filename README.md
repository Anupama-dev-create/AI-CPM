# 🤖 AI First CRM - HCP Interaction Module

An AI-powered CRM application for Healthcare Professional (HCP) interaction logging. The system allows medical representatives to enter interaction details in natural language, uses AI to extract structured information, auto-fills the CRM form, and stores the interaction in a MySQL database.

---

# 📌 Features

- 🤖 AI-powered interaction logging
- 🧠 Natural language to structured CRM data
- ⚡ LangGraph workflow integration
- 🚀 Groq LLM integration
- 📝 Automatic form filling
- 💾 Save interactions to MySQL database
- 🔄 CRUD functionality
- 📊 Swagger API documentation
- 🌐 Modern React + Material UI interface
- 🗂 Redux Toolkit state management

---

# 🛠 Tech Stack

## Frontend
- React.js
- Redux Toolkit
- Material UI (MUI)
- Axios
- Vite

## Backend
- FastAPI
- SQLAlchemy
- LangGraph
- LangChain
- Groq API
- Pydantic
- Python

## Database
- MySQL
- PyMySQL

---

# 🏗 System Architecture

```
                User
                  │
                  ▼
      React + Material UI Frontend
                  │
                  ▼
          Redux State Management
                  │
                  ▼
            FastAPI Backend
                  │
                  ▼
          LangGraph Workflow
                  │
                  ▼
             Groq LLM
                  │
                  ▼
      Structured JSON Response
                  │
                  ▼
       Auto-fill Interaction Form
                  │
                  ▼
            MySQL Database
```

---

# 🤖 AI Workflow

1. User enters interaction details in natural language.
2. React sends the text to the FastAPI backend.
3. FastAPI invokes the LangGraph workflow.
4. LangGraph uses the Groq LLM to extract structured CRM information.
5. AI returns JSON.
6. Redux updates the application state.
7. The interaction form is automatically populated.
8. User reviews the details and clicks **Save Interaction**.
9. Data is stored in the MySQL database.

---

# 🧰 AI Tools Implemented

The application includes the following AI tools:

1. Log Interaction
2. Edit Interaction
3. Summarize Interaction
4. Suggest Follow-up
5. Search Interaction

---

# 📁 Project Structure

```
AI-CPM/
│
├── backend/
│   ├── app/
│   │   ├── ai/
│   │   ├── langgraph/
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# 🗄 Database

Database Used:

- MySQL

ORM:

- SQLAlchemy

---

# 📸 Application Workflow

- Enter interaction in natural language.
- AI extracts structured information.
- Form is auto-filled.
- User reviews the data.
- Click **Save Interaction**.
- Data is stored in MySQL.

---

# 📚 APIs

### GET /

Returns backend status.

### POST /interaction

Stores interaction details in the database.

### POST /ai/process

Processes natural language interaction using LangGraph and Groq AI.

---

# 🚀 Future Enhancements

- Authentication and user management
- Interaction history dashboard
- Advanced analytics
- Follow-up reminders
- AI-powered insights
- Export interactions to PDF/Excel
- Search and filter interactions

---

# 👩‍💻 Developed By

**Anupama R S**

Final Year B.E. – Computer Science & Engineering

---

# 📄 License

This project was developed as part of an AI CRM Assignment for educational and demonstration purposes.