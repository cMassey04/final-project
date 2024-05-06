import React from 'react';

// Define the data for courses, websites, books, and clubs
const resources = {
  courses: [
    "Intro to React",
    "JavaScript Fundamentals",
    "Data Structures and Algorithms"
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
    <div style={{ textAlign: 'center' }}>
      <h1>Hi Juniors, Welcome to Your Third Year!</h1>
    </div>
  );
}

// Main component that includes Junior and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Image at the top of the page */}
      <img src="https://images.slideplayer.com/25/8092601/slides/slide_1.jpg" alt="Top Banner" style={{ width: '50%', height: 'auto' }} />

      <Junior />
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
