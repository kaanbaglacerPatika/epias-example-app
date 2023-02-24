import React from "react";
import { Outlet } from 'react-router-dom';

function RootLayout() {
   // const navigation = useNavigation();

   return (
      <>
         <main>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
         </main>
      </>
   );
}

export default RootLayout;
