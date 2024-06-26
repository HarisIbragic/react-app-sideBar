// import React from 'react';
// import logo from './logo.svg';
// import { useGlobalContext } from './context';
// import { FaTimes } from 'react-icons/fa';
// import { social, links } from './data';

// const Sidebar = () => {
//   const { isSidebarOpen, closeSidebar } = useGlobalContext();

//   return (
//     //                                     model     prikazi          sakri
//     <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
//       <div className='sidebar-header'>
//         <img src={logo} alt='logo' className='logo' />
//         <button className='close-btn' onClick={closeSidebar}>
//           <FaTimes />
//         </button>
//       </div>
//       <ul className='links'>
//         {links.map(link => {
//           const { id, url, text, icon } = link;

//           return (
//             <li key={id}>
//               <a href={url}>
//                 {icon}
//                 {text}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className='social-icons'>
//         {social.map(link => {
//           const { id, url, icon } = link;
//           return (
//             <li key={id}>
//               <a href={url}>{icon}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import { useGlobalContext } from './context';
// import logo from './logo.svg';
// import { social, links } from './data';
// import { FaTimes } from 'react-icons/fa';

// const Sidebar = () => {
//   const { isSidebarOpen, closeSideBar } = useGlobalContext();

//   return (
//     <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sideBar'}`}>
//       <div className='sidebar-header'>
//         <img src={logo} alt={logo} className='logo' />
//         <button className='close-btn' onClick={closeSideBar}>
//           <FaTimes />
//         </button>
//       </div>
//       <ul className='links'>
//         {links.map(link => {
//           const { id, url, text, icon } = link;
//           return (
//             <li key={id}>
//               <a href={url}>
//                 {icon}
//                 {text}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className='social-icons'>
//         {social.map(socialLink => {
//           const { id, url, icon } = socialLink;
//           return (
//             <li key={id}>
//               <a href={url}>{icon}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    //                                     model     prikazi          sakri
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(link => {
          const { id, url, text, icon } = link;

          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map(link => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
