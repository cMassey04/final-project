import React from 'react';

// Define the data for courses, websites, books, and clubs
const resources = {
  courses: [
    "Software Engineering",
    "How to Get a Job",
    "Advanced Web Design"
  ],
  websites: [
    "leetcode.com",
    "stackoverflow.com",
    "google.com"
  ],
  books: [
    "How to get a Job.",
    "How to Change Your Career",
    "How to Not Disappoint Your Professor"
  ],
  clubs: [
    "I'm About to Graduate Club!",
    "I have a Job Club!",
    "Engineering Club"
  ]
};

// The Senior component
export const Senior = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Seniors, It's your last year. Congratulations!</h1>
    </div>
  );
}

// Main component that includes Senior and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Senior />
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
