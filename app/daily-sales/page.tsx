"use client"

import moment from "moment"
import React, { useEffect, useState } from "react"

export default function dailySales() {
    const [data, setData] = useState([
        {
            number: 0,
            dateTime: "",
            orders: [
                {
                    productName: '',
                    unit: 0
                }
            ],
            totalPrice: 0
        }
    ])
    const [date, setDate] = useState('')

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://localhost:3001/sale')
            const responseData = await response.json()

            setDate(moment().format('DD/MM/YYYY'))
            setData(responseData.data.data)
        }
        getData()
    }, [])
    return (
        <>
            <div className="card">
                <div className="grid" style={{ textAlign: "center" }}>
                    <div className="col-12">
                        <a href="./sale">
                            <button style={{ width: "100%" }} className="btn btn-primary">ขายของ</button>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href="./daily-sales">
                            <button style={{ width: "100%" }} className="btn btn-primary" disabled>ดูยอดขายทั้งหมด</button>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href="./stock">
                            <button style={{ width: "100%" }} className="btn btn-primary">สินค้าที่เหลือ</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center">
                    <div style={{ marginBottom: "5px;" }}>รายการยอดขายทั้งหมด</div>
                    {/* <div>{date}</div> */}
                </div>
                <div className="card-content">
                    <div className="grid">
                        <div className="col-12">
                            <table>
                                <thead>
                                    <tr className="text-center">
                                        <th>ลำดับ</th>
                                        <th>รายการสินค้า</th>
                                        <th>จำนวนเงิน</th>
                                        <th>เวลา</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(list => (
                                        <tr key={list.number}>
                                            <td>{list.number}</td>
                                            <td>
                                                {list.orders.map((listOrder, index) => (
                                                    <React.Fragment key={index}>{listOrder.productName} {listOrder.unit}<br /></React.Fragment>
                                                ))}
                                            </td>
                                            <td className="text-right">${list.totalPrice}</td>
                                            <td className="text-center">{list.dateTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}