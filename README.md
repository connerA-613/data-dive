# DataDive: Master Your Technical Interview 📊

**DataDive** is a full-stack web application built with **Next.js** that helps users prepare for data analyst technical and behavioral interviews. It provides AI-generated interview questions and tailored feedback to improve performance and confidence.

## 🚀 Features

- **AI-Powered Interview Practice** – Generate realistic technical and behavioral interview questions using OpenAI's API.
- **Interactive Feedback** – Receive helpful prompts and feedback based on user responses.
- **Session Management** – Track answers and review previous sessions.
- **Responsive UI** – Built with a user-friendly design optimized for all screen sizes.

## 🛠️ Tech Stack

- **Next.js (React Framework)**
- **JavaScript / TypeScript**
- **OpenAI API**
- **CSS Modules / Tailwind CSS** (depending on final styling)
- Optional: **Supabase**, **Firebase**, or **Prisma** if integrated for auth or storage

## 📁 Project Structure

```
data-dive/
│
├── public/                 # Static files and assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Route-based pages
│   ├── styles/             # Global and modular styles
│   ├── utils/              # Utility functions (e.g., OpenAI integration)
│   └── app/                # (If using App Router in Next 13+)
├── .env.local              # Environment variables (OpenAI key, etc.)
├── package.json            # Project metadata and scripts
├── next.config.js          # Next.js configuration
└── README.md
```

## 🧠 How It Works

1. **User begins a session** and chooses between technical or behavioral interview types.
2. The app uses the **OpenAI API** to generate questions and evaluate answers.
3. Responses are optionally stored or scored.
4. The user is given feedback and can review their performance.

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- OpenAI API Key

### Installation

```bash
git clone https://github.com/connerA-613/data-dive.git
cd data-dive
npm install
```

### Setup Environment Variables

Create a `.env.local` file in the root and add your OpenAI API key:

```env
OPENAI_API_KEY=your-key-here
```

### Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to use the app.

## 📸 Screenshots

_Add demo GIFs or screenshots of question flow and result page._

## 🧑‍💻 Author

**Conner Armour**  
[GitHub](https://github.com/connerA-613) · [LinkedIn](https://www.linkedin.com/in/conner-armour/)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
