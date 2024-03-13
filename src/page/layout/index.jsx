import { Outlet } from 'react-router-dom'
import './index.css'
import TabBar from '@/components/tabBar'
const Layout = () => {
    return (
        <div className='container'>
            <Outlet className="border-5 h-[50vh]" />
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <TabBar className="!border-[5px] !border-red-600"/>
        </div>
    )
}

export default Layout