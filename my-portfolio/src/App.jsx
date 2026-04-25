import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="logo">TRI PORTFOLIO</div>
        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="hero">
        <h1 className="bg-text">PORTFOLIO</h1>

        <div className="left">
          <h2>
            <span>Portfolio cá nhân</span> là nơi bạn thể hiện tư duy thiết kế,
            dự án và cá tính sáng tạo của mình.
          </h2>
        </div>

        <div className="right">
          <div className="image-box">
            <img src="https://i.imgur.com/8Km9tLL.jpg" alt="profile" />
          </div>

          <div className="title">
            <div className="dot"></div>
            <h3>
              <i>ARCHITECT</i>
              <br />
              DESIGNER
            </h3>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>ABOUT ME</h2>
        <p>
          Tôi là sinh viên kiến trúc, tập trung vào thiết kế không gian,
          tư duy hình khối và trải nghiệm người dùng.
        </p>

        <div className="skills">
          <div>Revit</div>
          <div>Photoshop</div>
          <div>Illustrator</div>
          <div>3Ds Max</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>CONTACT</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>Phone: 0123 456 789</p>
      </section>

      <footer>
        <p>© 2026 Trí</p>
      </footer>
    </>
  );
}

export default App;