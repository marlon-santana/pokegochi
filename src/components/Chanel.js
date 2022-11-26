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
            <iframe 
            width="100%"
            height="100%" 
            frameborder="0" 
            target='blanck'
            // scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            allowfullscreen="true"
           >
            </iframe>
           
        </Grid>
    );
}