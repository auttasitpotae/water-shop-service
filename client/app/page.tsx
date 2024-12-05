export default function Home() {
  return (
    <div className="card">
      <div className="grid" style={{ textAlign: "center" }}>
        <div className="col-12">
          <a style={{ textDecoration: "none", color: "#ffffff" }} href="./sale">
            <button style={{ width: "100%" }} className="btn btn-primary">ขายของ</button>
          </a>
        </div>
        <div className="col-12">
          <a style={{ textDecoration: "none", color: "#ffffff" }} href="./daily-sales">
            <button style={{ width: "100%" }} className="btn btn-primary">ดูยอดขายรายวัน</button>
          </a>
        </div>
        <div className="col-12">
          <a style={{ textDecoration: "none", color: "#ffffff" }} href="./stock">
            <button style={{ width: "100%" }} className="btn btn-primary">สินค้าที่เหลือ</button>
          </a>
        </div>
      </div>
    </div>
  );
}
