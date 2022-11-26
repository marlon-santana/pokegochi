import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Chanel } from './components/Chanel';
import { Box } from '@material-ui/core';
import '../src/global.css'








function App(props) {
  const {escolha} = props;

 
  return (
 
    <Box>
      <Header />
      <Box style={{display:'flex'}}>
      <Menu />
      </Box>
      
    </Box>

  );
}

export default App;
