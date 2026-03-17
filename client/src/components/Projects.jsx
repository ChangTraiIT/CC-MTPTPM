function Projects() {
  return (
    <div className="col_w960 col_w960_last">
      <h2>Latest Projects</h2>

      <div className="lp_box">
        <h6>Nullam ut neque neque</h6>
        <a href="#">
          <img src="/images/tooplate_image_01.jpg" alt="Image 01" />
        </a>
        <p>
          Etiam ut nibh et urna cursus ultricies nec vel nunc. In hac habitasse
          platea dictumst.
        </p>
        <a href="#" className="more float_r">
          More
        </a>
        <div className="cleaner"></div>
      </div>

      <div className="lp_box">
        <h6>Sed aliquam mauris</h6>
        <a href="#">
          <img src="/images/tooplate_image_02.jpg" alt="Image 02" />
        </a>
        <p>
          Donec ullamcorper feugiat nunc ut tempus. Sed sodales, nibh ut
          ultricies pulvinar.
        </p>
        <a href="#" className="more float_r">
          More
        </a>
        <div className="cleaner"></div>
      </div>

      <div className="lp_box lp_box_last">
        <h6>Aliquam aliquet sem</h6>
        <a href="#">
          <img src="/images/tooplate_image_03.jpg" alt="Image 03" />
        </a>
        <p>
          Praesent auctor quam quis libero venenatis dapibus. Donec ullamcorper
          feugiat nunc ut tempus.
        </p>
        <a href="#" className="more float_r">
          More
        </a>
        <div className="cleaner"></div>
      </div>

      <div className="cleaner"></div>
    </div>
  )
}

export default Projects