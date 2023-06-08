
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Applicant from "./pages/applicant/Applicant";
import Dog from "./pages/dog/Dog";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dogs/:id",
          element: <Dog/>,
        },
        {
          path: "/applicants",
          element: <Applicant/>,
        },
        
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;