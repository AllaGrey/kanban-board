# Task Management Boards

## Project Description

Task Management Boards is a web application for managing tasks, allowing users to create, update, and delete boards with tasks. Each board contains three columns: "To Do," "In Progress," and "Done." Users can add, update, and delete task cards within each column. Additionally, users have the ability to move cards between columns and change their order.

## Tech Stack

- Frontend: React (using only hooks), Redux Toolkit for state management.
- Backend: Express.js with TypeScript.
- Database: MongoDB.
- Testing: No testing is implemented at this stage. Testing algorithms will be developed later.

## Requirements

- Each visitor can create/update/delete boards.
- Each board contains three columns: "To Do," "In Progress," and "Done."
- Each visitor can enter a board ID and load relevant columns with cards (if any exist).
- Each visitor can add/update/delete cards (with a title and description).
- Users can move cards between columns and change their order.
- User authentication is not required. Board management is considered anonymous.

- Frontend: 
  - Live page: [Task Management Boards - Frontend](https://allagrey.github.io/kanban-board/)
  - Repository: [GitHub - Frontend](https://github.com/AllaGrey/kanban-board)
- Backend: 
  - Live page: [Task Management Boards - Backend](https://kanban-board-back.vercel.app/)
  - Repository: [GitHub - Backend](https://github.com/AllaGrey/kanban-board-backend)
 
### Testing Steps

#### Add Board:
1. Click on "Create Board" or similar UI element.
2. The board is created with a default name that can be changed later.

#### Add Cards:
1. After creating a board, click on "Add Card" or similar UI element.
2. Fill in the card details, including title and description.
3. The card will be added to the "ToDo" column or equivalent, depending on settings.

#### Save Without Information:
1. Attempt to save a card without filling in mandatory fields like title.
2. If no information is entered, the application will automatically assign default values to the card's title and description.

#### Edit Cards:
1. Click on the card you want to edit.
2. Modify the necessary data (title, description).
3. Click on "Save" or similar UI element to save the changes.

#### Move Cards:
1. Click and hold the left mouse button on a card.
2. Drag the card to the desired column or position within a column.
3. Release the mouse button to drop the card.

#### Delete Board:
1. While managing a board, click on "Delete Board" or similar UI element.
2. Confirm the deletion of the board in the confirmation window if prompted.

#### Find Board by ID:
1. Enter the board ID you want to find in the search field.
2. Click on "Search" or similar UI element.
3. If the ID is correct and the board exists, it will be loaded with its corresponding columns and cards.

### Possible Improvements

#### Write Tests:
- Implement unit tests and integration tests to ensure code quality and reliability.
- Use testing frameworks suitable for the tech stack, such as Jest for React and TypeScript.

#### Add a Select Dropdown for Existing Boards:
- Implement a dropdown menu to select from existing boards (displaying ID and name).
- Limit the dropdown to show the 10 most recently modified boards.

#### Enhanced Error Handling:
- Implement more detailed error handling using notification systems (e.g., toasts).
- Provide clear and user-friendly error messages for various error scenarios.

#### Add Authentication and Board Deletion Restrictions:
- Implement user authentication to secure the application.
- Restrict board deletion to the author or authenticated users with appropriate permissions.
