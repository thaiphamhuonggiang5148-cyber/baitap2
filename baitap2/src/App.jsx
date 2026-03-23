import Welcome from './Welcom'; 
import './App.css';

function App() {
  return (
    <>
      <div className="card" style={{ backgroundColor: '#ffc0cb' }}>
        <div className="name">
          <Welcome name="Hương Giang" textColor="palevioletred" />
        </div>
        <div>
          <h2>Lớp: 26.SP.IT3</h2>
          <h2>Tuổi: 17 </h2>
          <h2>Sở thích: ngủ, nấu ăn</h2>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: '#e0f7fa' }}>
        <div className="name">
          <Welcome name="Minh Nhật" textColor="#00796b" />
        </div>
        <div>
          <h2>Lớp: 26.SP.IT3</h2>
           <h2>Tuổi: 20 </h2>
          <h2>Sở thích: chạy deadline,học y</h2>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: '#fff9c4' }}>
        <div className="name">
          <Welcome name="Minh Thư" textColor="#fbc02d" />
        </div>
        <div>
          <h2>Lớp: 26.SP.IT3</h2>
           <h2>Tuổi: 17 </h2>
          <h2>Sở thích: đọc sách</h2>
        </div>
      </div>
    </>
  );
}

export default App;