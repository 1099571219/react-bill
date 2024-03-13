import { createHashRouter } from 'react-router-dom'
import Increment from '../page/increment/index'
import Layout from '../page/layout'
import Month from '../page/month'
import Year from '../page/year'

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index:true,
                element: <Month />
            },
            {
                path: '/year',
                element: <Year />
            }
        ]
    },
    {
        path: '/increment',
        element: <Increment />
    }
])

export default router