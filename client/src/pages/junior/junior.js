import React from 'react';

// Define the data for courses, websites, books, and clubs
const resources = {
  courses: [
    "Intro to React",
    "JavaScript Fundamentals",
    "Data Structures and Algorithims"
  ],
  websites: [
    "freecodecamp.org",
    "codecademy.com",
    "stackoverflow.com"
  ],
  books: [
    "Eloquent JavaScript",
    "You Don't Know JS",
    "The Pragmatic Programmer"
  ],
  clubs: [
    "Coding Club",
    "Web Dev Group",
    "Open Source Community"
  ]
};

// The Junior component
export const Junior = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Hi Juniors, Welcome to Your Third Year!</h1>
    </div>
  );
}

// Main component that includes Junior and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Junior />
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
