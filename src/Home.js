// import React from 'react';
// import { FaBars } from 'react-icons/fa';
// import { useGlobalContext } from './context';
// const Home = () => {
//   const { openSidebar, openModal } = useGlobalContext();
//   // console.log(openSidebar, openModal); // RADI!

//   return (
//     <main>
//       <button onClick={openSidebar} className='sidebar-toggle'>
//         <FaBars />
//       </button>
//       <button onClick={openModal} className='btn'>
//         show modal
//       </button>
//     </main>
//   );
// };

// export default Home;

import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openModal, closeModal } = useGlobalContext();

  return <main></main>;
};

export default Home;
