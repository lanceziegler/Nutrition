// // MyMetrics.js
// import { useSession } from 'next-auth/react'
// import { useEffect, useState } from 'react'
// import { fetchUserData } from '../api/userApi' // Your user data fetching function

// function MyMetrics() {
//   const { data: session } = useSession()
//   const [userData, setUserData] = useState(null)

//   useEffect(() => {
//     if (session?.user?.email) {
//       fetchUserData(session.user.email)
//         .then(data => setUserData(data))
//         .catch(error => console.error('Error fetching user data:', error))
//     }
//   }, [session])

//   if (!session) {
//     return <div>Please log in to view your metrics.</div>
//   }

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>Your Metrics</h2>
//           {/* Display user metrics using userData */}
//           <p>Member for {userData.memberSince} days</p>
//           {/* Display other metrics */}
//         </div>
//       ) : (
//         <div>Loading user data...</div>
//       )}
//     </div>
//   )
// }

// export default MyMetrics
//
