import { useEffect } from "react"
import style from './index.module.scss'
import { useState } from "react"
import classNames from 'classnames'
import { useMemo } from "react"
import { Collapse } from "antd-mobile"
const BillComp = ({ data, date }) => {
    useEffect(() => {
    }, [])
    const [isShow, setIsShow] = useState(false)
    const counter = useMemo(() => {
        const pay = data.filter(bill => bill.type === 'pay').reduce((acc, bill) => acc + bill.money, 0)
        const income = data.filter(bill => bill.type === 'income').reduce((acc, bill) => acc + bill.money, 0)
        return {
            pay,
            income,
            balance: income - pay
        }
    }, [data])
    return (
        <div onClick={() => { setIsShow(!isShow) }} className={classNames(style.billContainer, { [style.isShow]: isShow })}>
            <div>
                <Collapse defaultActiveKey={['1']}>
                    <Collapse.Panel key='1' title={
                        <div className="flex-col">
                            <div>{date}</div>
                            <div className={`flex ${style.navBar} text-xs`}>
                                <div className="w-[33%]">支出：{counter.pay.toFixed(1)}</div>
                                <div className="w-[33%]">收入：{counter.income.toFixed(1)}</div>
                                <div className="w-[33%] text-sm" >余：{counter.balance.toFixed(1)}</div>
                            </div>
                        </div>
                    }>
                        {
                            <div className={``}>
                                {
                                    data?.map((bill, ind) => (
                                        <div className={`flex justify-between`} key={ind}>
                                            <div>{bill.useFor}</div>
                                            <div className=" text-orange-400">{
                                                (bill.type == 'pay' ? '-' : '+') +
                                                bill.money.toFixed(2)
                                            }</div>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </Collapse.Panel>
                </Collapse>
                {/* <div className="w-[20%]">{date}</div>
                <div className="w-[25%]">支出：{counter.pay.toFixed(1)}</div>
                <div className="w-[25%]">收入：{counter.income.toFixed(1)}</div>
                <div className="w-[25%] text-right">结余：{counter.balance.toFixed(1)}</div>
                <div>{isShow ? "》" : '《 '}</div> */}
            </div>
            {/* <div className={classNames(style.billMain, { [style.isShow]: isShow })}>
                {
                    data?.map((bill, ind) => (
                        <div key={ind}>
                            <div>{bill.useFor}</div>
                            <div>{bill.money.toFixed(2)}</div>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}
export default BillComp