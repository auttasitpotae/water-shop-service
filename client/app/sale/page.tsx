"use client"

import { useState } from "react"
import Dialog from "./dialog";

export default function sale() {
    const [dataSale, setDataSale] = useState({
        bigSize: '',
        mediumSize: '',
        smallSize: ''
    })
    const [totalPayment, setTotalPayment] = useState('')
    const [dialog, setDialog] = useState(false)

    const handleInputChange = (event: any) => {
        const key = event.target.name
        const value = Number(event.target.value)
        setDataSale(prevDataSale => ({ ...prevDataSale, [key]: value }));
    }

    const handelSubmit = async () => {
        const totalUnit = Number(dataSale.bigSize) + Number(dataSale.mediumSize) + Number(dataSale.smallSize)
        const calcurate = totalUnit * 25
        console.log(calcurate.toLocaleString());
        
        setTotalPayment(calcurate.toLocaleString())

        const reqBody = [
            {
                projectName: 'แพ็คใหญ่',
                unit: dataSale.bigSize
            },
            {
                projectName: 'แพ็คกลาง',
                unit: dataSale.mediumSize
            },
            {
                projectName: 'แพ็คเล็ก',
                unit: dataSale.smallSize
            },
        ]
        await fetch('http://localhost:3001/sale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        })

        swittDialog()
        clearDataSale()
    }

    const swittDialog = () => {
        setDialog(!dialog)
    }

    const clearDataSale = () => {
        setDataSale({ bigSize: '', mediumSize: '', smallSize: '' })
    }

    return (
        <>
            <div className="card">
                <div className="grid" style={{ textAlign: "center" }}>
                    <div className="col-12">
                        <a href="./sale">
                            <button style={{ width: "100%" }} className="btn btn-primary" disabled>ขายของ</button>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href="./daily-sales">
                            <button style={{ width: "100%" }} className="btn btn-primary">ดูยอดขายทั้งหมด</button>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href="./stock">
                            <button style={{ width: "100%" }} className="btn btn-primary">สินค้าที่เหลือ</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card grid">
                <div className="col-12 card-header" style={{ textAlign: "center" }}>
                    ขายของ
                </div>
                <div className="col-12 grid card-content">
                    <div className="col-3" style={{ alignSelf: "center;" }}>
                        น้ำแพ็คใหญ่
                    </div>
                    <div className="col-7 card-content">
                        <input type="number" name="bigSize" value={dataSale.bigSize} onChange={handleInputChange} />
                    </div>
                    <div className="col-2" style={{ alignSelf: "center;" }}>
                        /แพ็ค
                    </div>
                    <div className="col-3" style={{ alignSelf: "center;" }}>
                        น้ำแพ็คกลาง
                    </div>
                    <div className="col-7 card-content">
                        <input type="number" name="mediumSize" value={dataSale.mediumSize} onChange={handleInputChange} />
                    </div>
                    <div className="col-2" style={{ alignSelf: "center;" }}>
                        /แพ็ค
                    </div>
                    <div className="col-3" style={{ alignSelf: "center;" }}>
                        น้ำแพ็คเล็ก
                    </div>
                    <div className="col-7 card-content">
                        <input type="number" name="smallSize" value={dataSale.smallSize} onChange={handleInputChange} />
                    </div>
                    <div className="col-2" style={{ alignSelf: "center;" }}>
                        /แพ็ค
                    </div>
                </div>
                <div className="card-footer col-12 grid">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={clearDataSale} style={{ width: "100%" }}>เครียร์ค่า</button>
                    </div>
                    <div className="col-6">
                        <button onClick={handelSubmit} className="btn btn-success" style={{ width: "100%" }}>บันทึก</button>
                    </div>
                </div>
            </div>
            {dialog ? (<Dialog swittDialog={swittDialog} totalPayment={totalPayment} />) : (<></>)}
        </>
    )
}