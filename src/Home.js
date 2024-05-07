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
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Open Modal
      </button>
    </main>
  );
};

export default Home;
