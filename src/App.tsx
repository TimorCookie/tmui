import React from 'react';
import Button,{ ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button size={ButtonSize.Large}>test</Button>
      <Button size={ButtonSize.Small} disabled>test</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger} onClick={()=> {console.log('error')}}>test</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>test</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Link} href='https://www.baidu.com'>test</Button>
    </div>
  );
}

export default App;
