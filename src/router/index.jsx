import { createHashRouter } from 'react-router-dom'
import Increment from '@/pages/increment'
import Layout from '@/pages/layout'
import Month from '@/pages/month'
import Year from '@/pages/year'

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
    },
    {
        path: '*',
        element: <Layout />,
    }
])

export default router