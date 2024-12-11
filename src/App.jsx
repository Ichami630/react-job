import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero/>
      

      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      

      {/* <!-- Browse Jobs --> */}
      <JobListings />
      <ViewAllJobs />
      
    </>
  );
};

export default App;
