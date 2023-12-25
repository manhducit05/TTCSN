import User from '../user'
import Layout from '../../layout/layout';
import Home from '../home';
import Private from '../private';
import QnA from '../qna/qna';
import Login from '../user/login';
import Logout from '../user/logout';
export const routes = [
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                element:<Private/>,
                children:[
                    {
                        path:"user",
                        element:<User />
                    },
                    {
                        path:"qna",
                        element:<QnA />
                    }
                    ,{
                        path:"logout",
                        element:<Logout/>
                    }
                ]
            }

        ]
        
    }
] 