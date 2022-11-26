import { Box, Button } from '@material-ui/core';
import viking from '../image/VIkings-Logo.png';
import { useState } from 'react';



export function Menu () {
  
  const [escolha, setEscolha] = useState('');

  const options = {
    canais: 'https://embedflix.net/tv/',
    filmes: {},
    series: {
        supermanLouis:'https://embedflix.net/serie/tt11192306',
        vikings:'https://embedflix.net/serie/tt11311302',
    },
  }


 

    return (
        <Box style={{display:'flex', flexDirection:'column', width:'300px', height:'500px', backgroundColor:'white'}}>
           <Button href ="https://embedflix.net/serie/tt2934286" target="_self"variant="outlined">HALO</Button>
           <Button href="https://embedflix.net/serie/tt10234724"  target="_self" variant="outlined">CAVALEIRO DA LUA</Button>
           <Button href ="https://embedflix.net/serie/tt11311302" targetr="_sewlf"variant="outlined">VIKINGS
           <img src={viking} width='50px' height='30px' />
           </Button>
           
           
           <Button href="https://embedflix.net/tv/space" target='_self' variant="outlined">SPACE</Button>
           <Button href="https://embedflix.net/tv/tnt" target='_self' variant="outlined">TNT</Button>
           <Button href="https://embedflix.net/tv/bandsport" target='_self' variant="outlined">BAND ESPORT</Button>
           <Button href="https://embedflix.net/tv/record-tv-sp" target='_self' variant="outlined">RECORD SP</Button>
           <Button href="https://embedflix.net/tv/telecine-pipoca-hd" target='_self' variant="outlined">TELE CINE PIPOCA</Button>
           <Button href="https://embedflix.net/tv/telecine-premium-hd" target='_self' variant="outlined">TELE CINE PREMIUM</Button>
           <Button href="https://embedflix.net/tv/telecine-action-hd" target='_self' variant="outlined">TELE CINE ACTION</Button>
           <Button href="https://embedflix.net/tv/hbo-2" target='_self' variant="outlined">HBO</Button>
           <Button href="https://embedflix.net/tv/national-geographic" target='_self' variant="outlined">NATIONAL GEOGRAPHIC</Button>
          
        </Box>
    )
       
}