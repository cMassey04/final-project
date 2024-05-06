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
    <div style={{ textAlign: 'center' }}>
      <h1>Seniors, It's your last year. Congratulations!</h1>
    </div>
  );
}

// Main component that includes Senior and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Image at the top of the page */}
      <img src="https://firewolfcounseling.weebly.com/uploads/3/1/6/4/31646813/546847_orig.jpg" alt="Top Banner" style={{ width: '50%', height: 'auto' }} />

      <Senior />
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
