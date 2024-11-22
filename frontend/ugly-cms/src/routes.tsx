import { createBrowserRouter } from "react-router-dom"
import { ModelList } from "@/components/Model/ModelList";
import { ModelDetails } from "@/components/Model/ModelDetails";
import { CreateModel } from "@/components/Model/CreateModel";
import { BackgroundList } from "@/components/Background/BackgroundList";
import { BackgroundDetails } from "@/components/Background/BackgroundDetails";
import { PoseList } from "@/components/Pose/PoseList";
import { PoseDetails } from "@/components/Pose/PoseDetails";
import { ProductList } from "@/components/Product/ProductList";
import { CreateProduct } from "@/components/Product/CreateProduct";
import { ProductDetails } from "@/components/Product/ProductDetails";
import { NotFound } from "@/components/NotFound/NotFound";
import { CreateBackground } from "@/components/Background/CreateBackground";
import { CreatePose } from "@/components/Pose/CreatePose";
import { Home } from "./components/Home/Home";
import { Error } from "./components/Error/Error";

export const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/models",
        children:[
            {
                path:"",
                element: <ModelList />
            },
            {
                path:"create",
                element: <CreateModel />
            },
            {
                path:":id",
                element: <ModelDetails />
            }
        ]
    },
    {
        path: "/backgrounds",
        children:[
            {
                path:"",
                element: <BackgroundList />
            },
            {
                path:"create",
                element: <CreateBackground />
            },
            {
                path:":id",
                element: <BackgroundDetails />
            }
        ],
        errorElement: <Error />
    },
    {
        path: "/poses",
        children:[
            {
                path:"",
                element: <PoseList />
            },
            {
                path:"create",
                element: <CreatePose />
            },
            {
                path:":id",
                element: <PoseDetails />
            }
        ],
        errorElement: <Error />
    },
    {
        path: "/products",
        children:[
            {
                path:"",
                element: <ProductList />
            },
            {
                path:"create",
                element: <CreateProduct />
            },
            {
                path:":id",
                element: <ProductDetails />
            }
        ],
        errorElement: <Error />
    },
    {
        path: "*",
        element: <NotFound />,
    }
]
  
export const router = createBrowserRouter(routes);
export type Router = typeof router;
