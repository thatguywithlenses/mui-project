import React from "react";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

import useStyles from "./styles";

const cards=[1,2,3,4,5,6,7,8,9];

const App = () =>{

    const classes=useStyles();
    return(
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">Thatguywithlenses</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                       <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                          Thatguywithlenses
                       </Typography>
                       <Typography variant="h5" align="center" color="textSecondary" paragraph>
                           Hello everyone, this is a photo album and i'm trying to make this sentence as long as possible so that we can see what it looks like on the screen.
                       </Typography>
                       <div className={classes.button}>
                           <Grid container spacing={2} justify="center">
                               <Grid item>
                                   <a href="https://www.instagram.com/thatguywithlenses/" target='_blank' rel="noreferrer" style={{textDecoration:'none'}}>
                                        <Button variant="contained" color="primary">
                                            See my Clicks on instagram
                                        </Button>
                                   </a>
                               </Grid>
                               <Grid item>
                                   <Button variant="outlined" color="primary">
                                       Secondary Action
                                   </Button>
                               </Grid>
                           </Grid>
                       </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">Heading</Typography>
                                    <Typography>This is a media card, You can use this section to describe the content.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    ©Developed and designed by @thatguywithlenses
                </Typography>
            </footer>
        </>
    );
}

export default App;