import React from 'react';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button size='lg'>test</Button>
      <Button size='sm' disabled>test</Button>
      <Button size='sm' btnType='danger' onClick={()=> {console.log('error')}}>test</Button>
      <Button size='sm' btnType='primary'>test</Button>
      <Button size='sm' btnType='link' href='https://www.baidu.com'>test</Button>
    </div>
  );
}

export default App;
