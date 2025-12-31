TicketsGrid 🎬
A production-grade interactive theater seat booking system built with React and Redux Toolkit.

This project demonstrates complex "visual logic" handling, ensuring high performance through State Normalization and Architecture Patterning rather than simple array manipulation.

⚡ Key Engineering Features
Normalized State Architecture: Instead of traversing nested arrays (O(n)), the Redux store uses a flat lookup table (O(1)) for seat data. This allows for instant updates without re-rendering the entire grid.

Decoupled Business Logic: Pricing rules (tier vs price) and Layout configuration (rows vs columns) are separated from the UI components, allowing business rules to change without breaking the frontend.

Service Layer Pattern: Data fetching is abstracted into a Service Layer (simulating an asynchronous API response with Promises), separating data fetching from data rendering.

Computed State (Selectors): The "Total Price" is not stored in the database; it is calculated on-the-fly using memoized Redux selectors to ensure the cart is always in sync with the selection.

Optimistic UI Updates: Visual feedback (Seat Selection) is instant, managed via immutable state updates using Redux Toolkit (Immer).

🛠 Tech Stack
Core: React (Vite), JavaScript (ES6+)

State Management: Redux Toolkit (Slices, Thunks)

Styling: Tailwind CSS, clsx & tailwind-merge for conditional class logic

Icons: Lucide React

🚀 Getting Started
Clone the repository:

Bash

git clone https://github.com/yourusername/ticketsgrid.git
Install dependencies:

Bash

cd ticketsgrid
npm install
Run the development server:

Bash

npm run dev
🧠 Project Structure (Feature-Based)
Plaintext

src/
├── app/            # Store configuration
├── config/         # Business Rules (Pricing, Limits)
├── features/       # Feature Logic (Slices, Components)
│   └── booking/    # The Booking Domain
├── services/       # Mock API / Data Generation
└── common/         # Reusable UI Components
🔮 Future Improvements
Backend Integration: Replace the Mock Service with a Node/Express REST API.

Concurrency: Implement WebSockets to handle real-time seat locking (preventing double bookings).

Accessibility: Implement Roving Tab Index for full keyboard navigation support.