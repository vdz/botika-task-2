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


export const routes = [
    {
        path: "/",
        Component: Home
    },
    {
        path: "/models",
        children:[
            {
                path:"",
                Component: ModelList
            },
            {
                path:"create",
                Component: CreateModel
            },
            {
                path:":id",
                Component: ModelDetails
            }
        ]
    },
    {
        path: "/backgrounds",
        children:[
            {
                path:"",
                Component: BackgroundList
            },
            {
                path:"create",
                Component: CreateBackground
            },
            {
                path:":id",
                Component: BackgroundDetails
            }
        ]
    },
    {
        path: "/poses",
        children:[
            {
                path:"",
                Component: PoseList
            },
            {
                path:"create",
                Component: CreatePose
            },
            {
                path:":id",
                Component: PoseDetails
            }
        ]
    },
    {
        path: "/products",
        children:[
            {
                path:"",
                Component: ProductList
            },
            {
                path:"create",
                Component: CreateProduct
            },
            {
                path:":id",
                Component: ProductDetails
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]
  
export const router = createBrowserRouter(routes);
export type Router = typeof router;
