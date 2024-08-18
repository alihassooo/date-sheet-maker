// 'use client'

// import React, { useState } from 'react';
// import styles from './styles.module.css'

// const [formData, setFormData] = useState({
//     name: ''
// })

// const [submittedData, setSubmittedData] = useState(null);

// export const App = () => {
//     return (
//         <div className={styles.container}>
//             <form>
//                 <div className={styles.Info}>
//                     <label> Name: </label>
//                     <input
//                         type="text"
//                         placeholder={"Enter Your Name"}
//                     />
//                 </div>
//             </form>
//         </div>
//     )
// }


// const [formData, setFormData] = useState({
//     username: ''
// });


// const [submittedData, setSubmittedData] = useState(null);

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//         ...formData,
//         [name]: value
//     })
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
// }
// return (
//     <div className={styles.container}>
//         <form onSubmit={handleSubmit}>
//             <div className={styles.infoSec}>
//                 <label>Enter Username</label>
//                 <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">SUBMT</button>
//             </div>
//         </form>

//         {submittedData && (
//             <div>
//                 <h3>Submitted data</h3>
//                 <p>Username:{submittedData.username}</p>
//             </div>
//         )}
//     </div>
// )