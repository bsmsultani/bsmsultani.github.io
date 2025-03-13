const text_analysis = {
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


#### Methods for Extracting Phrases

- **POS Tagging (Part-of-Speech Tagging)**: This uses statistical models to assign tags to words, identifying their grammatical role (e.g., NN for singular noun).
- Example: \`dog/NN\`, \`cat/NN\`
- We can use \`nltk.pos_tag(words)\` to get words with their corresponding tags.

- **Word N-Grams**: A phrase is any sequence of *n* words. The idea is to move a window across the text to extract all possible sequences of words.


---

#### 3 - Text Transformation



This step involves using the documents to create a set of indices. This indices help us to retrieve information faster during querying.

**Type of Index**

- Inverted index : Maps each term to a list of documents that contain that term. {"fox" : ["doc1", "doc2"]}



    `
     

}

export default text_analysis;