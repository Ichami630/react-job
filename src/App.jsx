import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage,{jobLoader} from './components/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFound from './pages/NotFound';

const addjob = async (newJob) => {
  const res = await fetch("/api/jobs",{
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });
  return;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    // parent route (MainLayout)
    <Route path='/' element={<MainLayout/>}>
      {/* child route e.g HomePage,JobsPage */}
      <Route index element={ <HomePage /> }/>
      <Route path='/jobs' element={ <JobsPage /> }/>
      <Route path='/jobs/:id' element={ <JobPage /> } loader={jobLoader}/>
      <Route path='/add-job' element={ <AddJobPage addJobSubmit={addjob} /> }/>
      <Route path='*' element={ <NotFound /> }/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
