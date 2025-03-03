import React from "react"

export const listOfProject = [
    {
        "id" : 1,
        "image_url" : "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*H6L8M2_Gd2KL94FZ_F5Bog.png",
        "name" : "Generate Stories With AI",
        "description" : "This is a story of how I brought AI-Powered storytelling to life!",
        "tags" : ["Javascript", "S3", "ReactJs", "Docker", "OpenAI", "Google"],
        "markdown" : `

### The story of "StoryTellerGenie": How I Brought AI-Powered Storytelling to Life

Hey there, this is a story of how I created a full-stack application, where I created an innovative storytelling application called "StoryTellerGenie." This project was a blast to work on, and I can't wait to share the key takeaways and how I managed to pull it off.

#### The Vision

The idea was simple yet powerful: create an app that could generate captivating short stories from a simple prompt, translate them into various languages, and provide audio narrations with distinct voices for each character. I wanted to make storytelling accessible and engaging for everyone, no matter their language or location.

#### The Tech Stack

To bring this vision to life, I used a mix of cutting-edge technologies:
- **OpenAI API**: For generating creative stories based on user prompts.
- **Google Translation API**: To translate stories into multiple languages.
- **Google Text-to-Speech API**: For converting text into lifelike audio narrations.
- **Amazon S3**: For storing story files and page counter data.
- **Docker**: To containerise the application for easy deployment and scalability.

#### The Journey

##### Building the Client-Side

I started with the client-side, built using React.js. This part handles user interactions and sends API requests to the server. It is pretty straight forward,
with two main components:

- **Search Bar**: The user can input prompts like 'generate a story of a cat riding a donkey'.
![Search Bar Image](${"/projects/generate_story_1.png"})
- **Generated story**: Displays the generated story and its audio.
![Displaying generated story](${"/projects/generate_story_2.png"})
- **Translate story**: Generate narration and translation in various different language.
![Generated story in French](${"/projects/generate_story_3.png"})


##### Crafting the Server-Side

The server-side, implemented with Express.js, is where the magic happens. It processes user requests, generates stories, translates them, and creates audio narrations. Key scripts include:
- **story.js**: Manages story generation using OpenAI.
- **voice.js**: Handles audio narration with Google TTS.
- **AudioGen.js**: Generates audio files in various languages.

##### Deployment with Docker

To ensure the app runs smoothly across different environments, I used Docker. The Dockerfile sets up a Node.js runtime, installs necessary packages, and defines how the app starts. This made deployment a breeze!
![Generated story in French](${"/projects/generate_story_4.png"})

#### Challenges and Triumphs

##### Learning Curve

One of the biggest hurdles was mastering advanced JavaScript and working with APIs like OpenAI and Google's services. But with lots of practice and online resources, I got the hang of it.

##### Debugging

As the app grew more complex, debugging became a challenge. Breaking down the code into smaller parts and using debugging tools helped me identify and fix issues.

##### Unfinished Features

I had to postpone some features, like picture integration, due to resource limitations. But that's okay—I learned that sometimes, you have to prioritise to stay on track.

#### The Outcome

After weeks of hard work, StoryTellerGenie was ready! Users can now generate, translate, and listen to stories in multiple languages. It's been a rewarding journey, and I'm excited to see where this project goes next.

#### What I Learned

This project taught me a lot about AI, APIs, and deployment. But most importantly, it showed me the power of creativity and persistence. With the right tools and mindset, you can turn even the wildest ideas into reality.

[If you want to check out the project, click this link](https://github.com/bsmsultani/CAB432-assignment1)

        `
    },
    {
        "id" : 2,
        "image_url" : "https://media.licdn.com/dms/image/v2/D4D22AQHLA7ig-azMLw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721830060509?e=1743638400&v=beta&t=hBSkQqrjgNmIw30IuV9m4GoQRqvqEHV_SF09ALyGmzs",
        "name" : "Generate Flashcards with AI",
        "description" : "In this application we made fullstack AI powered flashcard generator and won the best Community Award!",
        "tags" : ["Javascript", "OpenAI", "ReactJS", "ExpressJS"],
        "markdown" : `# Article in progress.`

    },
    {
        "id" : 3,
        "image_url" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZ-7WaPN7GaW3pyKsuN81bxqicuqlhxGX0g&s",
        "name" : "Find Anything In A Video",
        "description" : "In this innovative group project we made a fullstack application, allowing users to analyse and search objects in a video.",
        "tags" : ["Javascript", "NodeJS", "ExpressJS", "ReactJS", "Google"],
        "markdown" : `

# Cloud-Based Video Analysis: Transforming Raw Footage into Insights  

Video content is everywhere, but extracting meaningful insights is challenging. For our CAB432 Cloud Project, we built a scalable video analysis tool that helps users track objects, annotate frames, and analyse patterns efficiently.  

## How It Works  

1. **User Uploads Video** → The web app generates a **unique hash** (a digital fingerprint) for the file and checks **Redis (an in-memory database)** to see if it has been processed before. If not, the app provides a secure **pre-signed URL** for direct upload to **Amazon S3 (cloud storage)**.  
2. **Processing Pipeline** → Once uploaded, **S3 triggers an event**, adding the video to an **Amazon SQS (queue system)**, which organises tasks and ensures efficient processing.  
3. **Scalable Processing** → A **fleet of EC2 virtual machines (Auto Scaling Group)** retrieves jobs from the queue. Each instance extracts frames using **FFmpeg (a multimedia processing tool)** and sends them to the **Google Cloud Vision API**, which detects and labels objects in each frame.  
4. **Data Storage & Retrieval** → Analysed data is stored in **S3 (for long-term storage)** and **Redis (for fast retrieval)**. Users can then **filter, search, and visualise objects** efficiently through the web app.  

## Key Features  

- **Object Visualisation** – Track object appearances on a timeline.  
- **Frame Annotation** – Extracts and annotates key frames per second.  
- **Search & Filters** – Navigate timestamps and filter objects based on time.  
- **Scalability** – Auto Scales based on demand, optimising cost and performance.  

## Challenges & Solutions  

- **Large File Handling** – Prevented crashes by optimising upload and processing.  
- **SQS Queue Tuning** – Ensured efficient job distribution and execution.  

## Future Enhancements  

- **Facial Recognition & Emotion Analysis** – Adding deeper insights into video content.  
- **Enhanced Search & Tagging** – Improving content discovery and user experience.  

## Why It Matters  

This project demonstrates expertise in **cloud computing, AI integration, and scalable architecture**, showcasing our ability to build real-world, high-performance applications.  

Interested in learning more? Let’s connect.  

`
        
    },
    {
        "id" : 4,
        "image_url" : "https://diamondvision.com/wp-content/uploads/2019/07/Dilated-Pupils-800x533-1.jpg",
        "name" : "How I Uncovered the Effects of Coffee on Human Performance",
        "description" : "In this group project, we collected reaction times, and fitted a linear model to determine if it effects reaction time.",
        "tags" : ["Linear Regression", "Statistics", "Modelling"],
        "htmlFile": "mxb242-assignment.html"

    },

]


export const listOfBlog = [
    {
        "id" : 1,
        "image_url" : "https://assets.leetcode.com/uploads/2020/01/23/meta-chart.jpeg",
        "name" : "How to Solve Leetcode Problem: 55 Jump Game",
        "description" : "",
        "tags" : ["Leetcode", "Medium"],
        "haveCarsoul" : false,
        "markdown" : `


# Stuck on LeetCode? Here’s How I Solved the "Jump Game" Problem

## The Problem:

The problem is pretty straightforward, but it can be tricky to solve efficiently:

- You are given an array, and you start at index 0.
- Each element in the array (\`nums[i]\`) represents the maximum number of jumps you can make from that position.
- Your task is to determine if you can reach the end of the array. Return \`True\` if you can, and \`False\` otherwise.

## My Initial Thoughts

When I first read the problem, It sounded like a fun puzzle, but as I started working on it, I realised it was more difficult than I initially thought.




## The Solution

After some trial and error, I came up with a solution using a **greedy algorithm**. Here’s how it works:

### Code

\`\`\`python
def canJump(self, nums: List[int]) -> bool:
    goal = len(nums) - 1
    for i in range(len(nums) - 1, -1, -1):
        if i + nums[i] >= goal:
            goal = i

    return goal == 0

\`\`\`

In order to reach the end of the array, we need at least \`len(nums) - 1\` to achieve this, so this is our initial goal.
As we enter the loop we check if \`index\` (number of jumps we need to get to our current index) \`+ nums[index]\` (number of 
jumps we can make at the current index) is sufficient to reach the end of the array. **why is this important?** It tells
us whether we can reach the end of the list, if we can make it to the current index. This allows us to revise our initial goal.
Because we know that as long as we can reach that index, we should have sufficient jumps to reach the end. Therefore our goal
becomes that index.


We continue doing this until we reach the index 0. As long as we don't next anymore jumps to reach the next index \`jumps == 0\`
then we return \`True\`.

    `

    },
    {
        "id" : 2,
        "image_url" : 'https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg',
        "name" : "How to Solve Leetcode Problem: 61 Rotate Linked List",
        "description" : "",
        "tags" : ["Leetcode", "Medium"],
        "haveCarsoul" : false,
        "markdown" : `

        `
    }
]



