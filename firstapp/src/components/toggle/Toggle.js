import { useState } from 'react';
import './ToggleStyle.css';

function Toggle() {
  // 1. enabling state useState(value)
  // 2. initialize state userState...
  // 3. reading state
  // 4. update state
  const [on, setOn] = useState(false);
  //   luu ý hook chỉ dùng trong functional component nên chỉ được viết
  //   bên ngoài
  //   console.login(On);
  // [active,setActive], [run, setRun],[love, setLove]
  //   state change => re-render
  const clickButton = () => {
    // khi giá trị phụ thuộc vào giá trị trước đó ta dùng callback
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? 'active' : ''}`} onClick={clickButton}>
        <div
          className={`snipper ${on ? 'active' : ''}`}
          onClick={clickButton}
        ></div>
      </div>
    </div>
  );
}
export default Toggle;
