# TicketsGrid 🎬

A production-grade interactive theater seat booking system built with **React** and **Redux Toolkit**.

This project demonstrates complex "visual logic" handling, ensuring high performance through **State Normalization** and **Architecture Patterning** rather than simple array manipulation.

### ⚡ Key Engineering Features

* **Normalized State Architecture:** Instead of traversing nested arrays (O(n)), the Redux store uses a flat lookup table (O(1)) for seat data. This allows for instant updates without re-rendering the entire grid.
* **Decoupled Business Logic:** Pricing rules (`tier` vs `price`) and Layout configuration (`rows` vs `columns`) are separated from the UI components, allowing business rules to change without breaking the frontend.
* **Service Layer Pattern:** Data fetching is abstracted into a Service Layer (simulating an asynchronous API response with Promises), separating data *fetching* from data *rendering*.
* **Computed State (Selectors):** The "Total Price" is not stored in the database; it is calculated on-the-fly using memoized Redux selectors to ensure the cart is always in sync with the selection.
* **Optimistic UI Updates:** Visual feedback (Seat Selection) is instant, managed via immutable state updates using Redux Toolkit (Immer).

### 🛠 Tech Stack

* **Core:** React (Vite), JavaScript (ES6+)
* **State Management:** Redux Toolkit (Slices, Thunks)
* **Styling:** Tailwind CSS, `clsx` & `tailwind-merge` for conditional class logic
* **Icons:** Lucide React

### 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/ticketsgrid.git](https://github.com/yourusername/ticketsgrid.git)