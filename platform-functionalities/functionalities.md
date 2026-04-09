# Current platform functionalities

### Light/Dark theme support
* The platform supports switching from light to dark mode
![DarkHomepage](./assets/home-dark.png)
![LightHomepage](./assets/home-light.png)

### Account creation
* Login functionality - account stored in db and password securely hashed \
![Login](./assets/login.png)
* Register functionality - account creation and also stored in db with password securely hashed \
![Register](./assets/register.png)

### Theory section
* Six theory sections from where the user can learn
* TODO: have to add buttons to end of each section for the user to navigate to the quiz
![Theory](./assets/section-theory.png)

### Quiz section
* Users can access quizzes for each section \
![QuizPassed](./assets/quiz-pass.png)
* If the user is logged in the quiz progress is saved and displayed on their personal page
![QuizProgress](./assets/quiz-progress.png)
* Users can only access next quiz if they successfully passed the previous one, else is blocked \
![QuizLocked](./assets/quiz-locked.png)
* Upon successfully passing all quizzes, the user is redirected to a "congratulations" page (to do)

### Coding exercise sandbox
* The user can practice and apply theory concepts in a virtual Java sandbox implemented via Judge0 API and Monaco Editor
![Coding](./assets/codingEx.png)

### Flashcard section
* The users can create, delete custom flashcards (persistent) only if logged in \
![Flashcard](./assets/flashcardQA.gif)

### Resources page
![Resources](./assets/resources.png)
* A page with useful resources such as:
  * Links
  * Books
  * Official Documentation
  * Exercise Platforms

### Feedback page
* On this page users can leave feedback which will be displayed on the platform only if the user is logged in
![Feedback](./assets/feedback.png)