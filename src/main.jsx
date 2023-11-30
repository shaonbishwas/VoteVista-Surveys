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
import SurveysResponse from "./Pages/SurveysResponse.jsx";
import ShowResponse from "./Pages/ShowResponse.jsx";
import MySurveys from "./Pages/MySurveys.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import DashboardHome from "./Pages/DashboardHome.jsx";
import AdminSurveyResponce from "./Pages/AdminSurveyResponce.jsx";
import ErrorElement from "./Pages/ErrorElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "becomepro",
        element: <BecomePro></BecomePro>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "contactus",
        element: <ContactUs />,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "surveys",
        element: <Surveys></Surveys>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "surveydetails/:id",
        element: <SurveyDetails></SurveyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://vote-viste-server-side.vercel.app/surveys/${params.id}`
          ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "showresponse/:id",
        element: <ShowResponse></ShowResponse>,
        loader: ({ params }) =>
          fetch(
            `https://vote-viste-server-side.vercel.app/surveys/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "adminsurveyresponce",
        element: <PrivateRoute>
          <AdminSurveyResponce></AdminSurveyResponce>,
          </PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "addsurvey",
        element: <AddSurvey></AddSurvey>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "pendingsurveys",
        element: <PrivateRoute>
          <PendingSurveys></PendingSurveys>
        </PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "surveyresponse",
        element: (
          <PrivateRoute>
            <SurveysResponse></SurveysResponse>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "mysurveys",
        element: <PrivateRoute>
          <MySurveys></MySurveys>
        </PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "showresponse/:id",
        element: <PrivateRoute>
          <ShowResponse></ShowResponse>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://vote-viste-server-side.vercel.app/surveys/${params.id}`
          ),
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
