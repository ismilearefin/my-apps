import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

function App() {
  const routers = createBrowserRouter([
      { path : '/' , element: <div>This is Simple Page </div>},
      { path :'/home', element: <div>Home Page</div> },
      { path :'/about', element: <div>About Page</div> },
      { path : '/Product', element: <div>Products</div>}
  ])
  return (
    <div className="App">
      <p>okay next push</p>
      <h1>hello bro</h1>
      <h1>Hello Router</h1>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
