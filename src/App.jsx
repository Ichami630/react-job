import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    // parent route (MainLayout)
    <Route path='/' element={<MainLayout/>}>
      {/* child route e.g HomePage,JobsPage */}
      <Route index element={ <HomePage /> }/>
      <Route path='/jobs' element={ <JobsPage /> }/>
      <Route path='*' element={ <NotFound /> }/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
