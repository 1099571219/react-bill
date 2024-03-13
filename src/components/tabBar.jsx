import { TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
const TabBarComp = () => {
    const navigate = useNavigate();
    const tabs = [
        {
          key: '',
          title: '月度',
        },
        {
          key: 'increment',
          title: '新增',
        },
        {
          key: 'year',
          title: '年度',
        }
      ]
    const setRouteActive = (val)=>{
        console.log(val);
        navigate(`/${val}`)
    }
    return (
        <div className=''>
        <TabBar onChange={setRouteActive}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} title={item.title} />
            ))}
        </TabBar>
        </div>

    )
}

export default TabBarComp