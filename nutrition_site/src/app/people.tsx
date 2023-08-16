// 'use client';
// import React from 'react';
// import { useEffect, useState } from 'react';

// function People() {
//   const [message, setMessage] = useState('');
//   const [people, setPeople] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     fetch('http://localhost:8080/api/home')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setMessage(data.message);
//         setPeople(data.people);
//         setIsLoading(false);
//       });
//   }, []);
//   return (
//     <>
//       {people.map((person, index) => (
//         <div key={index}>{person}</div>
//       ))}
//     </>
//   );
// }

// export default People;
