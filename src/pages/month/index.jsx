import { useState } from 'react'
import style from './index.module.scss'
import { Button } from 'antd-mobile'
import { DatePicker } from 'antd-mobile'
import dayjs from 'dayjs'
import { asyncGetBillList } from '../../store/modules/billStore'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import BillComp from '../../components/bill'
const Month = () => {
    const counterList = [
        {
            type: 'pay',
            name: '支出',
            value: 0
        },
        {
            type: 'income',
            name: '收入',
            value: 0
        },
        {
            type: 'balance',
            name: '余额',
            value: 0
        }
    ]
    const [visible, setVisible] = useState(false)
    const [now, setNow] = useState(() => new Date())
    const timePick = (val) => {
        setNow(val)
    }
    const dispatch = useDispatch()


    const { billList } = useSelector(state => state.bill)

    useEffect(() => {
        dispatch(asyncGetBillList())
    }, [])

    const curMonth = useMemo(() => {
        return dayjs(now).format('YYYY-MM')
    }, [now])

    const curMonthList = useMemo(() => {
        const month = _.groupBy(billList, bill => dayjs(bill.date).format('YYYY-MM'))
        return month[curMonth]
    }, [billList, curMonth])

    const counter = useMemo(() => {
        const pay = curMonthList?.filter(item => item.type === 'pay').reduce((acc, bill) => acc + bill.money, 0)
        const income = curMonthList?.filter(item => item.type === 'income').reduce((acc, bill) => acc + bill.money, 0)
        return {
            pay,
            income,
            balance: income - pay
        }
    }, [curMonthList])

    const dayList = useMemo(() => {
        const day = _.groupBy(curMonthList, (bill) => dayjs(bill.date).format('YYYY-MM-DD'))
        console.log(day);
        return day
    }, [curMonthList])



    return (
        <div className={style.monthContent}>
            <div className={style.header}>
                月度账单
            </div>
            <div className={style.counterCard}>
                <div className={style.selector}>
                    <Button
                        onClick={() => {
                            setVisible(true)
                        }}
                    >
                        月份选择
                    </Button>
                    <DatePicker
                        visible={visible}
                        onClose={() => {
                            setVisible(false)
                        }}
                        precision='month'
                        onConfirm={timePick}
                        defaultValue={now}
                        max={new Date}
                    >{() => curMonth}
                    </DatePicker>
                </div>
                <div className={style.counterList}>{counterList.map((item, index) => <div key={index}>
                    <div>{counter[item.type]?.toFixed(2)}</div>
                    <div>{item.name}</div>
                </div>)}</div>
            </div>
            <div className={style.billList}>
                {Object.keys(dayList)?.map((billKey, index) => <BillComp key={index} data={dayList[billKey]} date={billKey}>
                    插槽
                </BillComp>)}
            </div>
        </div>
    )
}

export default Month