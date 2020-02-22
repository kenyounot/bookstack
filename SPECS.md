- Please build out a C.R.U.D full-stack application
- The goal is to build a BookClub application:
  users should be able to register and login to maintain a list of personal favorite books.
  user should be able to upload, update and delete books, along with any book details (author, genre, etc..) and notes on the reading material.
  please allow for the user to update the book object with a personal list of notes that they might want to add along the way as they read it.
- Feel free to choose a tech stack that you are comfortable or familiar with.
- Code comments would be appreciated and encouraged. As always, code styling/architecture will be analyzed.

Bonus: deployment; UI styling; intuitive navigation; searching for preexisting books; user to user interaction.

## User

- Name
- email
- password
- has_many books

## Book

- Title
- Summary
- belong_to user
- belongs_to author
- belongs_to genre
- has_many notes

## Note

- Date
- Content
- belong_to book
