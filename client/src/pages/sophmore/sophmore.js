import React from 'react';

// Define the data for courses, websites, books, and clubs
const resources = {
  courses: [
    "Full Stack Development - (Dr. Jones)",
    "Intro to C++",
    "Building upon Python"
  ],
  websites: [
    "replit.com",
    "GeeksforGeeks.org",
    "google.com"
  ],
  books: [
    "Python Distilled",
    "How to Become a Better Coder",
    "Do I Really Love This?"
  ],
  clubs: [
    "Mathmatic Club",
    "I Love To Code, Club",
    "I hate to Code, Club"
  ]
};

// The Sophmore component
export const Sophmore = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Sophmores, Welcome to Year 2! You are Half Way There!</h1>
    </div>
  );
}

// Main component that includes Sophmore and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Sophmore />
      <div className="resources">
        <h2>Courses to Take</h2>
        <ul>{resources.courses.map(course => <li key={course}>{course}</li>)}</ul>

        <h2>Websites to Use</h2>
        <ul>{resources.websites.map(site => <li key={site}>{site}</li>)}</ul>

        <h2>Books to Read</h2>
        <ul>{resources.books.map(book => <li key={book}>{book}</li>)}</ul>

        <h2>Clubs/Extracurriculars</h2>
        <ul>{resources.clubs.map(club => <li key={club}>{club}</li>)}</ul>
      </div>
    </div>
  );
}

export default MainComponent;
