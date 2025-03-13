import React from "react"

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

This project demonstrates expertise in **cloud computing, AI integration, and scalable architecture**, showcasing our ability to build real-world, high-performance applications.  

Interested in learning more? Let’s connect.  

`
        
    },
    {
        "id" : 4,
        "image_url" : "https://diamondvision.com/wp-content/uploads/2019/07/Dilated-Pupils-800x533-1.jpg",
        "name" : "How I Uncovered the Effects of Coffee on Human Performance",
        "description" : "In this group project, we collected reaction times, and fitted a linear model to determine if it effects reaction time.",
        "tags" : ["Linear Regression", "Statistics", "Modelling", "Visualisation"],
        "htmlFile": "mxb242-assignment.html"

    },
    {
        "id" : 5,
        "image_url" : "https://sunstateconveyancing.com.au/wp-content/uploads/2023/07/buying-real-estate-at-auction.jpg",
        "name" : "How I Made a Full Auction Software in C#",
        "description" : "",
        "tags" : ["OOP", "C#"],
        "markdown" : `
# Article in Progress
        `
    },
    {
        "id" : 6,
        "image_url" : "https://www.nvidia.com/content/dam/en-zz/Solutions/high-performance-computing/hpcandai/nvidia-simnet-closeup-2c50-p@2x.jpg",
        "name" : "How I Made An Application 1000x faster",
        "description" : "",
        'tags' : ["Parallel Computing", "Cuda", "C++"],
        "markdown" : `
        
        `


    },
    {
        "id" : 7,
        "image_url" : "https://d12aarmt01l54a.cloudfront.net/cms/images/UserMedia-20220826182039/808-440.png",
        "name" : "Segmenting Drone Image using Deep Learning Methods",
        "description" : "",
        "tags" : ["Deep Learning", "Segmentation"],
        "markdown" : `
        
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



        `
    },

    {
        "id" : 5,
        "name" : "Functional vs Imperative Programming",
        "image_url" : "https://www.boardinfinity.com/blog/content/images/2023/03/Programming-Paradigms.png",
        "description" : "An indepth article exploring functional and imperative programming",
        "tags" : ["Programming Style"],
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

        

        `

    }

]



