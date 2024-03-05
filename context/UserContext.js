// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import { getCurrentUser, logout } from "../services/apiAuth";

// const UserContext = createContext();

// // Context provider
// function UserProvider({ children }) {
//   async function getUserDetails() {
//     const user = await getCurrentUser();
//     return user;
//   }
//   getUserDetails();
//   // Handle logout
//   const handleLogout = async () => {
//     await logout();
//   };

//   return (
//     <UserContext.Provider value={{ user, handleLogout }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // Custom hook
// function useUser() {
//   const context = useContext(UserContext);
//   return context;
// }

// export { UserProvider, useUser };
