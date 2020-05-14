import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 75,
  },
  media: {
    height: 100,

    flexGrow: 1,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  

  return (
    <div className="cards">
      {props.teachers.map(instructor => {
        console.log(instructor.instrument)

       
      return (<Card className={classes.root}>
        <img width = "200px" src= {instructor.image}></img>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {instructor.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {instructor.instrument}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/Schedule">
        <Button size="small" color="primary">
          Schedule a Lesson
        </Button>
        </Link>
      </CardActions>
    </Card>)
      })}
    

    
    </div>


    
  );
}