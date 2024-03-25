import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import ListedBook from './Pages/ListedBook/ListedBook';
import PagesToRead from './Pages/PagesToRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedboot",
        element: <ListedBook></ListedBook>

      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>
        
       
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
