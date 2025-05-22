# The Wild Oasis – Client Web App

> Luxury cabin booking web app built with Next.js, Tailwind CSS, Supabase, and Auth.js.

---

## Overview

**The Wild Oasis** is a modern, user-friendly platform for booking luxury cabins in the heart of nature. Clients can browse available cabins, select their preferred dates using an interactive calendar, and reserve cabins seamlessly. The personalized account area allows users to view, edit, or delete their reservations, and update their profile data. Secure authentication is provided via Google Sign-In.

This project leverages the latest features of Next.js (App Router), Auth.js for authentication, Supabase as a database/backend, and Tailwind CSS for responsive styling.

---

## Features

- **Cabin Booking:** Browse and filter luxury cabins, select dates, and reserve instantly.
- **Calendar Integration:** Easy date picking for booking stays.
- **Account Area:**
  - View, edit, or delete reservations.
  - Update profile data (name, country, etc.).
- **Authentication:** Secure sign-up and login with Google (Auth.js).
- **Modern UI:** Responsive, mobile-first design with Tailwind CSS.
- **Performance:** Uses Next.js server actions, `useSuspense`, `useTransition`, and `useOptimistic` for smooth, real-time UI updates.
- **Database:** Supabase for data storage and real-time functionality.

---

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Auth.js](https://authjs.dev/) (Google provider)
- **Backend/Database:** [Supabase](https://supabase.com/)
- **Advanced React:**  
  - `useSuspense`  
  - `useTransition`  
  - `useOptimistic`

---

## Screenshots

<!-- Replace with your own image paths if needed -->

![Homepage](https://github.com/user-attachments/assets/d36ebf91-8286-4f49-a1c1-764d9bacc208)

![Cabins](https://github.com/user-attachments/assets/7608ea68-68b2-43ee-93f0-2f5092fe356f)

![Profile](https://github.com/user-attachments/assets/6c97bd9a-5918-408f-b261-bfa0a97abd6a)

![Reservations](https://github.com/user-attachments/assets/7120d3c6-12bb-497e-aacd-1a2ab8e99794)


---

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/the-wild-oasis.git
    cd the-wild-oasis
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure environment variables:**
    - Create a `.env.local` file in the root folder.
    - Add your Supabase project credentials and Auth.js configuration:
      ```
      NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
      AUTH_GOOGLE_CLIENT_ID=your_google_client_id
      AUTH_GOOGLE_CLIENT_SECRET=your_google_client_secret
      NEXTAUTH_URL=http://localhost:3000
      ```

4. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.**

---

## Key Learnings

- Implemented a full-stack web app using Next.js (App Router), Auth.js, Supabase, and Tailwind CSS.
- Built responsive UI with modern design principles.
- Used advanced React features (`useSuspense`, `useTransition`, `useOptimistic`) for smooth user experience.
- Integrated Google OAuth for secure, easy authentication.
- Applied best practices in state management, real-time data, and modular component architecture.

---

## Author

Made by [Matin Zomorrodabedi](https://github.com/yourusername)
