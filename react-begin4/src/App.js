import { useEffect, useState } from 'react';

function Hello() {
  function effectFn() {
    console.log('created');
    return destroyedFn;
  }
  function destroyedFn() {
    console.log('bye');
  }

  useEffect(effectFn, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;