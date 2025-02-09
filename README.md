# Tic-Tac-Toe Game - React

This is a simple Tic-Tac-Toe game built with React. It includes features like time travel, where players can jump to previous moves.

## Components

### 1. `Square` Component

The `Square` component represents each individual square on the Tic-Tac-Toe board. It renders a button element that can show either 'X', 'O', or remain empty (`null`) depending on the current state.

- **Functionality**:
  - Displays the current value of the square (`X`, `O`, or `null`).
  - When clicked, it triggers the `onSquareClick` function to update the game state.

- **Usage**:
  - Used in the `Board` component to create the 3x3 grid of squares.

---

### 2. `Board` Component

The `Board` component is responsible for rendering the grid of 9 squares (3x3) and managing the main game logic, such as determining whose turn it is and checking for a winner.

- **Functionality**:
  - Handles player clicks on the squares.
  - Displays the current game status (e.g., "Next Player: X" or "Winner: O").
  - Updates the board state and checks if there is a winner after every move.

- **Usage**:
  - It uses the `Square` component for each square in the 3x3 grid.
  - Accepts props like `xIsNext`, `squares`, and `onPlay` to interact with the game state.

---

### 3. `App` Component

The `App` component is the root of the game application. It manages the overall game state, including tracking the history of moves and determining the current player.

- **Functionality**:
  - Manages the game's state, including `history` and `currentMove`.
  - Renders the `Board` component and the list of past moves for the time travel feature.
  - Handles state updates when players make a move and allows players to jump to any previous move.

- **Usage**:
  - The main container of the game logic, keeping track of board history and rendering the UI.

---

## Props

### 1. `Square` Component Props

- **`value`** (string): 
  - The value to display in the square: either `'X'`, `'O'`, or `null` (empty).
  
- **`onSquareClick`** (function): 
  - A function that is called when the square is clicked. It is responsible for updating the game state by marking the square.

### 2. `Board` Component Props

- **`xIsNext`** (boolean): 
  - A boolean value that indicates whether it's player 'X' or player 'O' turn. It is derived from the `currentMove` index and determines the next player.
  
- **`squares`** (array): 
  - An array representing the current state of the board. It contains 9 values (`'X'`, `'O'`, or `null`), each corresponding to a square on the board.
  
- **`onPlay`** (function): 
  - A function that is called when a player makes a move. It updates the game state by passing the new board state to the parent component (`App`).

### 3. `App` Component Props

- The `App` component does not directly receive props, but it passes down state and functions as props to the `Board` and `Square` components.

---

## State

### 1. `App` Component State

- **`history`** (array): 
  - An array that stores the history of the board states at each move. The first element is the initial empty board, and each subsequent element represents the state after a move. This enables the time travel feature.

- **`currentMove`** (number): 
  - A number that tracks the index of the current move in the `history` array. This helps in determining which board state should be displayed.

