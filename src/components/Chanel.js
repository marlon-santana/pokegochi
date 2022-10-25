import { Grid } from '@material-ui/core';

export function Chanel () {
    return (
        <Grid style={{width:'80%', height:'500px', backgroundColor:'blue', zIndex: 10}}>
            <iframe
            src='https://embedflix.net/tv/' 
            width="100%"
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            allowfullscreen="true"
            scrolling="auto">

            </iframe>
        </Grid>
    );
}