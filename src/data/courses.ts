import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    slug: "ai-coding-iphone-apps",
    title: "AI Coding for iPhone Apps",
    category: "Mobile Development",
    shortDescription:
      "Use AI coding assistants to design, build, and ship native iOS apps with Swift and SwiftUI.",
    description:
      "Learn how to pair with AI coding tools to plan, build, and launch real iPhone apps. You'll go from an idea to a working SwiftUI app in the App Store, using AI to accelerate every step: architecture, UI, debugging, and App Store submission.",
    level: "Beginner",
    duration: "6 weeks",
    format: "Self-paced with weekly projects",
    skills: [
      "Swift & SwiftUI fundamentals",
      "Prompting AI coding assistants effectively",
      "App architecture & state management",
      "Debugging AI-generated code",
      "App Store submission & TestFlight",
    ],
    outcomes: [
      "Build a fully functional iPhone app from scratch",
      "Use AI tools to scaffold, refactor, and debug Swift code",
      "Design clean, native-feeling UI with SwiftUI",
      "Publish an app to TestFlight or the App Store",
    ],
    curriculum: [
      {
        title: "Getting Started with AI-Assisted iOS Development",
        icon: "brain",
        lessons: [
          "Setting up Xcode and your AI coding assistant",
          "How to prompt for Swift & SwiftUI code",
          "Building your first screen with AI",
        ],
      },
      {
        title: "SwiftUI Essentials",
        icon: "code",
        lessons: [
          "SwiftUI views, modifiers & layout",
          "State, bindings & data flow",
          "Building reusable components with AI",
        ],
      },
      {
        title: "App Architecture & State",
        icon: "layers",
        lessons: [
          "Structuring an app with MVVM",
          "Managing state with AI-generated view models",
          "Navigation and multi-screen flows",
        ],
      },
      {
        title: "Data, APIs & Persistence",
        icon: "sparkles",
        lessons: [
          "Connecting to REST APIs",
          "Local storage with SwiftData",
          "Handling errors and edge cases with AI",
        ],
      },
      {
        title: "Testing & Debugging",
        icon: "shield",
        lessons: [
          "Writing unit tests with AI assistance",
          "Debugging with Xcode & AI pair programming",
          "Performance profiling and fixes",
        ],
      },
      {
        title: "Polish, Test & Ship",
        icon: "trophy",
        lessons: [
          "UI polish and animations",
          "TestFlight beta distribution",
          "App Store submission & launch",
        ],
      },
    ],
    gradient: "from-fuchsia-500 to-indigo-600",
    icon: "iphone",
  },
  {
    slug: "ai-coding-android-apps",
    title: "AI Coding for Android Apps",
    category: "Mobile Development",
    shortDescription:
      "Build modern Android apps with Kotlin and Jetpack Compose, supercharged by AI coding tools.",
    description:
      "Master Android development by working side-by-side with AI. You'll learn Kotlin, Jetpack Compose, and how to use AI assistants to generate, refactor, and debug production-quality Android code, ending with a published app.",
    level: "Beginner",
    duration: "6 weeks",
    format: "Self-paced with weekly projects",
    skills: [
      "Kotlin & Jetpack Compose",
      "AI-assisted UI generation",
      "App architecture (MVVM)",
      "Working with APIs and local databases",
      "Play Store publishing basics",
    ],
    outcomes: [
      "Build a complete Android app with Jetpack Compose",
      "Use AI to speed up UI layout and business logic",
      "Integrate real data sources and APIs",
      "Prepare and publish an app to the Play Store",
    ],
    curriculum: [
      {
        title: "Kotlin & Compose Foundations",
        icon: "brain",
        lessons: [
          "Android Studio & AI assistant setup",
          "Kotlin basics through AI-guided practice",
          "Building UI with Jetpack Compose",
        ],
      },
      {
        title: "Compose UI Deep Dive",
        icon: "code",
        lessons: [
          "Layouts, modifiers & theming",
          "State hoisting & recomposition",
          "Building reusable composables with AI",
        ],
      },
      {
        title: "App Structure & Navigation",
        icon: "layers",
        lessons: [
          "MVVM architecture with AI-generated boilerplate",
          "Multi-screen navigation",
          "State management in Compose",
        ],
      },
      {
        title: "Data & Networking",
        icon: "sparkles",
        lessons: [
          "Calling REST APIs with Retrofit",
          "Room database for local storage",
          "Handling async operations with coroutines",
        ],
      },
      {
        title: "Testing & Quality",
        icon: "shield",
        lessons: [
          "Unit & UI testing with AI assistance",
          "Debugging with Android Studio tools",
          "Handling edge cases and crashes",
        ],
      },
      {
        title: "Ship Your App",
        icon: "trophy",
        lessons: [
          "Preparing release builds",
          "Testing and debugging with AI",
          "Publishing to the Google Play Store",
        ],
      },
    ],
    gradient: "from-emerald-500 to-teal-600",
    icon: "android",
  },
  {
    slug: "ai-coding-web-applications",
    title: "AI Coding for Web Applications",
    category: "Web Development",
    shortDescription:
      "Design and ship full-stack web apps using React, Next.js, and AI coding assistants.",
    description:
      "Go from idea to deployed web app using modern tools like React and Next.js, with AI as your coding partner throughout. Learn to scaffold full-stack applications, connect databases, and deploy to production quickly and confidently.",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Self-paced with weekly projects",
    skills: [
      "React & Next.js fundamentals",
      "Full-stack app architecture",
      "AI-assisted debugging & refactoring",
      "Databases & authentication",
      "Deployment & hosting",
    ],
    outcomes: [
      "Build and deploy a full-stack web application",
      "Use AI to generate components, APIs, and tests",
      "Implement authentication and a database layer",
      "Deploy a production app to the cloud",
    ],
    curriculum: [
      {
        title: "AI Fundamentals for Builders",
        icon: "brain",
        subtitle:
          "Learn how AI works and experience what it means to build with AI.",
        lessons: [
          "What AI is and how it works",
          "Prompting & context engineering",
          "AI tools and best practices",
        ],
        learnItems: [
          "What AI is and how it works",
          "What generative AI is",
          "What ChatGPT, Claude and Gemini can do",
          "Introduction to AI coding",
          "How to give AI clear instructions",
          "Basic prompting",
          "How to ask AI to create and modify code",
          "How to read and understand simple AI-generated code",
          "How to test and improve what AI creates",
        ],
        sections: [
          {
            heading: "Practical Assignment",
            title: "Build Your First Game With AI",
            blocks: [
              {
                type: "paragraph",
                text: "Students will use AI to create a simple game inside a single HTML file.",
              },
              { type: "paragraph", text: "For example:" },
              {
                type: "bullets",
                items: [
                  "🎮 Click the Button Game",
                  "🎮 Rock Paper Scissors",
                  "🎮 Guess the Number",
                  "🎮 Catch the Ball",
                  "🎮 Memory Game",
                ],
              },
              {
                type: "paragraph",
                text: "The student doesn't need prior programming experience.",
              },
              {
                type: "paragraph",
                text: "They might start with a prompt such as:",
              },
              {
                type: "quote",
                text: "Create a simple browser game using HTML, CSS and JavaScript in one HTML file. Make it beginner-friendly and explain the code.",
              },
              { type: "paragraph", text: "Then they use AI to modify it:" },
              { type: "quote", text: "Make the game more colorful." },
              { type: "quote", text: "Add a score counter." },
              { type: "quote", text: "Add a timer." },
              { type: "quote", text: "Add a restart button." },
              { type: "quote", text: "Make it work on mobile." },
              {
                type: "paragraph",
                text: "This teaches the fundamental AI Maker workflow:",
              },
              { type: "workflow", text: "IDEA → PROMPT → CODE → TEST → IMPROVE" },
            ],
          },
        ],
        outcome: {
          heading: "Week 1 Outcome",
          blocks: [
            {
              type: "paragraph",
              text: "By the end of Week 1, every student should have created and played a working game that they built with the help of AI.",
            },
            { type: "paragraph", text: "They should be able to say:" },
            { type: "quote", text: "I made this." },
            { type: "paragraph", text: "Even if AI helped write the code." },
          ],
        },
      },
      {
        title: "How Websites Actually Work",
        icon: "code",
        subtitle:
          "Understand the technology behind the web before you start building serious applications.",
        lessons: [
          "HTML, CSS, JavaScript",
          "Frontend vs Backend",
          "APIs, Databases, Git & GitHub",
        ],
        learnItems: [
          "How the internet works",
          "Websites vs web applications",
          "HTML fundamentals",
          "CSS fundamentals",
          "JavaScript fundamentals",
          "Frontend vs backend",
          "APIs and how applications communicate",
          "Databases",
          "Authentication",
          "Git and GitHub",
          "How AI can help you write and understand code",
        ],
        sections: [
          {
            heading: "Practical Exercises",
            blocks: [
              { type: "paragraph", text: "Students will:" },
              {
                type: "bullets",
                items: [
                  "Create their first HTML page",
                  "Style a responsive webpage",
                  "Add JavaScript functionality",
                  "Create a GitHub repository",
                  "Make their first Git commits",
                  "Use AI to explain and improve their code",
                ],
              },
            ],
          },
          {
            heading: "Project",
            title: "Personal Portfolio Website",
            blocks: [
              {
                type: "paragraph",
                text: "Students create a professional website containing:",
              },
              {
                type: "bullets",
                items: [
                  "About section",
                  "Skills",
                  "Projects",
                  "Contact information",
                  "Responsive design",
                ],
              },
            ],
          },
        ],
        outcome: {
          heading: "By the End of Week 2",
          blocks: [
            {
              type: "paragraph",
              text: "You will understand the basic architecture of a modern web application and have your first project online.",
            },
          ],
        },
        deliverable: "Personal portfolio website",
      },
      {
        title: "Build Your First Web Application",
        icon: "layers",
        subtitle: "Move from static websites to real applications.",
        lessons: [
          "React + Next.js + TypeScript",
          "Components, Routing, Forms",
          "Database & Authentication",
        ],
        learnItems: [
          "React fundamentals",
          "Next.js fundamentals",
          "TypeScript",
          "Components",
          "Pages and routing",
          "Layouts",
          "Forms",
          "State",
          "User interactions",
          "Connecting frontend and backend",
          "Database fundamentals",
          "Authentication",
        ],
        sections: [
          {
            heading: "AI Development",
            blocks: [
              { type: "paragraph", text: "You'll learn how to use AI to:" },
              {
                type: "bullets",
                items: [
                  "Generate application structures",
                  "Create components",
                  "Explain unfamiliar code",
                  "Debug errors",
                  "Refactor code",
                  "Build features incrementally",
                ],
              },
            ],
          },
          {
            heading: "Project",
            title: "Build a Real Web Application",
            blocks: [
              {
                type: "paragraph",
                text: "Students choose from examples such as:",
              },
              {
                type: "bullets",
                items: [
                  "Expense Tracker",
                  "Appointment System",
                  "Student Dashboard",
                  "Task Management App",
                  "Small Business Management Tool",
                ],
              },
            ],
          },
        ],
        outcome: {
          heading: "By the End of Week 3",
          blocks: [
            {
              type: "paragraph",
              text: "You will be able to take an idea and turn it into a functioning web application.",
            },
          ],
        },
        deliverable: "Working web application",
      },
      {
        title: "AI-Powered Applications",
        icon: "sparkles",
        subtitle: "Learn how to put AI inside the applications you build.",
        lessons: [
          "AI APIs & prompt engineering",
          "Chat interfaces & AI features",
          "Building AI into your app",
        ],
        learnItems: [
          "What AI APIs are",
          "Connecting an application to an AI model",
          "API keys and environment variables",
          "Prompt engineering inside applications",
          "System instructions",
          "Context",
          "Structured outputs",
          "AI chat interfaces",
          "Streaming responses",
          "Managing AI-generated content",
          "Handling AI errors",
        ],
        sections: [
          {
            heading: "Build With AI",
            blocks: [
              {
                type: "paragraph",
                text: "Students will integrate an AI API into their application.",
              },
              { type: "paragraph", text: "Examples:" },
              {
                type: "bullets",
                items: [
                  "AI Study Assistant — Ask questions → AI generates explanations",
                  "AI Business Assistant — Enter business information → AI generates recommendations",
                  "AI Content Tool — Enter an idea → AI generates content",
                ],
              },
            ],
          },
          {
            heading: "Project",
            title: "AI-Powered Web Application",
            blocks: [
              {
                type: "paragraph",
                text: "Students take their Week 3 application and add meaningful AI functionality.",
              },
            ],
          },
        ],
        outcome: {
          heading: "By the End of Week 4",
          blocks: [
            {
              type: "paragraph",
              text: "You will know how to connect AI models to your own software and create applications that actually use AI.",
            },
          ],
        },
        deliverable: "AI-powered application",
      },
      {
        title: "Production-Quality Applications",
        icon: "shield",
        subtitle: "Turn your prototype into a real application people can use.",
        lessons: [
          "User accounts & permissions",
          "CRUD operations & validation",
          "Security & error handling",
        ],
        learnItems: [
          "User accounts",
          "Authentication",
          "Authorization",
          "User permissions",
          "CRUD operations",
          "Database design",
          "Data validation",
          "Error handling",
          "Loading states",
          "Form validation",
          "Security fundamentals",
          "Protecting API keys",
          "Environment variables",
          "Basic application security",
        ],
        sections: [
          {
            heading: "Production Mindset",
            blocks: [
              {
                type: "paragraph",
                text: "You'll learn the difference between:",
              },
              { type: "quote", text: "It works on my computer." },
              { type: "paragraph", text: "and" },
              { type: "quote", text: "People can actually use this." },
            ],
          },
          {
            heading: "Project",
            blocks: [
              {
                type: "paragraph",
                text: "Students improve their application by adding:",
              },
              {
                type: "bullets",
                items: [
                  "User accounts",
                  "Database",
                  "Persistent data",
                  "Authentication",
                  "Proper error handling",
                  "Security protections",
                ],
              },
            ],
          },
        ],
        outcome: {
          heading: "By the End of Week 5",
          blocks: [
            {
              type: "paragraph",
              text: "You will understand how to transform an AI-generated prototype into a more reliable, secure and usable application.",
            },
          ],
        },
        deliverable: "Multi-user application",
      },
      {
        title: "AI-Assisted Professional Development",
        icon: "git-branch",
        subtitle: "Learn how professional developers actually work with AI.",
        note: "This week is extremely important because AI Makers Academy should not teach students to blindly copy AI-generated code.",
        lessons: [
          "Git workflows & code review",
          "Debugging & testing",
          "Understanding AI-generated code",
        ],
        learnItems: [
          "Git workflows",
          "Branches",
          "Commits",
          "Pull requests",
          "Code reviews",
          "Debugging",
          "Testing",
          "Reading AI-generated code",
          "Finding AI mistakes",
          "Refactoring",
          "Improving application architecture",
          "Using AI for documentation",
          "Using AI for security reviews",
        ],
        sections: [
          {
            heading: "The AI Developer Workflow",
            blocks: [
              { type: "paragraph", text: "Students practice:" },
              {
                type: "workflow",
                text: "PLAN → PROMPT → BUILD → REVIEW → TEST → DEBUG → IMPROVE",
              },
              { type: "paragraph", text: "rather than:" },
              { type: "workflow", text: "PROMPT → COPY → PASTE" },
            ],
          },
          {
            heading: "Challenge",
            blocks: [
              {
                type: "paragraph",
                text: "Students receive an intentionally flawed AI-generated application and must:",
              },
              {
                type: "bullets",
                items: [
                  "Find the problems",
                  "Understand the code",
                  "Debug it",
                  "Fix it",
                  "Test it",
                ],
              },
            ],
          },
        ],
        outcome: {
          heading: "By the End of Week 6",
          blocks: [
            {
              type: "paragraph",
              text: "You will know how to use AI as a powerful development assistant while still understanding and controlling the code you ship.",
            },
          ],
        },
        deliverable: "Debugged and improved application",
      },
      {
        title: "Deploy Your Product",
        icon: "cloud",
        subtitle: "Take your application from your laptop to the real world.",
        lessons: [
          "Vercel & hosting",
          "Environment variables",
          "SEO, performance & analytics",
        ],
        learnItems: [
          "Deployment fundamentals",
          "Vercel",
          "Production environments",
          "Environment variables",
          "Connecting production databases",
          "Custom domains",
          "Application performance",
          "SEO fundamentals",
          "Web accessibility",
          "Analytics",
          "Basic production security",
          "Monitoring and troubleshooting",
        ],
        sections: [
          {
            heading: "Launch Checklist",
            blocks: [
              {
                type: "paragraph",
                text: "Students will prepare their application for launch:",
              },
              {
                type: "checklist",
                items: [
                  "Application works",
                  "Authentication works",
                  "Database works",
                  "AI features work",
                  "Environment variables secured",
                  "Mobile responsive",
                  "Errors handled",
                  "Domain connected",
                  "Application deployed",
                  "Basic SEO configured",
                ],
              },
            ],
          },
          {
            heading: "Project",
            title: "Launch Your Product",
            blocks: [
              {
                type: "paragraph",
                text: "Students deploy their application to the internet and receive a live URL.",
              },
              { type: "paragraph", text: "For example:" },
              { type: "quote", text: "www.yourproject.com" },
            ],
          },
        ],
        outcome: {
          heading: "By the End of Week 7",
          blocks: [
            {
              type: "paragraph",
              text: "You will have a real application that other people can access online.",
            },
          ],
        },
        deliverable: "Live deployed application",
      },
      {
        title: "Demo Day",
        icon: "trophy",
        subtitle:
          "Your final week isn't another lecture. It's your opportunity to show what you built.",
        lessons: [
          "Final project presentations",
          "Live demos & feedback",
          "Graduation & certification",
        ],
        sections: [
          {
            heading: "AI Makers Demo Day",
            blocks: [
              {
                type: "paragraph",
                text: "Every student presents their final project.",
              },
            ],
          },
          {
            heading: "Your Presentation",
            blocks: [
              {
                type: "numbered",
                items: [
                  {
                    title: "The Problem",
                    body: "What problem are you solving?",
                  },
                  { title: "The Idea", body: "What did you decide to build?" },
                  {
                    title: "The Solution",
                    body: "How does your application solve the problem?",
                  },
                  {
                    title: "AI",
                    body: "How did you use AI during development?",
                  },
                  {
                    title: "The Product",
                    body: "Show the actual application.",
                  },
                  {
                    title: "Live Demo",
                    body: "Demonstrate the application working.",
                  },
                  {
                    title: "What's Next",
                    body: "What would you build or improve next?",
                  },
                ],
              },
            ],
          },
          {
            heading: "Final Capstone",
            blocks: [
              {
                type: "paragraph",
                text: "Students choose a real-world problem and build a production-ready web application.",
              },
              { type: "paragraph", text: "Possible projects:" },
              {
                type: "bullets",
                items: [
                  "AI Construction Estimator",
                  "AI Study Platform",
                  "Local Marketplace",
                  "Small Business Management System",
                  "Event Management Platform",
                  "Farm Management Application",
                  "Healthcare Information Platform",
                  "Financial Management Tool",
                  "AI Content Platform",
                  "Education Platform",
                ],
              },
            ],
          },
          {
            heading: "Graduation",
            blocks: [
              {
                type: "paragraph",
                text: "Students who successfully complete the program receive:",
              },
              { type: "bullets", items: ["🏆 AI Makers Academy Certificate"] },
              { type: "paragraph", text: "They also leave with:" },
              {
                type: "bullets",
                items: [
                  "Personal portfolio",
                  "Multiple projects",
                  "AI-powered application",
                  "Live deployed product",
                  "GitHub profile",
                  "Final capstone",
                  "Demo Day presentation",
                  "AI Maker community membership",
                ],
              },
            ],
          },
        ],
        deliverable: "Final capstone project & AI Makers Academy Certificate",
      },
    ],
    gradient: "from-sky-500 to-blue-600",
    icon: "web",
  },
  {
    slug: "ai-coding-video-games",
    title: "AI Coding for Video Games",
    category: "Game Development",
    shortDescription:
      "Design and build playable games using Unity or Godot with AI assistants handling the heavy lifting.",
    description:
      "Learn game development fundamentals while leveraging AI to generate gameplay scripts, mechanics, and level logic. By the end, you'll have a playable game you designed and coded with the help of AI tools.",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Self-paced with weekly projects",
    skills: [
      "Game engine fundamentals (Unity/Godot)",
      "AI-assisted gameplay scripting",
      "Game design principles",
      "Physics, animation & sound",
      "Packaging and publishing a game",
    ],
    outcomes: [
      "Build a complete playable game",
      "Use AI to write and debug gameplay scripts",
      "Apply core game design and level design principles",
      "Package a game for PC or web release",
    ],
    curriculum: [
      {
        title: "Engine & Design Foundations",
        icon: "brain",
        lessons: [
          "Choosing and setting up a game engine",
          "Core game design concepts",
          "Building your first playable scene",
        ],
      },
      {
        title: "Scripting Fundamentals",
        icon: "code",
        lessons: [
          "Programming basics for game engines",
          "AI-assisted script generation",
          "Variables, loops & game logic",
        ],
      },
      {
        title: "Gameplay Programming with AI",
        icon: "layers",
        lessons: [
          "Scripting character movement and controls",
          "AI-assisted enemy and game logic",
          "Debugging gameplay bugs with AI",
        ],
      },
      {
        title: "Game Mechanics & Systems",
        icon: "sparkles",
        lessons: [
          "Building core gameplay systems",
          "Inventory, scoring & progression",
          "Prototyping mechanics with AI",
        ],
      },
      {
        title: "Levels & Environment Design",
        icon: "palette",
        lessons: [
          "Level design and pacing",
          "Building environments and layouts",
          "Lighting and visual composition",
        ],
      },
      {
        title: "Animation & Sound Design",
        icon: "music",
        lessons: [
          "Character and object animation",
          "Sound effects and music integration",
          "Polishing game feel",
        ],
      },
      {
        title: "Playtesting & Optimization",
        icon: "shield",
        lessons: [
          "Playtesting and iteration",
          "Performance optimization",
          "Bug fixing with AI assistance",
        ],
      },
      {
        title: "Package & Publish",
        icon: "trophy",
        lessons: [
          "Packaging builds for PC or web",
          "Store page and release checklist",
          "Publishing and post-launch support",
        ],
      },
    ],
    gradient: "from-orange-500 to-rose-600",
    icon: "game",
  },
  {
    slug: "ai-video-creation",
    title: "AI Video Creation",
    category: "Video & Media",
    shortDescription:
      "Create, edit, and produce professional videos using AI generation, editing, and voice tools.",
    description:
      "Learn to plan, generate, and edit compelling videos using today's leading AI video, voice, and image tools. This course covers scripting, AI video generation, editing workflows, and publishing content that stands out.",
    level: "Beginner",
    duration: "4 weeks",
    format: "Self-paced with weekly projects",
    skills: [
      "AI video & image generation tools",
      "Scripting and storyboarding",
      "AI voiceover & captioning",
      "Editing and post-production",
      "Publishing for social & streaming platforms",
    ],
    outcomes: [
      "Produce a fully edited video using AI tools",
      "Generate AI video, image, and voice assets",
      "Build a repeatable AI video production workflow",
      "Publish content optimized for social platforms",
    ],
    curriculum: [
      {
        title: "Planning & Scripting",
        icon: "brain",
        lessons: [
          "Finding your concept and audience",
          "Scripting and storyboarding with AI",
          "Choosing the right AI video tools",
        ],
      },
      {
        title: "AI Generation",
        icon: "sparkles",
        lessons: [
          "Generating video clips and scenes with AI",
          "AI voiceover and text-to-speech",
          "Generating supporting images and assets",
        ],
      },
      {
        title: "Editing & Post-Production",
        icon: "layers",
        lessons: [
          "Assembling your edit",
          "Captions, music, and sound design",
          "Color and polish",
        ],
      },
      {
        title: "Publish & Grow",
        icon: "trophy",
        lessons: [
          "Exporting for different platforms",
          "Thumbnails, titles, and metadata",
          "Building a content publishing routine",
        ],
      },
    ],
    gradient: "from-violet-500 to-purple-600",
    icon: "video",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
