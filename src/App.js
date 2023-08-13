import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicies from "./pages/PrivacyPolicies";

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
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/privacy-policies",
          element: <PrivacyPolicies />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/terms-and-conditions",
          element: <TermsConditions />
        },
      ],
      errorElement: <Error />
    }
    
  ])
  return (
   <div className="bg-gray-100 transition-all duration-300">
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
