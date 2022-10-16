import { useState } from 'react';
import './ToggleStyle.css';

function Toggle() {
  // 1. enabling state useState(value)
  // 2. initialize state userState...
  // 3. reading state
  // 4. update state
  const [on, setOn] = useState(false);
  //   console.login(On);
  // [active,setActive], [run, setRun],[love, setLove]
  //   state change => re-render
  return (
    <div>
      <div className={`toggle ${on ? 'active' : 'Off'}`}>
        <div className={`snipper ${on ? 'active' : 'Off'}`}></div>
      </div>
      <div className='toggle__control'>
        <div className='toggle__on' onClick={() => setOn(true)}>
          On
        </div>
        <div className='toggle__off' onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </div>
  );
}
export default Toggle;
