import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>}
]);

export default router;