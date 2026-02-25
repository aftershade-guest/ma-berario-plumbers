# MA Berario Plumbers & Electricians Landing Page

A high-converting, professional landing page for **MA Berario Plumbers & Electricians**, a 24/7 emergency service provider in Randburg. This application features a modern, responsive design and an integrated AI assistant to help customers with instant troubleshooting and estimates.

## 🚀 Features

- **Modern UI/UX**: Built with React and Tailwind CSS for a clean, professional look.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **AI Assistant**: Integrated **Google Gemini** powered chatbot (`AIAssistant.tsx`) to answer customer queries and provide preliminary estimates.
- **Service Showcase**: Detailed sections for plumbing and electrical services.
- **Trust Indicators**: Customer testimonials, statistics, and certification highlights.
- **Contact Integration**: Easy-to-access contact forms and emergency call buttons.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai)

## 📦 Installation & Setup

1. **Clone the repository** (if applicable) or download the source code.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 🏗️ Project Structure

- `/src`: Source code
  - `/components`: Reusable UI components (Hero, Navbar, Services, etc.)
  - `/services`: API integrations (Gemini AI service)
  - `App.tsx`: Main application component
  - `constants.tsx`: Global constants and configuration
- `vite.config.ts`: Vite configuration

## 📄 License

This project is proprietary and intended for MA Berario Plumbers & Electricians.
