import { Outlet } from 'react-router-dom'
import './index.css'
import TabBarComp from '../../components/tabBar'
const Layout = () => {
    return (
        <div className='container'>
            <div className='border-2 w-[100%] h-[90%]'>
                <Outlet />
            </div>
            <div className='fixed bottom-0 left-0 border-2 w-[100%] h-[10%]'>
                <TabBarComp />
            </div>
        </div>
    )
}

export default Layout