export default function stock() {
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
                            <button style={{ width: "100%" }} className="btn btn-primary">
                                ดูยอดขายทั้งหมด
                            </button>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href="./stock">
                            <button style={{ width: "100%" }} className="btn btn-primary" disabled>
                                สินค้าที่เหลือ
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center">สินค้าคงเหลือทั้งหมด</div>
                <div className="card-content">
                    <table>
                        <thead>
                            <tr className="text-center">
                                <th>ลำดับ</th>
                                <th>รายการสินค้า</th>
                                <th>คงเหลือ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>แพ็คใหญ๋</td>
                                <td className="text-right">10</td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>แพ็คกลาง</td>
                                <td className="text-right">10</td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>แพ็คเล็ก</td>
                                <td className="text-right">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer grid">
                    <div className="col-12">
                        <button className="btn btn-warning" style={{ width: "100%" }}>
                            เพิ่มสินค้า
                        </button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-danger" style={{ width: "100%" }}>
                            เครียร์สินค้าทั้งหมด
                        </button>
                    </div>

                    <div className="overlay" id="dialogStock" style={{ display: "none" }}>
                        <div className="dialog">
                            <div className="dialog-header">เพิ่มสินค้า</div>
                            <div className="dialog-content">
                                <div className="grid">
                                    <div className="col-3" style={{ alignSelf: "center" }}>ชื่อสินค้า</div>
                                    <div className="col-9">
                                        <input type="text" />
                                    </div>
                                    <div className="col-3" style={{ alignSelf: "center" }}>ราคาขาย</div>
                                    <div className="col-9">
                                        <input type="number" />
                                    </div>
                                    <div className="col-3" style={{ alignSelf: "center" }}>ราคาต้นทุน</div>
                                    <div className="col-9">
                                        <input type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="dialog-buttons grid">
                                <button className="btn btn-danger col-6" style={{ width: "100%" }}>ยกเลิก</button>
                                <button className="btn btn-success col-6" style={{ width: "100%" }}>บันทึก</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}