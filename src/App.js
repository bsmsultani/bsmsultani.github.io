import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents';

function App() {
  const sections = [
    {
      "Section 1": "Computer Vision",
      "Description": "A brief overview of what you can expect from this section.",
      "Parts" : [
        { title: 'Introduction to Our Blog', "Description": "A brief overview of what you can expect from this part.", "Date_Published": "2021-01-01" , "Author": "John Doe" , "Date Modified": "2021-01-02" },
        { title: 'Chapter 1: The Beginning', "Description": "The first chapter in our blog series.", "Date_Published": "2021-01-03" , "Author": "Jane Doe" , "Date Modified": "2021-01-04" },
        { title: 'Chapter 2: The Journey Continues', "Description": "The second chapter in our blog series.", "Date_Published": "2021-01-05" , "Author": "John Doe" , "Date Modified": "2021-01-06" }
      ]
    },

    {
      "Section 2": "The Middle of Our Blog",
      "Description": "A brief overview of what you can expect from this section.",
      "Parts" : [
        { title: 'Chapter 3: The Plot Thickens', "Description": "The third chapter in our blog series.", "Date_Published": "2021-01-07" , "Author": "Jane Doe" , "Date Modified": "2021-01-08" },
        { title: 'Chapter 4: The Climax', "Description": "The fourth chapter in our blog series.", "Date_Published": "2021-01-09" , "Author": "John Doe" , "Date Modified": "2021-01-10" }
      ]
    },

    {
      "Section 3": "The End of Our Blog",
      "Description": "A brief overview of what you can expect from this section.",
      "Parts" : [
        { title: 'Chapter 5: The End', "Description": "The final chapter in our blog series.", "Date_Published": "2021-01-11" , "Author": "Jane Doe" , "Date Modified": "2021-01-12" }
      ]
    }
  ];

  return (
    <div className="App">
      <TableOfContents sections={sections} />
    </div>
  );
}

export default App;
