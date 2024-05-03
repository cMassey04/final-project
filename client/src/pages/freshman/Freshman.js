import React from 'react';

// Define the data for courses, websites, books, and clubs
const resources = {
  courses: [
    "Intro to Programming",
    "Intro to Programming Fundamentals",
    "Computer Ethics"
  ],
  websites: [
    "chatgpt.com",
    "codecademy.com",
    "neetcode.com"
  ],
  books: [
    "Dont Give Up!",
    "You Don't Know How to Code? So What!",
    "How to Not Disappoint Your Professor"
  ],
  clubs: [
    "I Can't Code Club",
    "Internship Trainers",
    "Technology Club"
  ]
};

// The Freshman component
export const Freshman = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Freshman . . . Welcome to Your FIRST YEAR!!!!</h1>
    </div>
  );
}

// Main component that includes Freshman and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Freshman />
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
