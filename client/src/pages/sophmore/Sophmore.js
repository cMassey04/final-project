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

// The Sophomore component
export const Sophmore = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sophomores, Welcome to Year 2! You are Half Way There!</h1>
    </div>
  );
}

// Main component that includes Sophomore and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Image at the top of the page */}
      <img src="https://images.vexels.com/media/users/3/223393/isolated/preview/94bc97edecf40ae4044f08fda259b3c1-sophomore-year-first-day-lettering.png" alt="Top Banner" style={{ width: '50%', height: 'auto' }} />

      <Sophmore />
      <div className="resources">
        <h2>Courses to Take</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.courses.map(course => <li key={course}>{course}</li>)}
        </ul>

        <h2>Websites to Use</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.websites.map(site => <li key={site}>{site}</li>)}
        </ul>

        <h2>Books to Read</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.books.map(book => <li key={book}>{book}</li>)}
        </ul>

        <h2>Clubs/Extracurriculars</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.clubs.map(club => <li key={club}>{club}</li>)}
        </ul>
      </div>

      {/* Image at the bottom of the page */}
      <img src="https://zfcphp.arizona.edu/sites/default/files/images/nsy.png" alt="Bottom Banner" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}

export default MainComponent;
