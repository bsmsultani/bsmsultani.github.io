import React, { useState } from 'react';

const CollapsibleCode = ({ codeContent, title = "Code" }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '600px',
      margin: '10px auto',
      fontFamily: 'Arial, sans-serif',
    },
    button: {
      width: '100%',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    content: {
      overflow: 'hidden',
      maxHeight: isCollapsed ? '0' : '500px',
      opacity: isCollapsed ? 0 : 1,
      transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
      border: isCollapsed ? 'none' : '1px solid #ddd',
      padding: isCollapsed ? '0' : '10px',
      background: isCollapsed ? 'transparent' : '#f4f4f4',
      borderRadius: '5px',
    },
    pre: {
      margin: 0,
      overflowX: 'auto',
    },
    code: {
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.button} 
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        onClick={toggleCollapse}
      >
        {isCollapsed ? '▶ Show' : '▼ Hide'} {title}
      </button>

      <div style={styles.content}>
        <pre style={styles.pre}>
          <code style={styles.code}>{codeContent}</code>
        </pre>
      </div>
    </div>
  );
};

export default CollapsibleCode;


export const listOfProject = [
    {
        "id" : 1,
        "image_url" : "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*H6L8M2_Gd2KL94FZ_F5Bog.png",
        "name" : "Generate Stories With AI",
        "description" : "This is a story of how I brought AI-Powered storytelling to life!",
        "tags" : ["Javascript", "S3", "ReactJS", "Docker", "OpenAI", "Google"],
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
with three main components:

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

### Cloud-Based Video Analysis: Transforming Raw Footage into Insights  

Video content is everywhere, but extracting meaningful insights is challenging. For our CAB432 Cloud Project, we built a scalable video analysis tool that helps users track objects, annotate frames, and analyse patterns efficiently.  

#### How It Works  

1. **User Uploads Video** → The web app generates a **unique hash** (a digital fingerprint) for the file and checks **Redis (an in-memory database)** to see if it has been processed before. If not, the app provides a secure **pre-signed URL** for direct upload to **Amazon S3 (cloud storage)**.  
2. **Processing Pipeline** → Once uploaded, **S3 triggers an event**, adding the video to an **Amazon SQS (queue system)**, which organises tasks and ensures efficient processing.  
3. **Scalable Processing** → A **fleet of EC2 virtual machines (Auto Scaling Group)** retrieves jobs from the queue. Each instance extracts frames using **FFmpeg (a multimedia processing tool)** and sends them to the **Google Cloud Vision API**, which detects and labels objects in each frame.  
4. **Data Storage & Retrieval** → Analysed data is stored in **S3 (for long-term storage)** and **Redis (for fast retrieval)**. Users can then **filter, search, and visualise objects** efficiently through the web app.  

#### The Client Side

1. The user uploads a video

![Upload Video](${"/projects/video_analysis_1.png"})
![Upload Video](${"/projects/video_analysis_0.png"})

2. After the video has been processed, the video is then displayed back with its top objects
detected on a graph and also there is a search feature, if the user wants to see exactly
where an object appears in the video across the timeline; they can make use of this search
button.
![Search for object graph](${"/projects/video_analysis_2.png"})

3. Further down it also shows the top n frequencies of objects in a the video
![Top N frequencies](${"/projects/video_analysis_3.png"})

#### Key Features  

- **Object Visualisation** – Track object appearances on a timeline.  
- **Frame Annotation** – Extracts and annotates key frames per second.  
- **Search & Filters** – Navigate timestamps and filter objects based on time.  
- **Scalability** – Auto Scales based on demand, optimising cost and performance.  

#### Challenges & Solutions  

- **Large File Handling** – Prevented crashes by optimising upload and processing.  
- **SQS Queue Tuning** – Ensured efficient job distribution and execution.  

#### Future Enhancements  

- **Facial Recognition & Emotion Analysis** – Adding deeper insights into video content.  
- **Enhanced Search & Tagging** – Improving content discovery and user experience.  

#### Why It Matters  

This project demonstrates expertise in **cloud computing, AI integration, and scalable architecture**, showcasing my ability to build real-world, high-performance applications.  

Interested in learning more? Let’s connect.  

`
        
    },
    {
        "id" : 4,
        "image_url" : "https://diamondvision.com/wp-content/uploads/2019/07/Dilated-Pupils-800x533-1.jpg",
        "name" : "How I Uncovered the Effects of Coffee on Human Performance",
        "description" : "In this group project, we collected reaction times, and fitted a linear model to determine if it effects reaction time.",
        "tags" : ["Linear Regression", "Statistics", "Modelling", "Visualisation"],
        "htmlFile": "mxb242-assignment.html",
        "markdown" : `

        `

    },
    {
        "id" : 5,
        "image_url" : "https://sunstateconveyancing.com.au/wp-content/uploads/2023/07/buying-real-estate-at-auction.jpg",
        "name" : "How I Made a Full Auction Software in C#",
        "description" : "In this OOP project, I made a C# auction software allwoing users to advertise products, bid advertised products and accept bids while also ensuring data integrity.",
        "tags" : ["OOP", "C#"],
        "markdown" : `



### Introduction

Object Oriented Programming (OOP) is a fundamental paradiagm of programming that aims to build a reusable and modular code.

Some of the fundamental concepts of OOP include:

- ***Object:*** An instance of a class which is the blueprint for manipulating and operating on the data.
- ***Encapsulation:*** Is the idea of bundling attributes and methods that operate on the data into a single class. And sometimes restricting
access to some of the methods or attributes. 
- ***Inheritance:*** Allows for classes to inherit properties and methods of another class. Such as class Dog inheriting from class Mammal.
- ***Polymorphism:*** This concept ties to inheritance and allows of different classes (cat, dogs .. ) to be treated as objects of a common super class
(mammal). It allows us to build functionality that operates on mammels (cats, or dogs) without needing to know the type of mammel.
- ***Abstraction:*** This is typically achieved through abstract classes or interfaces, which allows for blueprints for sub-classses to follow
without worrying about specific implementation details. For example class abstract Animal has methods make_sound, jump etc ... this means
any class inheriting from Animal may need to implement these methods. 

### The Vision

Any software implemented using Object Oriented design can be powerful and easily maintainable. To trully demonstrate its power, I built
an aunctioning software. Here was the idea:

- **Registeration** : allow users to register, while ensuring valid form input and database management
- **Login** : Allows user to login and authenticate in the database
- **log out** : Sign the user out and cut connection to the database
- **Advertise Product** : Allow users to advertise products by entering approperiate fields related to product and making it viewable to other customers.
- **Search for Product** : Allow users to search for products.
- **Bid products** : Allow users to bid a product from the list of advertised products
- **View Bids and accept one** : Allow user to view bid on their product and accept one.
- **View Purchased Items** : One a bid is accepted, move product to purchased for the bidded user.


The full functionality was implemented and can be seen in the UML diagram below:

![complete UML diagram](${"/projects/auction_house_1.png"})

Figure 1: Shows a UML (Unified Modelling Language) of the auctioning software

I know it may seem complex at first, but we'll break it down step by step, and you'll see the true power of OOP.

### 1 Building the user interface

In order to achieve the specified, goal I had to start with primitive requirements. First I had to build the user interface.

Building the UI was challenging as it required flexible menu system that could adapt to different user states and actions. For example
if the user wasn't signed in, it would've shown a menu to register, sign in or exit. If the user was siged in, it would've show
advertise product, view products, log-out etc..

![UML diagram of the UI](${"/projects/auction_house_2.png"})

Figure 2: Shows the snippet of the UML diagram concerning the UI

##### \`1.1 Abstract Menu Class \`

I started by sketching out what I needed: menus that could display different options 
based on whether a user was logged in or not, buttons that would trigger specific actions, and a way 
to handle user input that felt natural in a console environment. I knew I needed something reusable but customisable.


So I began with the abstract \`Menu\` class. This would be the backbone of every menu in the system. It would have a 
\`title\`, a \`collection of buttons\`, and methods to start and stop displaying. By making it abstract, I could ensure 
every concrete menu would implement the necessary display logic while adding its own unique features.

![a preview of the Menu Class](${"./projects/auction_house_6.png"})

Figure 3: Shows a snippet of the logic of the \`Menu\` abstract class

##### \`1.2 Making Menus\`

From there, I created the \`MainMenu\` and \`ClientMenu\` classes. The \`MainMenu\` would be the welcoming face of the application, offering options for registration, sign-in, and exit. 
The \`ClientMenu\` would appear after successful authentication, presenting options specific to authenticated users.

Since the necessary logic was already in the parent abstract class \`Menu\`, I could focus on customisation.

![code preview for the MainMenu class](${"./projects/auction_house_7.png"})

Figure 4: Shows the \`MainMenu\` using the \`Menu\` logic to a customised welcome menu.


##### \`1.3 Buttons\`
Buttons were next. Each button needed to display text and trigger an action when pressed. 
I created the \`Button class\` with properties for \`text\` and an event trigger. 
The \`PressButton()\` method would execute the linked event (\`IEvent\`), creating the interaction between user input and system response.

To make buttons truly flexible, I implemented the \`IEvent interface\`. This allowed any type of \`Event\` (like registration, sign-in, or searching for products) to be triggered. 
By decoupling buttons from their specific actions, I could change or add functionality without rewriting UI components.

![the Button class implementation](${"./projects/auction_house_8.png"})


Below you can see events like registeration, sign-in and exit...

![Upload Video](${"/projects/auction_house_4.png"})


Overall, this was extremely helpful as it demonstrates the power of polymorphism, allowing any event to be triggered when a specific button
is pressed.


##### \`1.5 Handling User Input\`

Input handling was tricky. I needed a system that could prompt users for information, validate their responses, and handle errors gracefully. 
This led to the creation of the abstract ConsoleInput class and its concrete implementation, SelectOptions.
SelectOptions became crucial for managing user selections. It could validate input against expected values, display appropriate prompts, 
and handle invalid entries with clear error messages. This made the UI feel responsive and user-friendly even in a console environment.

![Upload Video](${"/projects/auction_house_3.png"})





        `
    },
    {
        "id" : 6,
        "image_url" : "https://www.nvidia.com/content/dam/en-zz/Solutions/high-performance-computing/hpcandai/nvidia-simnet-closeup-2c50-p@2x.jpg",
        "name" : "How I Made An Application 7x faster",
        "description" : "",
        'tags' : ["Parallel Computing", "Cuda", "C++"],
        "htmlFile" : "cab401_assignment.html"



    },
    {
        "id" : 7,
        "image_url" : "https://d12aarmt01l54a.cloudfront.net/cms/images/UserMedia-20220826182039/808-440.png",
        "name" : "Segmenting Drone Image using Deep Learning Methods",
        "description" : "",
        "tags" : ["Deep Learning", "Segmentation", "Image"],
        "markdown" : `
# Article in progress
        `
    },
    {
        "id" : 8,
        "image_url" : "https://miro.medium.com/v2/resize:fit:1400/0*QgO58OBJUzpPAM6Q",
        "name" : "Bird sound detection using Deep Learning",
        "tags" : ["Deep Learning", "Detection", "Audio"],
        "markdown" : `
# Article in progress
        
`
    }

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
        "date" : "05-03-2025",
        "markdown" : `
## The Problem

You are given the \`head\` of \`linked list\` and you need to rotate the list to the right by \`k\` places.

## My initial thought

- Shift elements from the begining of the list to the end by \`k\`
- Shift elements from the end of the list to the begining of the list by \`k\`

Okay this seems pretty straightforward, but how do we achieve this?

### Possible Solution 1

One of my immediate solution was that perhaps we can link elements that come after \`n - k \` elements to the begining.
And we have solved the problem. 

[1, 2, 3, 4] , k = 2

[1, 2, 3, 4] → [4, 1, 2, 3] → [3, 4, 1, 2]


However, what happens when \`k\` is larger the length of the list (\`n\` = 4):

k = 5

[1, 2, 3, 4] → [4, 1, 2, 3] → [3, 4, 1, 2] → [2, 3, 4, 1] → [1, 2, 3, 4] → [4, 1, 2, 3]

This is the same as when k = 1.

So when \`k > n\` we can normalise \`k\` by \`k % n\`.

But the problem is we don't know the length of the list before hand, since this is a \`linked list\`. We also don't want a solution that
iteratively shifts elements \`k\` times without normalising \`k\` as this would be inefficient.

Therfore we use two pointers. The first pointer will go all the way to the end of the list, once reached, we will know
the length of the list. The second pointer will then go normalised \`k\` places.


The hardest part of implementing this solution was considering the different test cases:

\`\`\`

class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        if not head:
            return
        
        # at least one node avaliable
        n = 1
        p1 = head
        while p1.next:
            n += 1
            p1 = p1.next
        
        if n == 1:
            return head
            
        
        # normalising k
        if k > n:
            k = k % n
            
        # case where we shift elements to their original spot
        if n == k:
            return head
        
        if k == 0:
            return head
        
        # p2 goes to the new last element
        p2 = head
        for _ in range(n - k - 1):
            p2 = p2.next
            
        
        # the new head
        newHead = p2.next

        # the last element cuts connection 
        p2.next = None
        
        p1.next = head
        
        return newHead


### Results
232/232 cases passed (0 ms)
Your runtime beats 100 % of python3 submissions
Your memory usage beats 85.66 % of python3 submissions (17.8 MB)

\`\`\`


Although this solution was easy to implement, the hardest part was considering the edge cases.


        `
    },
    {
        "id" : 3,
        "image_url" : "https://miro.medium.com/v2/resize:fit:918/1*PPjYMxD1X2qzK2HU8FE3hg.png",
        "name" : "How To Solve Leetcode Problem: 62 Unique Path",
        "description" : "",
        "tags" : ["Leetcode", "Medium"],
        "haveCarsoul" : false,
        "markdown" : `
## The problem

- The robot is on \`m x n\` grid
- Initially the robot starts at \`grid[0][0]\`
- The robot tries to move to the bottom right corner. Given \`m x n\` grid, return the possible unique paths the robot can take to
reach the bottom right corner


**Constraints**

- The robot can only move down or right at any given point.

## My Initial Thoughts

I cannot think of a algorithmic solution to this problem. Perhaps it involves maths? But I can't think of a mathmatical solution.

Lets stick to algorithmic solution for now.

Actually after some thought there might be an algorithmic solution. Perhaps recursion.

- At each step we recursively move \`n - 1 \` or \`m - 1\` until we reach our goal state \`[m - 1][n - 1]\`. This should explore all the possibilites
algorithmically.

### Possible Solution 1

Lets say we have a space a \`3  by 3\` space:

[0, 0][0, 1][0, 2]\n
[1, 0][1, 1][1, 2]\n
[2, 0][2, 1][2, 2]\n

[0, 0] → [0, 1] [1, 0]\n
[0, 1] → [0, 2] [1, 1]\n
[0, 2] → [1, 2] (Edge case: Right is not possible to go, so we only move down)


My first coded solution can be seen below. It WORKS!!! However time complexity is too large O(2^(m + n)).


\`\`\`
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        
        n_paths = 0
        def unique_paths(k, j):
            nonlocal n_paths
            # if we've reached the goal state increase number of ways by 1
            if k == m - 1 and j == n - 1:
                n_paths += 1
                return

            

            # move down as long as k < m
            if k < m:
                unique_paths(k + 1, j)
            
            # move right as long as j < n
            if j < n:
                unique_paths(k, j + 1)
            
        
        unique_paths(0, 0)
        return n_paths


\`\`\`

### Possible Solution 2

Okay this may be cheating but the proble is tagged with \`dynamic programming \`

I don't know much about dynamic programming but I know that sub-problems are used to solve the problem.

I guess first we need to figure out how to divide the problem into sub-problems. Figuring out the sub-problem
wasn't very straightforward. But CHATGPT gave me a hint.

**The Hint**

The number of ways to reach D[j, k] cell is the SUM of D[j - 1, k] and D[j, k -1]

Okay this is my coded solution. However something is wrong with it.

\`\`\`

    def solution_2(self, m, n):
        
        # DP table
        dp = [[0] * n] * m
        
        dp[0][0] = 1
        
        for i in range(m):
            for j in range(n):
                if dp[i - 1][j]:
                    dp[i][j] += dp[i - 1][j] 
                
                if dp[i][j - 1]:
                    dp[i][j] += dp[i][j - 1]
        
        
        return dp[m - 1][n - 1]

\`\`\`


After some investigation, what I found was wrong with it and it is astonishing! Two things.

- First the way \`dp\` table is being initialised. In python when we use \`*\` to list, it creates reference to the list.
- Second, I need to ensure \`i > 0 and j > 0\`


\`\`\`

    def solution_2(self, m, n):
        
        # DP table
        dp = [[0] * n for _ in range(m)]

        
        dp[0][0] = 1
        
        for i in range(m):
            for j in range(n):
                if i > 0 and dp[i - 1][j]:
                    dp[i][j] += dp[i - 1][j] 
                
                if j > 0 and dp[i][j - 1]:
                    dp[i][j] += dp[i][j - 1]
        
        
        return dp[m - 1][n - 1]



\`\`\`

**Great this solution WORKS. With overall time complexity of O(m + n)**



### What did I learn?

This problem took me **1.5 hours** to complete and write this article at the same time. It was so much fun as well and
allowed me to sharpen my problem solving skills, while also learning few things:

- Initialising multi-dimensiional arrays in python CORRECTLY
- Testing for edge cases.
- Dynamic programming

        `,
        
    },
    {
        "id" : 4,
        "image_url" : "https://surveypal.com/wp-content/uploads/2023/05/text-analysis-1024x538.png",
        "name" : "How to Analyse Textual Information",
        "tags" : ["LLMs", "Text Analysis", "Machine Learning"],
        "markdown" : `



### Backstory

Hey guys. So a bit of a backstory - I am currently studying a unit (\`CAB431 Text and Web analysis\`) and I thought it would be a great Idea
to write a blog documenting everything important that I learn along the way.

Enjoy!


### Introduction

To start - it is no secret that textual information is ubiquitous and having a method of **retriving** relevant documents and **classiyfing**
them is crucial. This is what we will delve into in the first part. And let's not forget there are two ways to achieve this:

1. Employing Statistical methods
2. Employing Machine Learning Methods


**There are few steps we need to follow when we are doing text-analysis.**

#### 1 - Text Acquisition

- This is pretty self explanatory. We need to collect a set of documents first and foremost in order to analyse them!


---
#### 2 - Text Pre-processing
Things to watch out for:


##### Key Linguistic Laws

- **Zipf's Law**: A few words occur very frequently, while many words occur rarely.
- **Heap's Law**: 
    - Formula: \`v = k * n^B\`
    - Where:
        - \`v\` = number of unique words
        - \`n\` = number of words
        - \`B\` is between 0.5 and 1
        - \`k\` is between 10 and 100
    - This law works well with large corpora.



#### 1. Tokenization
Tokenization involves standardizing text by applying a set of rules, such as:
- Removing special characters
- Converting words to lowercase
However, special rules need to be in place for cases where removing characters may affect the meaning (e.g., **T-Mobile**). This step often includes:
- Removing stop words
- Applying specific rules to retain important terms

#### 2. Stemming
Stemming reduces words to their root forms, addressing plural forms and tenses:
- **Dictionary-based methods**:
    - Porter stemmer
    - Krovets stemmer
- **Algorithmic-based methods**: These methods apply heuristics to reduce words to their stems.

#### 3. N-grams
Many queries are phrases, typically consisting of two or more words. When processing these queries, we need to decide:
- Do we match both words together (a phrase), or do we match just one word?
- This method moves n-window at a time

#### Methods for Extracting Phrases

- **POS Tagging (Part-of-Speech Tagging)**: This uses statistical models to assign tags to words, identifying their grammatical role (e.g., NN for singular noun).
    - Example: \`dog/NN\`, \`cat/NN\`
    - We can use \`nltk.pos_tag(words)\` to get words with their corresponding tags.
  
- **Word N-Grams**: A phrase is any sequence of *n* words. The idea is to move a window across the text to extract all possible sequences of words.


---

#### 3 - Text Transformation



This step involves using the documents to create a set of indices. This indices help us to retrieve information faster during querying.

**Type of Index**

- ***Inverted index:*** Maps each term to a list of documents that contain that term. {"fox" : ["doc1", "doc2"]}




--- 

## Issues with Search Engine Technology

- Dynamic data: The web is changing all the time, serving the freshest data is crucial
- Scalability: Large user base, narrowing the search is crucial
- Adaptability: Changing and tuning search engine components such as ranking algorithm & indexing strategy

---

## Things you can do with text analysis
- Text classification
- Important words extraction
- Spelling check & Auto completion
- Recommender Systems



---

## Information Extraction

- automatically extracting useful information from a set of documents such as name, address etc.
- **Semantic Annotation**: tagging words in text with tags <Name>Fred</Name>


### Approaches to named entities

- Ruled based: uses known phrases such as list of words to recognise named entities

- **Statistical Approaches:** ***Hiden Markov Model***, uses probablistic model of words in and around the named entity
    - Resolves ambiguity (e.g. person name or city name) by using context (around the word) 
    - accurate recongition requires about 1 million words for training data
    - useful YouTube video: [https://www.youtube.com/watch?v=fX5bYmnHqqE](https://www.youtube.com/watch?v=fX5bYmnHqqE)

---

## Document Structure Mark up

Some mark up elements are more important than others:

- Headers
- Anchor text
- Alternative text



---

## TF-IDF

This is an important concept that is used to analyse and understand importance of words in a document.

***TF*** - measures the frequency of words within a document

$$
TF(t, d) = \\frac{number \\: of \\: times \\: term \\: t \\: appears \\: in \\: d \\: document}{total \\: number \\: of \\: term \\: in \\: document d}
$$


IDF measures the rarity of a term across a collection of documents. It uses log to penalise high occuring words.

$$
TF-IDF(t,d,D) = TF(t,d) × IDF(t,D)
$$
        `
    },

    {
        "id" : 5,
        "name" : "Functional vs Imperative Programming",
        "image_url" : "https://www.boardinfinity.com/blog/content/images/2023/03/Programming-Paradigms.png",
        "description" : "An indepth article exploring functional and imperative programming",
        "tags" : ["Programming Style", "F#"],
        "markdown" : `

# Introduction

Programming paradiagm is a style or approach to programming. It tells programmers how to organise their code. And there is
largely two types of paradiagms:

***Imperative Programming***: a style of programming where the programmer tells the computer to execute one statement at a time
that can change the state of the program.

***Functional Programming***: a style of programming where the series of nested functions execute to achieve an outcome.

---

# F# 

To dive deeper into the functional world of programming, lets learn F#, a multi-paradiagm programming language part of dotnet.
It is compiled into Microsoft Commmon Language (.dll), which is ran on the desired hardware using Just In Time Compilation.


### Basics

- A strongly typed language
- A value can be bined to a name. This is not the same as a variable
- Defining functions: \`let add x y = x + y\` is a function that takes two parameters and return their sum. To call function \`add 2 4\`
we can call function three ways. \`Prefix: add 2 4\`, \`infix 2 add 4\` or \`(+) 2 4\`
- ***Nested Binding:*** defining multiple heirarchial variables such as 

        let outer = 
            let inner = 10
            inner + 5
        
        outer

        The result would be 15.
- ***Function:*** is a value like a number. That means it can be assigned a name, passed as parameters and returned as a result of a function call.
Therefore functions also need a type.


- ***Lists***: an immutable data container

    create a list

        let myList = [1;2;3]
        let x = myList.[2]

    add list tail

        let secondList = 5::myList

    concat list 
        
        let thirdList = myList @ [4;5;6]

- ***Match Statement***: equivalent to switch statement in Javascript, C# etc.

        match [something] with
            pattern1 -> expression1
            pattern2 -> expression2


        let lucky x = match x with
            1 -> true
            2 -> false
            _ -> false (matches anything)


- ***Recursion with List***

        The head and tail are just names and :: is used to r


        let rec length L =
            match L with
                [] -> 0
                head::tail -> 1 + (length tail)
        

        let rec range lower upper =
            if lower <= upper then lower :: (range (lower + 1) upper)
            else []


- ***Higher Order List Functions***

    Map
        let rec map f L =
            match L with
                [] -> []
                head::tail -> (f head) :: (map f tail)
        
        the above is equivalent to:

        List.map( func x -> x * 2 )[0 .. 10]

    Reduce : takes multiple values and reduces them into a a single value
        
        let rec reeduce op L =
            match L with
                [] -> raise(System.ArgumentException("The Input List is Empty"))
                [head] -> head
                head::tail -> op head (reduce op tail)

        List.reduce(+)[1 .. 10]


    Filter

        let rec filter p L =
            match L with
                [] -> []
                head::tail ->
                    let rest = filter p tail
                    if (p head) return (head::rest) else rest


        List.filter prime [1 .. 100]


- ***Composing Higher Order Functions***

        We apply map function first then pass the elements and apply the reduce operation second.
        We can also run the map function in parallel.

        let mapreduce m r = (List.map m) >> (List.reduce r)
        mapreduce (fun x -> x * 2) (+) [0..100]
        

- ***Pipline Style***

        x |> y is equivalent to y(x(.))

- ***Static vs Dynamic Typing***

        parameters can optionally have a type

- ***Tuple and record types***

        a pair : (4, "fred") which is a type of int * string

        can use match with tuples

        let length vector = 
            match vector with
                (x, y) -> sqrt(float (x * x + y * y))

- ***Records***

        similar to tuples but with values having names assigned

        Must declare the type first.

        type foo { x : int, y : string }
        let r = {y = "hello", x = 1}
        let z = r.x


- ***Unions Types***

        The simplest form is enumeration

        type Suite = Spades | Clubs | Diamonds | Hearts
        
        type Shape = 
            | Rectangle of width:float * height:float
            | Circle of radius:float
            | Prism of width:float * float * height:float

        
        let rec = Rectangle (height = 1.3, width = 10.0)


        We can treat types like virtual method (in OOP).

        We can create methods that will execute differently based on the shape given:

        let getShapeHeight shape = 
            match Shape with
            |   Rectangle (height = h) -> h
            |   Circle (height = r) -> 2 * r
            |   Prism (height = h) -> h




        type Tree =
            |   leaf of value:int
            |   Parenf of value:int * left:Tree * right:Tree


        let rec Height tree =
            match tree with
            |   Leaf(_) -> 1
            |   Parent (value = v, left = l, right = r) -> (max (Height l) (Height r)) + 1

- ***Generic Type***

        Generic functions or types enables you to write code that works with variety of types.

        let twice f x = f (f x)

        the type for this is inferred to be:

        f:('a -> 'a) -> x: a' -> a' 

        The resultant type has to be the same as the input type in this generic function.

        You can also create your own generic type:

        type List<'t> =
            |   Empty
            |   NonEmpty(head: 't; tail:List<'t>)


- ***The builtin Option Type***

        type Option<'t>
            | some 't
            | None

        The result of any method that returns either some type of None - the result is an Option type.

    
        ('a -> 'b) -> 'a : list -> 'b : list

        - ('a -> 'b) : takes a returns b
        - 'a : list means a is a type of list
        - 'b : list means b is a type of list
        


- ***Lazy Evaluation***

    Evaluation of expressions play a vital role in differentiating functional vs imperative programming. There are two types:

    - Lazy: a concept where an expression is evaluated only when needed
    - Eager: opposite of lazy, expressions are computed no matter what.


    Consider the case below:

        if (a != null && a->field > 0) 
        if (a != null || a-> field > 0)

        In the first case, the right hand side will not be evaluated if a is null. So this is lazy evaluation.

    It is worth to consider that F# is not a fully functional programming language.

    There are elements of F# that are lazy, lets explore them:


- ***Sequences (Interface)***

    - A series of elements all one type
    - Sequences are represented by Seq<'T> which is alias for IEnumberable<T> type
    - If you create a function that expects a sequence, it can be passed any .NET type that implements 
    INumberable (list, dictionary etc..) making it reusable
    - The values are not stored, we can enumerate them in sequence

- ***.NET IEnumerable***

        You can create a sequence using this interface. For example:


        public namespace Collections.Generic
        {

            public interface IEnumberable<T>

            {
                IEnumerator<T> GetENumerator()
            }

            public interface IEnumerator<T> {

                T current { get; }
                bool MoveNext();
                void Reset();
                void Dispose();
            
            }
        
        }


        public class Tree
        {
            private string label;
            private Tree left, right;

            public IEnumberable<Tree> Preorder()
            {
                yield return this;
                if (left != null) {
                    foreach(Tree node in left.Preorder()) {
                        yeild return node;
                    }
                }
                if (right != null) {
                    foreach(Tree node in right.Preorder()) {
                        yeild return node;
                    }
                }
            }
        }


        // note when for loop is happening
        // in behind the scene IEnumerable.GetEnumerator() is being called
        // this lazyly lodes the next value


        static Main()
        {
            IEnumerable<Tree> nodes = root.Preorder();
            for (var node in nodes) {
                Console.writeLine(node);
            }
        }


- *** Object-Oriented Programming in F# ***

        The most common use case for creating objects in F# is to interoperate with code written in other .NET languages

        type Coordinate(x, y) =
            member this.x = x
            member this.y = y
            override this.ToString() = "(" + x.ToString() + ", " + y.ToString() + ")"
            member this.Add (other:Coordinate) = new Coordinate(x + other.x, y + other.y)

    


- *** Imperative Programming in F# ***

        Making mutable variables:

        let mutable x = 1
        x <- x + 1

        let a = ref 5
        let b = !a (get the value of the reference)
        let c = a (same reference)
        c:= 10 change the value to 10


- *** Array ***

        Similar to lists but mutable
        let a = [|1; 2; 3; 4; 5|]

        Lists are more liked linked list and doesn't have efficient random memory access
        While Arrays have efficient random access and are more like arrays in python

        In arrays we cannot do pattern matching head::tail 

        Accessing element of an array:

        let element = a.[i]


- *** Map ***

        let rec hashlist f L = 
            match L with
            |   [] -> Map.empty
            |   head::tail -> Map.add head (f head) (hashlist tail)


- *** Unit Type ***

        Everything in F# must have a type.

        For expressions that do not have a type, the type \`unit\` is used. The value of the type \`()\`

- **** Imperative Control Flow ***

        while expr do
            body

        for i in expr
            body

        or i = expr to expr do
            body

        # avoid using imperative control flow when learning functional programming

        How to avoid using loops:

            for i = 1 to 10
                printf "%d" i

            can be transformed to

            [1 .. 10] |> List.iter (printf "%i")

        
            let mutable i = 0
            while i * i < 100 do
                printf "%i"i i
                i <- i + 2
            
            Seq.initInfinite((*) 2)
                |> Seq.takeWhile(fun i -> i * i < 100)
                |> Seq.iter (printf "%i" i)

- *** Iter Function ***

        y |> List.iter (printf "%d; ")
        


- *** Monoids ***

        They allow for composing functions while removing complexity.

        Consider a collection of functions S (f, g, h) all of type a -> a

        we can compose a new function by composing f and g:

            (f * g) x = g(f x)

            (f * g) * h = f (g * h)


- *** Monadic Theory ***

        What if we have a function that produces \` M<a \` rather than \`a\`

        An example is \`Option<int>\`, it may produce \`int\` or \`None\`

        The problem is \`g and h\` can no longer be composed, g may give h a value that it is not expecting.

        Therefore we need an \`adapter\` or a Bind function:

            Consider,

            \`let bar (a:int) (b:int) (c:int) = a + b / c\`

            Now a, b or c maybe optional. This is where \`monad\` will help us.


            Bind : M<a> -> (a -> M<a> ) -> M<a>     simple case
            Bind : M<b> -> (b -> M<b> ) -> M<c>     general case


            (f a) >>= g = Bind(f a) g

            In this example the Bind function will get two functions f and g then connect them.
            It will pass the right 




        type MaybeBuilder() =
            member this.Bind(x, f) =
                match x with
                |   Some(v) -> f v
                |   _ -> None
            
            member this.Return(v) = Some v


        let foo (oa:Optional<int>) (ob:Optional<int>) (oc:Optional<int>) = 
            maybe {
                let! (a:int) = oa
                let! (b:int) = ob
                let! (c:int) = oc

                return (a + b / c)
            }

        The above code is syntactic sugar for:

        
        maybe.Bind(oa, fun a -> 
            maybe.Bind(ob, fun b ->
                maybe.Bind(oc, fun c ->
                    maybe.Return(a + b / c))))

        It unwraps oa and passes it to function b if oa is some

        otherwise if it returns None, the subsequent calls do not get executed.



- *** Problems maonds aim to solve ***

        Functional programs are a series of explicit statements. If an algorithm is too explicit, it can become
        complex. Monads help solve this by abstracting away some of the explicitness.


- *** Seq Monad ***

        - 












        `

    },
    {
        "id" : 6,
        "image_url" : "https://wallpapercat.com/w/full/8/8/e/1324311-2000x2000-phone-hd-math-wallpaper-image.jpg",
        "name" : "Generalised Linear Models (GLMs)",
        "description": "An exploration of GLMs - a form of linear regression for non-linear relationship.",
        "tags" : ["Modelling", "Linear Regression", "GLM"],
        "markdown" : `

### Introduction

You maybe familar with linear regression which models a linear relationship between \`Y\` and \`X\`. However this assumption of linearity is
sometimes is violated. **What to do then?** The answer is use ***Generalised Linear Model***.

What are the advantages of using GLMs?

1. **Flexibilty** in the types of response variable: While with linear regression you can only have a **continuous** response variable,
GLMs can have various types of response variables.
2. **Interpretability** They are also interpretable !!

When to use them? 

1. When **linearity** is violated
2. When **response** variable is non-normal

GLMs extend the linear model as follows:


$$
g(\\mu_i) = \\beta_0 + \\beta_1 X_{i1} + \\beta_2 X_{i2} + \\dots + \\beta_p X_{ip}
$$

- $$g(\\mu_i)$$ is the **link function** that connects the expected value of the response variable to the linear predictor

So the only difference between linear regression and generalised linear modelling is the addition of link functions.

There are various types of link functions that can be used for different types of response variable. Let's explore some:

### Exponential Family

Types of exponential distribution:

- ***Normal*** - 
- ***Poisson*** - 
- ***exponential*** - 


**Moments**

Exponential family of distributions have their moments defined:

$$
m^{th} moment = E[(X - E[X])^m]
$$

The first moment is mean, second variance etc ...

Distribution not in the family of exponentials:

- Student-t
- Uniform


A probability distribution belongs to the family of **exponential distribution** if its probability density function
or probability mass function (pmf) can be written in the following forms:


$$
f(z|\\xi) = \exp[t(z)u(\\xi)] r(z) s(\\xi)
$$

- (z) is the value of the random variable.
- \(\\xi\) is the parameter of the distribution.
- \(t(z)\), \(u(\\xi)\), \(r(z)\), and \(s(\\xi)\) are real-valued functions.
- \(r(z) > 0\) and \(s(\\xi) > 0\) for all \(z\) and \(xi).

If you take random samples from a distribution in the exponential family, the structure of the distribution is preserved.

$$
f(z|\\xi) = \\exp\\left[ u(\\xi) \\sum_{i=1}^{n} t(z_i) + \\sum_{i=1}^{n} \\log r(z_i) + n \log s(\\xi) \\right]
$$


**Canonical Form**

The exponential family of distributions can be written in a specific form, called the canonical form. This form is useful and simplifies
calculations for many of the statistics:

$$
f(y | \\theta, \\phi) = \\exp \\left( \\frac{y\\theta - \\kappa(\theta)}{a(\\phi)} + c(y, \\phi) \\right)
$$


- y: The observed data (no transformation applied).
- $$\\theta$$: The canonical parameter (no transformation applied).
- $$\\phi$$: A dispersion parameter (often related to the variance).
- $$\\kappa(θ)$$: The log-partition function, which ensures the distribution is properly normalised (i.e., integrates to 1).
- $$a(\\phi)$$: A scaling function that depends on the dispersion parameter ϕ.
- c(y,ϕ): A function that depends only on the data y and the dispersion parameter ϕ.



### Link Function

##### Binomail (logistic link function)

- Useful links: [Medium Article](https://medium.com/towards-artificial-intelligence/logistic-regression-4006b2482f43)

Let's consider whether a student will ***pass/fail*** an exam.

In order to understand this, we will consider using a $$logit$$ function. This function closely ties with **odds**.

$$
odds = \\frac{p}{q}
$$

However, this expression is not within the $$ 0 +\\infty$$. In order to make this expression within $$-\\infty +\\infty$$,
we need to apply natural log to it.

$$

ln(odds) = ln(\\frac{p} {1 - p})
$$

Using this equation, we can say:

$$
Z = XW = ln(\\frac {\\hat{y}} {1 - \\hat{y}})
$$

Where $$\\hat{y}$$ is the probability of success.

The above equation is saying that there is equality between the linear combination (X) and log-odd. It is treating the linear combination
as log-odds. This makes easier when transforming the linear combination into probabilities:

After some rearrangements, we can say:

$$
\\hat{y} = \\frac{1}{1 + \\exp^{-z}}
$$


***Why not use linear combination as probabilites directly***

Because the value will not be bounded between $$[0, 1]$$, instead bounded by $$-\\infty +\\infty$$

As you can see the logit function was able to correctly transfrom our linear combination into a useful form.


There are two other binomail link functions:

- probit
- complementary log odds

#### Poisson Link Functions

For Poisson regresssion, the most common link function is the ***log link function***.

$$
ln(\\hat{y}) = Z =  ln(n^i) + B_0 + B^iX^i
$$

or

$$

\\hat{y} =  N\\exp(XW)

$$

Note that in the exploratory data analysis, we are expecting a ***straight line relationship between ln(y) and XW***.
For example **log (mortality rate per year)** vs age group. Also note that $$N^i$$ is an offset, this is to ensure
fairness between different groups. In the mortality vs age group, this would adjust for population sizes in each age groups.



**Determining casuality**

Do a randomised controlled experiment and determine if factors have significant effects.

`
    },
    {
        "id" : 7,
        "name" : "Diving deep into LLMs" ,
        "image_url" : "https://media.licdn.com/dms/image/v2/D4D12AQGBG0RgeyMHVw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692187763032?e=2147483647&v=beta&t=f139Om73qZxbbvCtA-EKhPWUC-YU3qCVRmNCqDM2d3g",
        "tags" : ["NLP", "Neural Networks"],
        "htmlFile" : "LLMs.html"
    }

]



