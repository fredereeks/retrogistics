import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Foods from "./pages/Foods";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const Layout = () => {
      return(
        <>
        <Header />
         <Outlet />
         <Footer />
        </>
      )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/foods",
          element: <Foods />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ],
      errorElement: <Error />
    }
    
  ])
  return (
   <div className="bg-gray-100">
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
