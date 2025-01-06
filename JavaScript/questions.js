// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "fundamental nursing",
    questions: [
      {
        question: "The client in the intensive care department has an N/G tube for continuous feedings. The nurse is preparing to administer Nifedipine XL via the tube. Which procedure should the nurse follow?",
        options: ["Crush the medication and dissolve in water.", "Administer and flush N/G tube.", "Give the medication orally.", "Do not administer medication and inform."],
        correctAnswer: 0,
      },
      {
        question: "Which action by the nurse in charge is essential when cleaning the area around a Jackson-Pratt wound drain?",
        options: ["Cleaning from the center outward in a circular motion.", "Cleaning from periphery towards center in circular motion.", "Cleaning briskly around the site from left to right.", "Cleaning briskly around the site from right to left."],
        correctAnswer: 0,
      },
      {
        question: "What nursing action will most help a client obtain maximum benefits after postural drainage?",
        options: ["Administer PRN oxygen", "Place the client in a sitting position", "Encourage the client to cough deeply", "Encourage the client to rest for 30 minutes"],
        correctAnswer: 2,
      },
      {
        question: "During the first 36 hours after the insertion of chest tubes, while assessing the function of a chest drainage system, the nurse identifies that the water in the underwater seal tube is not moving. What initial action should the nurse take?",
        options: ["Turn the patient to the unaffected side", "Check tube to ensure that it is not kinked", "Inform the physician", "Record patient’s vital signs immediately"],
        correctAnswer: 1,
      },
      {
        question: "A 2-year-old child is placed in Bryant traction for treatment of a fractured femur. The nurse develops a plan of care for the child. Which of the following is not a component of the plan?",
        options: ["Place the child in a supine position", "Place the child supine with legs flexed slightly less than 90 degrees", "Ensure that sacrum is resting on mattress", "Ensure that use of a footplate to keep the traction straps away from child’s ankles"],
        correctAnswer: 1,
      },
      {
        question: "What is 'Halitosis' commonly known as?",
        options: ["Headache", "Blood Pressure", "Bad breath", "Flu"],
        correctAnswer: 2,
      },
      {
        question: "Electrocardiograph (ECG) is used to measure ________.",
        options: ["Blood Count", "Heart Beat", "Temperature", "Electricity"],
        correctAnswer: 1,
      },
      {
        question: "Suitable position for rectal examination is:",
        options: ["Prone position", "Lithotomy position", "Dorsal recumbent position", "Sims position"],
        correctAnswer: 3,
      },
      {
        question: "The last preoperative assessment of a client going for elective splenectomy will be",
        options: ["Name band", "Signed consent", "Empty bladder", "Vital signs"],
        correctAnswer: 3,
      },
      {
        question: "The activity not recorded by pulse oximeter?",
        options: ["Pulse", "Oxygen", "ECG changes", "SpO2%"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is the most important initial care when chemical burn is suspected?",
        options: ["Immediately cover the burn area", "Remove all the dressings", "Provide the calm environment", "Excessive flushing with water for 20-30 minutes"],
        correctAnswer: 3,
      },
      {
        question: "How long should a nurse wait after taking cold milk for recording oral temperature?",
        options: ["5 to 10 mts", "10 to 20 mts", "20 to 30 mts", "30 to 40 mts"],
        correctAnswer: 2,
      },
      {
        question: "Hospital acquired infection are also known as ?",
        options: ["Nosocomial infections", "Primary infection", "Iatrogenic infection", "Idiopathic infection"],
        correctAnswer: 0,
      },
      {
        question: "The Fifth Vital sign is",
        options: ["Mean arterial pressure", "ABG analysis", "SaO", "Pain"],
        correctAnswer: 3,
      },
      {
        question: "How many moments of hand hygiene have been laid down by WHO?",
        options: ["7", "8", "6", "5"],
        correctAnswer: 3,
      },
      {
        question: "A client has been admitted to a nursing home, and the nurse completes an assessment. Which finding might lead the nurse to suspect a nutritional alteration?",
        options: ["Shiny hair", "Ridged nails", "Moist conjunctiva", "Eye clear"],
        correctAnswer: 1,
      },
      {
        question: "A patient asks you what vitamin is best for eye sight. Your response is",
        options: ["Vitamin A", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        correctAnswer: 0,
      },
      {
        question: "According to Maslows hierarchy of human needs, the highest level is",
        options: ["Safety and security", "Belongingness and affection and esteem and self-respect", "Self-actualization", "Physiologic needs"],
        correctAnswer: 2,
      },
      {
        question: "All the following are Patients responsibilities, except",
        options: ["Complying with instructions", "Give different kind of care", "Following hospital rules and regulations", "Providing information"],
        correctAnswer: 1,
      },
      {
        question: "An instrument placed against a patients chest to hear both lung and heart sounds.",
        options: ["otoscope", "sphygmomanometer", "telescope", "stethoscope"],
        correctAnswer: 3,
      },
      {
        question: "Objective data might include",
        options: ["Complaint of dizziness.", "An evaluation of blood pressure.", "None of the above", "Chest pain."],
        correctAnswer: 1,
      },
      {
        question: "Changes that occur in musculoskeletal system due to immobility",
        options: ["Change in calcium metabolism with hyper calcium result in renal calculi", "Alteration in calcium,fluid and electrolyte", "Non of the above", "decrease muscle endurance, strength and mass"],
        correctAnswer: 3,
      },
      {
        question: "Development of an infection occurs in a cycle that depends on the presence of all the following elements except",
        options: ["Source for pathogen growth", "Health care worker", "A portal of exit, a mode of transmission, a susceptible host", "Causative agent, a portal of entry"],
        correctAnswer: 1,
      },
      {
        question: "Non verbal massage is a mode of communication that include the following except",
        options: ["Facial expression", "Gesture", "Touch", "Tone & pitch of voice"],
        correctAnswer: 3,
      },
      {
        question: "The following is the most important purpose of documentation? except",
        options: ["To Reimbursement", "To Quality assurance", "To provide comfort", "To Communication"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "mathematics",
    questions: [
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 × 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 8³?",
        options: ["512", "216", "256", "128"],
        correctAnswer: 0,
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3 + 5 × 4?",
        options: ["20", "22", "24", "23"],
        correctAnswer: 3,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is the perimeter of a square with a side length of 4 cm?",
        options: ["12 cm", "16 cm", "20 cm", "24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is 11²?",
        options: ["121", "131", "141", "111"],
        correctAnswer: 3,
      },
      {
        question: "What is 9 × 12?",
        options: ["105", "110", "108", "120"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 2,
      },
      {
        question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 ÷ 2 + 3?",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 3 × 7 + 2?",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2³ × 3?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 × (5 + 3)?",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 14 × 14?",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 × 15?",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
        options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of (8 + 2) × 3?",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of 50% of 80?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 25 ÷ 5 × 3?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "entertainment",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 2021?",
        options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
        correctAnswer: 0,
      },
      {
        question: "Which superhero is known for saying, 'I am Iron Man'?",
        options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
        correctAnswer: 3,
      },
      {
        question: "Which movie franchise includes a character named Luke Skywalker?",
        options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which artist released the album 'Lover' in 2019?",
        options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to feature Mario?",
        options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the famous line, 'Here's looking at you, kid'?",
        options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Argentina", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Who created the comic book character Spider-Man?",
        options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney animated film features the song 'A Whole New World'?",
        options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
        correctAnswer: 3,
      },
    ],
  },
];
