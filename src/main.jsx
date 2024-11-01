// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import Router from "./Router/Route";
// import { HelmetProvider } from "react-helmet-async";
// import AuthProvider from "./Provider/AuthProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <HelmetProvider>
//         <RouterProvider router={Router} />
//       </HelmetProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Route";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import LoadingPage from "./Components/LoadingPage";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the timeout value as needed
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <HelmetProvider>
          {isLoading ? <LoadingPage /> : <RouterProvider router={Router} />}
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
