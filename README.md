## Getting Started

```bash
$ npm install
$ npm run dev
# or
$ yarn install
$ yarn dev
# or
$ pnpm install
$ pnpm dev
```

## Part 1: Design Doc for Calculator Implementation

### Overview

Inspired by the iPhone's calculator design, this project aims to develop a calculator application using modern NextJS/React-based frontend technology and a NestJS backend. The application performs basic arithmetic, percentage calculations, memory operations, and tracks user history. It also offers user authentication features.

## Calculator Frontend Design Document

### Overview

This project is a calculator application inspired by the iPhone's calculator design. Built using React.js and TypeScript, it provides a user-friendly UI and efficient functionality.

### Tech Stack

- **Framework**: React.js
- **Language**: TypeScript
- **State Management**: React Hooks (`useReducer`, `useState`, `useEffect`)
- **Other Libraries**: `big.js`, `react-query`

### Folder Structure Rationale

The folder structure is organized to isolate different aspects and responsibilities of the application:

- `components`: Holds reusable UI elements, further broken down by feature area (e.g., calculator, navbar).
- `contexts`: Manages global state and provides shared functionality.
- `hooks`: Contains custom React Hooks for managing local component states.
- `pages`: Holds the application's main views.
- `services`: Contains API calls.

### Application Structure

1. **Components**

   - `Calculator`: Root Calculator component
     - `Header`: Displays previous operations or results
     - `Body`: Button interface for digits and operations
     - `History`: Displays past calculations
   - `Navbar`: Navigation bar
   - `Layout`: Main layout wrapper

<br/>

2. **Contexts**

- `AuthContext`: Manages authentication state

<br/>

3. **Hooks**
   - `useCalculator`: Manages calculator state and logic

### Testing

- Tests are available and can be executed using `yarn test`.
