import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Layouts/Login/Login.jsx";
import Register from "./Layouts/Register/Register.jsx";
import BecomePro from "./Pages/BecomePro.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import DashBoard from "./Layouts/Dashboard/DashBoard.jsx";
import PendingSurveys from "./Pages/PendingSurveys.jsx";
import ManageUsers from "./Pages/ManageUsers.jsx";
import AddSurvey from "./Pages/AddSurvey.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Surveys from "./Pages/Surveys.jsx";
import SurveyDetails from "./Pages/SurveyDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "becomepro",
        element: <BecomePro></BecomePro>,
        // errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "contactus",
        element: <ContactUs />,
        // errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
        // errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "surveys",
        element: <Surveys></Surveys>,
        // errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "surveydetails/:id",
        element: <SurveyDetails></SurveyDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/surveys/${params.id}`)
        // errorElement: <ErrorElement></ErrorElement>,
      },
      // {
      //   path: "addjob",
      //   element: (
      //     <PrivateRoute>
      //       <AddJob></AddJob>
      //     </PrivateRoute>
      //   ),
      //   errorElement: <ErrorElement></ErrorElement>,
      // },
      // {
      //   path: "jobdetails/:id",
      //   element: (
      //     <PrivateRoute>
      //       <JobDetails></JobDetails>
      //     </PrivateRoute>
      //   ),
      //   errorElement: <ErrorElement></ErrorElement>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://online-marketplace-zeta.vercel.app/api/v1/jobs/${params.id}`
      //     ),
      // },
      // {
      //   path: "updatejob/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdatePage></UpdatePage>
      //     </PrivateRoute>
      //   ),
      //   errorElement: <ErrorElement></ErrorElement>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://online-marketplace-zeta.vercel.app/api/v1/jobs/${params.id}`
      //     ),
      // },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    // errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    // errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    // errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "addsurvey",
        element: <AddSurvey></AddSurvey>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "pendingsurveys",
        element: <PendingSurveys></PendingSurveys>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
