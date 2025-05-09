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
    category: "Principles of Management",
    questions: [
      {
        question: "Which one of these is a not a management function?",
        options: ["Planning", "Organizing", "Directing", "Coordination"],
        correctAnswer: 3,
      },
      {
        question: "Which one of the following is not a key management skills?",
        options: ["Human skills", "Conceptual skills", "Writing skills", "Technical skills"],
        correctAnswer: 2,
      },
      {
        question: "Which management function sets goals and objectives and creates specific plans to achieve them?",
        options: ["Organizing", "Planning", "Controlling", "Directing"],
        correctAnswer: 1,
      },
      {
        question: "Management by Objectives was given by:",
        options: ["Henri Fayol", "Frederick W. Taylor", "Mary Parker Follett", "Peter Drucker"],
        correctAnswer: 3,
      },
      {
        question: "Human relations movement is a part of:",
        options: ["Classical approach", "Quantitative approach", "Behavioral approach", "Contemporary perspective"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following best describes the difference between mainstream and multistream management orientations?",
        options: ["Mainstream focuses on stakeholder welfare, while multistream focuses on profit maximization.", "Mainstream emphasizes profit maximization, while multistream emphasizes multi-stakeholder well-being.", "Both focus solely on profit generation.", "Both are interchangeable terms."],
        correctAnswer: 1,
      },
      {
        question: "Individuals who manage the work of non-managerial employees are known as-",
        options: ["First Line Managers", "Middle Managers", "Top Level Managers", "Operators"],
        correctAnswer: 0,
      },
      {
        question: "Who proposed the ten managerial roles grouped around interpersonal relationships, sharing of information and decision making?",
        options: ["Mintzberg", "Henry Fayol", "Kurt Lewin", "Peter F. Drucker"],
        correctAnswer: 0,
      },
      {
        question: "Which managerial level focuses primarily on translating the organization's strategy into operational tasks?",
        options: ["Top-level managers", "Middle-level managers", "First-line managers", "Board of directors"],
        correctAnswer: 1,
      },
      {
        question: "What happens to the time spent on technical tasks as a manager advances to a higher organizational level?",
        options: ["It increases significantly", "It stays the same", "It decreases", "It becomes the primary focus"],
        correctAnswer: 2,
      },
      {
        question: "As a 'Spokesperson,' the manager's main responsibility is to:",
        options: ["Develop internal communication plans", "Represent the organization to outsiders by sharing important information", "Act as a mediator between team members", "Implement training programs"],
        correctAnswer: 1,
      },
      {
        question: "Statement 1: Future of work demands less control and command. Statement 2: Successful departments and organizations don’t just happen-they are managed.",
        options: ["Statement 1 is true", "Statement 2 is true", "Both the statements are true", "None of the statements is true"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following statements challenges the universality of management?",
        options: ["Different management functions are required in different cultural contexts.", "All organizations must plan, organize, lead, and control.", "Both small and large businesses benefit from management practices.", "Management principles are adaptable to various sectors."],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT one of the eight characteristics of excellent enterprises?",
        options: ["Lean staff", "Close to the customer", "Focus solely on profit maximization", "Autonomy and entrepreneurship"],
        correctAnswer: 2,
      },
      {
        question: "Statement 1: Employees offer challenging, exciting, and creative opportunities for meaningfulness of work. Statement 2: Successful managers often receive monetary rewards for their efforts.",
        options: ["Statement 1 is true, Statement 2 is not true", "Statement 2 is true, Statement 1 is not true", "Both the statements are true", "Both the statements are not true"],
        correctAnswer: 1,
      },
      {
        question: "The unwritten, common rules and perceptions about relationships among people and between people and management form part of-",
        options: ["Social Contract", "Psychological Contract", "People Contract", "Management Contract"],
        correctAnswer: 0,
      },
      {
        question: "The spread of indigenous production with Make in India globally has dramatically altered the business landscape. This is an example of-",
        options: ["Social Forces", "Political Forces", "Environmental Forces", "Technological Forces"],
        correctAnswer: 1,
      },
      {
        question: "Match the following: a.	Classical Approach    i.	Human Relations Movement b.	Behavioural Approach	ii.	Total Quality Management c.     Quantitative Approach	iii.	Contingency View d.	Contemporary Approach	iv.	Scientific Management",
        options: ["a-iv, b-i, c-ii, d-iii", "a-i, b-iv, c-iii, d-ii", "a-ii, b-i, c-iv, d-iii", "a-ii, b-i, c-iii, d-iv"],
        correctAnswer: 0,
      },
      {
        question: "Who proposed time and motion studies concerned with optimum utilization of labour, reducing fatigue, and improving performance by eliminating unnecessary hand and body movements?",
        options: ["Henry Fayol", "F.W. Taylor", "Frank and Lillian Gilbreth", "Elton Mayo"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following options shows the correct match for the management concepts and by whom it is propounded?",
        options: ["Bureaucratic Organization- Max Weber, Hawthorne Studies- Elton Mayo, Theory X,Y- McGregor, System Approach- Chester Barnard", "Bureaucratic Organization- Robert Owen, Hawthorne Studies- Hofstede, Theory X,Y- Mayo, System Approach- Max Weber", "Bureaucratic Organization- McGregor, Hawthorne Studies- Maslow, Theory X,Y- Max Weber, System Approach- Hofstede", "Bureaucratic Organization- Chester Barnard, Hawthorne Studies- McGregor, Theory X,Y- Elton Mayo, System Approach- Max Weber"],
        correctAnswer: 0,
      },
      {
        question: "Statement 1: Entropy is the tendency to run down and die.  Statement 2: Subsystems depend on one another as parts of the system.",
        options: ["Statement 1 is correct.", "Statement 2 is correct.", "Both the statements are correct.", "Both the statements are incorrect."],
        correctAnswer: 2,
      },
      {
        question: "Which of the following does not form part of the popular contingency variables in the contemporary management perspective?",
        options: ["Organizational Size", "Routineness of task technology", "Synergy", "Environmental Uncertainty"],
        correctAnswer: 2,
      },
      {
        question: "The contingency-based view of the organization considers-",
        options: ["Case View & Universalist View", "Case View & Synergistic View", "Universalist View & Synergistic View", "Only Universalist View"],
        correctAnswer: 0,
      },
      {
        question: "What is the primary role of feedback in a systems approach to management?",
        options: ["To identify customer complaints only", "To ensure organizational rules are followed strictly", "To provide information that helps adjust processes and improve performance", "To keep communication one-directional"],
        correctAnswer: 2,
      },
      {
        question: "Name the philosophy devoted to continuous improvement and responding to customers' needs and expectations popularized by Edward Deming and Joseph Juran.",
        options: ["Quality Circle", "Total Quality Management", "Quality Checks", "Optimum Quality Management"],
        correctAnswer: 1,
      },
      {
        question: "Standing plans are the ones that provide guidelines for activities to be performed repetitively. Which among the following is not a standing plan?",
        options: ["Policies", "Rules", "Budget", "Procedures"],
        correctAnswer: 2,
      },
      {
        question: "XYZ company has set the objective of 200,000-unit sales considering the favorable government policy towards digitization of transactions. This is an example of which step of the planning process?",
        options: ["Developing planning premises", "Identifying alternatives", "Objective setting", "Implementing plan"],
        correctAnswer: 0,
      },
      {
        question: "Name the fastest-growing form of environmental scanning that allows managers to anticipate competitors’ actions rather than merely reacting to them.",
        options: ["Competitor Action", "Competitor Intelligence", "Competitive Monitoring", "Competitive Knowledge"],
        correctAnswer: 1,
      },
      {
        question: "Organizations operate in a pluralistic society”. Which of the following options best explains this statement?",
        options: ["Organizations have employees from diverse backgrounds.", "Organizations operate with groups and committees.", "Organizations have multiple agendas and strategies.", "Organizations address multiple interests of the stakeholders."],
        correctAnswer: 3,
      },
      {
        question: "The set of values, beliefs, behaviour, customs, and attitude that helps people understand what the organization stands for, how it operates, and what it considers important is known as:",
        options: ["Corporate Clan", "Inside Stories", "Corporate Culture", "Value System"],
        correctAnswer: 2,
      },
        
        {
          question: "When an organization is in multiple businesses, those individual businesses that are independent and have their own competitive advantage are referred to as",
          options: ["Strategic Business Unit", "Separate Units", "Strategic Intent", "Business Portfolio"],
          correctAnswer: 0,
        },
        {
          question: "Match the following: a.	Core Competency	i.	Value-creating capabilities of organization b.	Capabilities	        ii.	Financial, human, capital, tangible/intangible assets c.	Resources	        iii.	Unique resources that the organization possess d.	Strength	                iv.	Skills and abilities",
          options: ["a-i, b-iv, c-ii, d-iii", "a-ii, b-i, c-iii, d-iv", "a-ii, b-i, c-iv, d-iii", "a-iii, b-iv, c-i, d-ii"],
          correctAnswer: 0,
        },
        {
          question: "Which products would likely be categorized as a 'Star' in the BCG Matrix?",
          options: ["A popular smartphone model in a rapidly growing market", "A declining desktop computer brand in a stagnant market", "A niche product with minimal market share in a growing market", "A well-established soft drink brand in a stable market"],
          correctAnswer: 0,
        },
        {
          question: "Which among the following companies implemented a renewal strategy during a financial crisis?",
          options: ["Apple introducing the iPhone to expand its product line", "General Motors reorganizing and filing for bankruptcy during the 2008 financial crisis", "Amazon launching its Prime service", "Tesla expanding into the energy sector"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following illustrates the 'Threat of Substitutes' in Porter's Five Forces?",
          options: ["A car manufacturer facing competition from bike-sharing apps", "A smartphone company entering the market with a new model", "A technology firm cutting down its prices to gain market share", "A supplier increasing the cost of raw materials"],
          correctAnswer: 0,
        },
        {
          question: "Which forecasting technique is most suitable to predict the effect of DVD players on the sale of VHS players?",
          options: ["Substitution Effect", "Time Series Analysis", "Regression Model", "Econometric Method"],
          correctAnswer: 0,
        },
        {
          question: "Statement 1: Forecasting results are always accurate. Statement 2: Judgement and Causal models are used for long-term forecasting.",
          options: ["Statement 1 is true, Statement 2 is not true", "Statement 2 is true, Statement 1 is not true", "Both the statements are true", "Both the statements are not true"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is an example of succession planning in action?",
          options: ["Promoting a senior manager to a leadership role without prior preparation", "Conducting regular performance reviews for all employees", "Assigning a high-potential employee to shadow a retiring executive", "Outsourcing talent acquisition to an external agency"],
          correctAnswer: 2,
        },
        {
          question: "The Delphi Method is typically used for:",
          options: ["Analyzing past financial performance", "Building consensus on complex issues among experts", "Conducting customer satisfaction surveys", "Creating social media marketing strategies"],
          correctAnswer: 1,
        },
        {
          question: "A retailer uses last year's holiday sales data to predict this year's holiday demand. This is an example of:",
          options: ["Qualitative forecasting", "Casual forecasting", "Time-series forecasting", "Judgmental forecasting"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is an example of the Jury of Opinion method?",
          options: ["A panel of marketing managers estimating future product demand based on market conditions", "A software predicting demand using historical sales data", "A retailer analyzing seasonal trends from past years", "Conducting a survey of customers to gauge preferences"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following demonstrates internal benchmarking?",
          options: ["A company comparing sales performance across its regional offices", "A company studying customer satisfaction metrics of its competitors", "An organization adopting best practices from industry leaders", "A startup setting goals based on leading brands in the market"],
          correctAnswer: 0,
        },
        {
          question: "Although there can be multiple ways an organization can allocate resources to function effectively and efficiently. Which among the following is not an approach for the same?",
          options: ["Scheduling", "Budgeting", "Breakeven analysis", "Regression modelling"],
          correctAnswer: 3,
        },
        {
          question: "Match the following: Types of Budgets	       Description  1. Cash Budget	        a. Estimates the income generated from sales of goods and services during a specific period.  2. Revenue Budget		b. Outlines the costs associated with operations, including fixed and variable expenses.  3. Profit Budget	        c. Focuses on estimating expected cash inflows and outflows to ensure liquidity.  4. Expense Budget	        d. Projects the anticipated net earnings by subtracting estimated costs from revenues.",
          options: ["1-c, 2-a, 3-d, 4-b", "1-b, 2-c, 3-d, 4-a", "1-a, 2-d, 3-b, 4-c", "1-d, 2-b, 3-c, 4-a"],
          correctAnswer: 0,
        },
        {
          question: "What is typically analyzed in scenario planning to create different future scenarios?",
          options: ["A company's existing financial records", "External uncertainties like market trends and regulatory changes", "Current employee performance metrics", "The company’s internal budget allocation for the next fiscal year"],
          correctAnswer: 1,
        },
        {
          question: "A person who only touches the tail of an elephant and describes it as a rope, while another touches the tusk and says it’s a spear, illustrates which concept of perception?",
          options: ["Selective perception", "Sensory adaptation", "Figure-ground perception", "Bottom-up processing"],
          correctAnswer: 0,
        },
        {
          question: "Which psychological concept is closely related to the Pygmalion Effect?",
          options: ["Self-fulfilling prophecy", "Cognitive dissonance", "Confirmation bias", "Loss aversion"],
          correctAnswer: 0,
        },
        {
          question: "Statement 1: Decision-making is influenced by perception.  Statement 2: Decisions are at the core of planning.",
          options: ["Statement 1 is true, Statement 2 is not true", "Statement 2 is true, Statement 1 is not true", "Both the statements are true", "Both the statements are not true"],
          correctAnswer: 2,
        },
        {
          question: "The implementation phase of the decision-making process includes:",
          options: ["Choosing the most expensive alternative", "Putting the selected solution into action and monitoring progress", "Ignoring feedback from stakeholders", "Only evaluating short-term results"],
          correctAnswer: 1,
        },
        {
          question: "What level of managers take the non-programmed decisions that are unstructured and non-routine?",
          options: ["Top-level managers", "Middle-level managers", "Lower-level managers", "Line managers"],
          correctAnswer: 0,
        },
        {
          question: "Managers make decisions logically but are limited by the ability to process the information. This concept is known as:",
          options: ["Satisficing", "Bounded Rationality", "Precedent Thinking", "Logical Thinking"],
          correctAnswer: 1,
        },
        {
          question: "Statement 1: Uncertain decisions require managerial creativity.  Statement 2: Intuitive thinking is promoted by innovation.",
          options: ["Statement 1 is true, Statement 2 is not true", "Statement 2 is true, Statement 1 is not true", "Both the statements are true", "Both the statements are not true"],
          correctAnswer: 0,
        },
        {
          question: "Which stage of Young's creativity process is associated with the 'Eureka!' moment or the sudden realization of a solution?",
          options: ["Preparation", "Illumination", "Incubation", "Verification"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following statements is true about groups and teams?",
          options: ["All teams are groups, but not all groups are teams.", "All groups are teams, but not all teams are groups.", "Groups and teams are interchangeable terms.", "Groups perform better than teams in most situations."],
          correctAnswer: 0,
        },
        {
          question: "Match the following: 1.Role Ambiguity	a. The expectations that others have regarding how a role should be performed.  2. Role Identity	b. Occurs when there is a lack of clarity about one’s job duties or responsibilities. 3. Role Conflict	c. The degree to which an individual understands and accepts the expectations, attitude, and behaviour of their role. 4. Role Expectation	d. When incompatible demands are placed on an individual by different sources.",
          options: ["1-a, 2-d, 3-c, 4-b", "1-b, 2-c, 3-d, 4-a", "1-c, 2-b, 3-a, 4-d", "1-d, 2-a, 3-b, 4-c"],
          correctAnswer: 1,
        },
        {
          question: "Match the following: 1.Joint Venture        a. McDonald's operates globally using this model where it allows others to use its brand.  2.Licensing	        b. Starbucks partnered with PepsiCo to produce ready-to-drink coffee products.  3. Franchising	        c. Disney allows manufacturers to use its characters on its products like toys and clothes. 4. Strategic Alliance d. Tata Motors partnered with Fiat to manufacture and distribute Fiat cars in India.",
          options: ["1-a, 2-b, 3-d, 4-c", "1-b, 2-d, 3-c, 4-a", "1-c, 2-a, 3-b, 4-d", "1-d, 2-c, 3-a, 4-b"],
          correctAnswer: 3,
        },
        {
          question: "Statement 1: Production is dictated by demand and supply in free market economy. Statement 2: Tariffs are taxes levied on the exports.",
          options: ["Statement 1 is true, Statement 2 is not true", "Statement 2 is true, Statement 1 is not true", "Both the statements are true", "Both the statements are not true"],
          correctAnswer: 0,
        },
        {
          question: "Which example best illustrates the communication approach in a high-context cultural setting?",
          options: ["A Chinese family gathers for dinner and relies on unspoken traditions to guide the conversation.", "An American businessperson provides a PowerPoint presentation with detailed instructions.", "A German manager emails a comprehensive agenda for a meeting.", "A British executive insists on written contracts before a deal."],
          correctAnswer: 0,
        },
        {
          question: "Which management style is characterized by minimal interference from the manager and maximum employee autonomy?",
          options: ["Bureaucratic", "Laissez-faire", "Autocratic", "Participative"],
          correctAnswer: 1,
        },
        {
          question: "The Baldrige framework emphasizes a systems perspective. What does this mean?",
          options: ["Focusing exclusively on technology systems in the organization", "Ensuring all components of the organization work cohesively towards common goals", "Prioritizing operational efficiency over strategic alignment", "Focusing only on the customer experience"],
          correctAnswer: 1,
        },
        {
          question: "What differentiates the geocentric approach from other international management approaches?",
          options: ["Focuses only on host-country operations", "Prioritizes hiring based on nationality", "Hires the best talent globally, regardless of origin", "Manages operations with minimal interference from the headquarters"],
          correctAnswer: 2,
        },
        {
          question: "What type of knowledge resides in the individual through their learnings, experience, and observations?",
          options: ["Tacit Knowledge", "Explicit Knowledge", "Procedural Knowledge", "Descriptive Knowledge"],
          correctAnswer: 0,
        },
        {
          question: "What is DQT (Deliver Quality on Time) in the context of the project objective?",
          options: ["Repeated order>happy customer>more referral", "Happy customer>more referral>repeated order", "Happy customer>repeated order>more referral", "More referral>repeated order>happy customer"],
          correctAnswer: 2,
        },
        {
          question: "What is a key feature of the 360-degree feedback appraisal method?",
          options: ["Employees are evaluated only by their immediate supervisor.", "Feedback is gathered from multiple sources, including peers, subordinates, and supervisors.", "Performance is measured against pre-set objectives.", "It uses standardized performance tests for evaluation."],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is an example of an achievable SMART goal?",
          options: ["Increase sales by 300% in one month.", "Lose 20 pounds in 1 week.", "Improve customer satisfaction ratings by 10% over the next quarter.", "Become the best salesperson in the region."],
          correctAnswer: 2,
        },
        {
          question: "Organizational Design is the process that does not involve decisions regarding?",
          options: ["Centralization", "Departmentalization", "Chain of Command", "Informalization"],
          correctAnswer: 3,
        },
        {
          question: "____________ is the right bestowed on a managerial position.",
          options: ["Authority", "Responsibility", "Accountability", "Power"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is not the drawback of a narrow span?",
          options: ["Expenses of additional layers of management", "Increased complexity of vertical communication", "Increased organizational efficiency", "Encouragement of overly tight supervision"],
          correctAnswer: 2,
        },
        {
          question: "The organic model of organizational structure does not have the following characteristics-",
          options: ["Cross-functional team", "Clear chain of command", "Wide span of control", "Low formalization"],
          correctAnswer: 1,
        },
        {
          question: "Highly routine operating tasks achieved through specialization, with formalized rules and regulations, are known as ________________.",
          options: ["Bureaucracy", "Flat Structure", "Matrix Structure", "Divisional Structure"],
          correctAnswer: 0,
        },
        {
          question: "___________ is an unbroken line of authority that extends top management to other levels of management.",
          options: ["Departmentalization", "Delegation", "Chain of command", "Span of control"],
          correctAnswer: 2,
        },
        {
          question: "Which is closely related to reward power and usually arises from legitimate power; it is the power to punish?",
          options: ["Coercive power", "Reward power", "Referent power", "Expert power"],
          correctAnswer: 0,
        },
        {
          question: "A multinational corporation has given autonomy to regional managers to make decisions about the local market strategies, pricing, and product adaptations. However, the headquarters still sets broad strategic goals and monitors the overall performance of its employees. Consequently, some regional managers feel empowered while others feel restricted by overarching corporate directives. Which of the following best describes the scenario given in the case?",
          options: ["Complete decentralization, with no oversight from headquarters", "Complete centralization, with some delegated authority", "A hybrid decentralization, balancing autonomy with centralized control", "Full decentralization, leading to independent operations at the regional level"],
          correctAnswer: 2,
        },
        {
          question: "Statement 1: Stephen Robbins defines organizing as “arranging and structuring work to accomplish an organizational goal”.  Statement 2: Informal organizational relationships do not appear on the organizational chart.",
          options: ["Statement 1 and Statement 2 are correct, and they are not related in nature.", "Statement 1 and Statement 2 are correct, and they are related in nature.", "Statement 1 and Statement 2 are incorrect, and they are not related in nature.", "Statement 1 and Statement 2 are incorrect, and they are related in nature."],
          correctAnswer: 0,
        },
        {
          question: "Which of the following lines best describes collective bargaining?",
          options: ["Employees discuss policies informally", "Employers unilaterally decide on wages and conditions", "Employers implement tactics to avoid union formation", "Negotiation between employers and employee representatives"],
          correctAnswer: 3,
        },
        {
          question: "___________ are the company-wide plans in which the corporation contributes share of its own stock - or cash to be used to purchase stock - to a trust established to purchase shares for employees.",
          options: ["Profit Sharing Plans", "ESOP", "Scanlon Plans", "Earnings-at-Risk Plans"],
          correctAnswer: 1,
        },
        {
          question: "Match the following: Year	              Common titles for “HR”    i) 1900s	          a) Human Resource Management    ii) 1920s	          b) Personnel Administration   iii) 1940s	          c) Labour Relation Personnel    iv) 2000s	          d) Industrial Relations Personnel",
          options: ["i-a, ii-b, iii-c, iv-d", "i-d, ii-c, iii-b, iv-a", "i-c, ii-b, iii-a, iv-d", "i-c, ii-d, iii-b, iv-a"],
          correctAnswer: 3,
        },
        {
          question: "Raj, a senior executive, tasked with critical decision-making and strategic oversight, was recently asked to provide feedback on his role’s effectiveness, which will eventually influence upcoming performance evaluations.",
          options: ["A formal performance appraisal by superiors", "A peer review process for senior executive", "Self-assessment for role accountability", "360-degree feedback mechanism"],
          correctAnswer: 2,
        },
        {
          question: "The metamorphosis stage stands for:",
          options: ["The process of organizational downsizing and restructuring", "New employee changes and adjusts to the job, work group, and organization", "The period when an employee leaves the organization", "The stage of learning where employees develop technical as well as professional skills"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following does not fall in the category of internal recruitment sources?  i)	Employee referrals  ii)	Internet  iii)	Job postings  iv)	Job portals v)	College Recruiting  vi)	Rehiring  vii)	Recruitment agencies  viii)	Internal promotion",
          options: ["i, ii, iii, iv, v, and vi", "ii, iii, iv, v and vii", "i, ii, iv, v, and vii", "ii, iv, v, and vii"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is not false in the context of HRM? i. HRM helps in finding employees not performing at peak capacity.  ii. HRM helps hire the wrong person for the job.  iii. HRM is the source of competitive advantage by creating superior shareholder value. iv. HRM insignificantly affects organizational performance.",
          options: ["i only", "i, ii, and iv", "i and iii", "All of the above"],
          correctAnswer: 2,
        },
        {
          question: "Which is the first step in the training process?",
          options: ["Design", "Analyse", "Evaluate", "Develop"],
          correctAnswer: 1,
        },
        {
          question: "An assessment that determines the duties of specific jobs and the characteristics of the people who should be hired to do them is known as:",
          options: ["Job Description", "Job Analysis", "Job Specification", "Job Determination"],
          correctAnswer: 1,
        },
        {
          question: "Match the following:     Column I	                                                                    Column II   i) Critical Incident	                                    a) Employees are rated on specific behaviours using a predefined scale    ii) Written Essay	                                    b) Gives you exact reason for performance and non-performance   iii) Graphical Rating Scale	                    c) A method where a manager rates an employee’s performance based on a scale of                                                                                traits or characteristic   iv) BARS                                                	    d) A narrative describing an employee’s strengths, weaknesses, past performances,                                                                                potential, and suggestions for improvement",
          options: ["i-b, ii-d, iii-c, iv-a", "i-d, ii-b, iii-a, iv-c", "i-d, ii-c, iii-b, iv-a", "i-b, ii-c, iii-d, iv-a"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following statements is true in the context of coordination?  i) Coordination is the essence of management because it permeates all levels of management. ii) Coordination is a dynamic process.  iii) Based on organizational structure, there are two types of coordination: Sequential and Reciprocal. iv) Early Start, Personnel Contract, Continuity, and Reciprocal Relationships are the coordination principles given by M. P. Follett.",
          options: ["i, ii, and iii", "i, iii, and iv", "i, ii, and iv", "All of the above"],
          correctAnswer: 2,
        },
        {
          question: "Which stage in the Life Span Career Development model involves “decide and advance”?",
          options: ["Growth Stage", "Exploration Stage", "Establishment Stage", "Maintenance Stage"],
          correctAnswer: 2,
        },
        {
          question: "A leading tech firm identified its top-performing employees, known as 'highflyers,' with exceptional potential. It gave them fast-track leadership programs, mentorship opportunities, and cross-functional exposure to accelerate their career growth. Which career development strategy is being implemented in this scenario?",
          options: ["Job Rotation", "Succession planning", "Talent pool development", "Performance appraisal"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is not a role of mentors in career development?",
          options: ["The mentor challenges and stimulates the mentee intellectually", "Give financial support to mentees", "Offer sponsorship and visibility within the organization", "Guide mentees through difficult career decisions"],
          correctAnswer: 1,
        },
        {
          question: "Column I	                                      Column II   i) Career Planning	                 a) Establishment of individual career objectives based on an assessment of career goals, aspirations, performance, and potential.    ii) Career Management	          b) Ongoing process of gaining knowledge and improving skills that will help an individual establish a career plan.    iii)Career Development	          c) Continuous process that involves setting personal goals, developing strategies for achieving these goals, and revising the goals based on work and personal experiences.",
          options: ["i-a, ii-c, iii-b", "i-b, ii-c, iii-a", "i-b, ii-a, iii-c", "i-a, ii-b, iii-c"],
          correctAnswer: 0,
        },
        {
          question: "At which career stage does the career development intervention 'Job Pathing' typically occur?",
          options: ["Establishment Stage", "Advancement Stage", "Maintenance Stage", "Withdrawal Stage"],
          correctAnswer: 0,
        },
        {
          question: "Arrange the steps of the “Career Planning and Development Cycle” in the correct sequence:",
          options: ["Explore Options – Get Focused – Know Yourself – Take Actions", "Explore Options – Know Yourself – Get Focused – Take Actions", "Get Focused – Explore Options – Know Yourself – Take Actions", "Know Yourself – Explore Options – Get Focused – Take Actions"],
          correctAnswer: 3,
        },
        {
          question: "Which of the following describes McClelland’s Need for Achievement Theory in the best way?",
          options: ["A strong motivation to succeed and to be at the top", "Desire for affiliation and forming close relationships", "Desire for power and control over others", "Desire for stability and security"],
          correctAnswer: 0,
        },
        {
          question: "A & M Multi Ltd organizes a five-day program where employees participate in role playing, exercise, group discussions, and simulated business scenarios to evaluate their leadership, communication and decision-making skills for future managerial roles. What method of employee evaluation is described here?",
          options: ["360-Degree Feedback", "Assessment Centre", "Personality Test", "Job Shadowing"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following statements is true?   i) In the Harmonizing Approach, Frank Parson gave an important theory emphasizing the fit of the person-environment.    ii) Structural Career Development Theories emphasize the influence of the environment on career choice.   iii) Developmental Career Development Theories emphasize the importance of the development of self-concept.   iv) Maslow, in 1943, stated that individuals must satisfy lower-level needs before progressing on to meet higher-level growth needs.",
          options: ["iv only", "i, ii, and iii", "ii, iii, and iv", "All of the above"],
          correctAnswer: 2,
        },
        {
          question: "Match the following:     Column I	                               Column II    i) Identity Diffusion	          a) The status in which an adolescent seems willing to commit to a particular role but has not yet explored alternatives.    ii) Identity Foreclosure	  b) The status in which adolescents actively explore different roles and possibilities but have not yet committed.    iii) Identity Moratorium	  c) The status in which the adolescent has not yet made commitments; they are aimless or lack direction.   iv) Identity Achievement	  d) The status in which the adolescent has explored different roles and committed to a particular role.",
          options: ["i-a, ii-b, iii-c, iv-d", "i-c, ii-d, iii-a, iv-b", "i-a, ii-b, iii-d, iv-c", "i-c, ii-a, iii-b, iv-d"],
          correctAnswer: 3,
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
