import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import HomePage from '@/pages/home/index';
import DetailPage from '@/pages/detail/index';

function App() {

  const router = createBrowserRouter([
    {
      path: "/pokedex-app-v2/",
      element: <HomePage />
    },
    {
      path: "/pokedex-app-v2/detail/:name",
      element: <DetailPage />
    }
  ]);

  return (
    <div className="bg-[url('https://raw.githubusercontent.com/NakornKitk/pokedex-app-v2/refs/heads/main/public/images/list_bg.jpg')] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
