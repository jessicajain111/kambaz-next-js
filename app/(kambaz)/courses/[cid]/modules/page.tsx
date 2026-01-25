export default function Modules() {
    return (
      <div>
        {/* Buttons like Collapse All or View Progress can be added later */}
  
        <ul id="wd-modules">
  
          {/* Module 1 */}
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
  
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
  
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Introduction to the course
                  </li>
                  <li className="wd-content-item">
                    Learn what is Web Development
                  </li>
                </ul>
  
              </li>
            </ul>
          </li>
  
          {/* Module 2 */}
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
          </li>
  
          {/* Module 3 */}
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
          </li>
  
        </ul>
      </div>
    );
  }
  