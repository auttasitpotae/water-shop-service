export default function dialog({ swittDialog, totalPayment }: any) {
    return (
        <div className="overlay" id="dialogStock">
            <div className="dialog">
                <div className="dialog-header">ยอดที่ต้องชำละ</div>
                <div className="dialog-content">
                    <span style={{fontSize: '24px', fontWeight: 'bold', color: 'red'}}>{totalPayment} </span>บาท
                </div>
                <div className="dialog-buttons grid">
                    <button onClick={swittDialog} className="btn btn-success col-12" style={{ width: "100%" }}>บันทึก</button>
                </div>
            </div>
        </div>
    )
}