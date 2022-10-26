import { Box, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';



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
        <Box style={{display:'flex', flexDirection:'column', width:'300px', height:'500px', backgroundColor:'grey'}}>
           <Button variant="outlined" >Filmes</Button>
           <Button variant="outlined">series</Button>
           <Button variant="outlined">canais</Button>
           <Button 
           variant="outlined" 
           onClick={() => {setEscolha(options.series.supermanLouis) }}>
            Superman e Louis
            </Button>
           <Button 
           variant="outlined"  
           onClick={() => {setEscolha(options.series.vikings) }}>
            Vikings - Valhala
            </Button>
           <Button variant="outlined">canais</Button>
           <Button variant="outlined">canais</Button>
           <Button variant="outlined">canais</Button>
           <Button variant="outlined">canais</Button>
        </Box>
    )
       
}