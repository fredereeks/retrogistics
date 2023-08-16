import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import Services from "./pages/Services";
import TermsConditions from "./pages/TermsConditions";
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
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/blogs/:id/:link",
          element: <BlogSingle />
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
   <div className="bg-gray-100 transition-all duration-300 overflow-x-hidden">
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
