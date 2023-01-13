import { Button, Grid } from '@material-ui/core';
import {channel} from '../components/objects/Chanel';
import { filmes } from '../components/objects/Filmes';
import { series } from '../components/objects/Series';
import '../global.css'


export function Chanel (props) {
    const { escolha } = props
const filme = filmes.adaonegro.path;
const canal = channel.canais.path;
const serie = series.halo.path;


 

  
    
    return (
        <Grid style={{width:'80%', height:'500px'}}>
          <iframe  src="https://embedflix.net/tv/" 
          frameborder="0" 
          height="400" 
          scrolling="no" 
          width="640" 
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"
          >
          
           </iframe>
           
        </Grid>
    );
}