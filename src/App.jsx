import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage,{jobLoader} from './components/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import NotFound from './pages/NotFound';

//add new job
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

//delete existing job
const deleteJOb = async (id) => {
  const res = await fetch(`/api/jobs/${id}`,{
    method: 'DELETE',
  })
  return;
}

//update existing job
const updateJob = async (job) => {
  // console.log(job.id);return;
  const res = await fetch(`/api/jobs/${job.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job)
  })
}
const router = createBrowserRouter(
  createRoutesFromElements(
    // parent route (MainLayout)
    <Route path='/' element={<MainLayout/>}>
      {/* child route e.g HomePage,JobsPage */}
      <Route index element={ <HomePage /> }/>
      <Route path='/jobs' element={ <JobsPage /> }/>
      <Route path='/jobs/:id' element={ <JobPage deleteJOb={deleteJOb} /> } loader={jobLoader}/>
      <Route path='/add-job' element={ <AddJobPage addJobSubmit={addjob} /> }/>
      <Route path='/edit-job/:id' element={ <EditJobPage updateJobSubmit={updateJob} /> } loader={jobLoader}/>
      <Route path='*' element={ <NotFound /> }/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
