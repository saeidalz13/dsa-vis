import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
    </Route>
  )
)


function App() {
  return <RouterProvider router={router} />;
}

export default App
