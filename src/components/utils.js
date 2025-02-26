

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
- **Docker**: To containerize the application for easy deployment and scalability.

#### The Journey

##### Building the Client-Side

I started with the client-side, built using React.js. This part handles user interactions and sends API requests to the server. It is pretty straight forward,
with two main components:

- **Search Bar**: The user can input prompts like 'generate a story of a cat riding a donkey'.
- **Generated story**: Displays the generated story and its audio.

##### Crafting the Server-Side

The server-side, implemented with Express.js, is where the magic happens. It processes user requests, generates stories, translates them, and creates audio narrations. Key scripts include:
- **story.js**: Manages story generation using OpenAI.
- **voice.js**: Handles audio narration with Google TTS.
- **AudioGen.js**: Generates audio files in various languages.

##### Deployment with Docker

To ensure the app runs smoothly across different environments, I used Docker. The Dockerfile sets up a Node.js runtime, installs necessary packages, and defines how the app starts. This made deployment a breeze!

#### Challenges and Triumphs

##### Learning Curve

One of the biggest hurdles was mastering advanced JavaScript and working with APIs like OpenAI and Google's services. But with lots of practice and online resources, I got the hang of it.

##### Debugging

As the app grew more complex, debugging became a challenge. Breaking down the code into smaller parts and using debugging tools helped me identify and fix issues.

##### Unfinished Features

I had to postpone some features, like picture integration, due to resource limitations. But that's okay—I learned that sometimes, you have to prioritize to stay on track.

#### The Outcome

After weeks of hard work, StoryTellerGenie was ready! Users can now generate, translate, and listen to stories in multiple languages. It's been a rewarding journey, and I'm excited to see where this project goes next.

#### What I Learned

This project taught me a lot about AI, APIs, and deployment. But most importantly, it showed me the power of creativity and persistence. With the right tools and mindset, you can turn even the wildest ideas into reality.

So, if you're thinking of diving into a project like this, go for it! Embrace the challenges, celebrate the victories, and most importantly, have fun along the way. Happy coding!
        `
    },
    {
        "id" : 2,
        "image_url" : "https://media.licdn.com/dms/image/v2/D4D22AQHLA7ig-azMLw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721830060509?e=1743638400&v=beta&t=hBSkQqrjgNmIw30IuV9m4GoQRqvqEHV_SF09ALyGmzs",
        "name" : "Generate Flashcards with AI",
        "description" : "In this application we made fullstack AI powered flashcard generator and won the best Community Award!",
        "tags" : ["Javascript", "OpenAI", "ReactJS", "ExpressJS"],

    },
    {
        "id" : 3,
        "image_url" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZ-7WaPN7GaW3pyKsuN81bxqicuqlhxGX0g&s",
        "name" : "Find Anything In A Video",
        "description" : "In this innovative group project we made a fullstack application, allowing users to analyse and search objects in a video.",
        "tags" : []
        
    },


]



export const listOfBlog = [
    {
        "id" : 1,
        "image_url" : "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F9da6rnlxgxq8fv8degu4.png",
        "name" : "Is Leetcode worth it",
        "description" : "Software Developers spend an enormous amount of time on leetcode in order to land a high paying job. But is it worth your time? ",
        "tags" : [],

    },
]



