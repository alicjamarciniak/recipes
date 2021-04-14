import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FavoriteBorder } from '@material-ui/icons';
import food from './../../images/food.png';

const useStyles = makeStyles((theme) => ({
  recipeCardMedia: {
    background: theme.palette.primary.noImgBackground,
    paddingTop: '60px',
    paddingBottom: '60px',
    objectFit: 'contain',
  },
  recipeTitle: {
    fontSize: '20px',
  },
  favoriteIcon: {
    color: theme.palette.secondary.main,
  },
  recipeDesc: {
    fontSize: '16px',
    marginTop: '20px',
  },
}));

const RecipeCard = () => {
  const classes = useStyles();

  return (
    <Grid item lg={3} md={4} sm={6} xs={9}>
      <Card>
        <CardMedia
          component="img"
          alt="No recipe image to display"
          height="100"
          image={food}
          title="No recipe image to display"
          className={classes.recipeCardMedia}
        />
        <CardContent>
          <Grid container alignItems="center" justify="space-between">
            <Typography xs={10} variant="h3" className={classes.recipeTitle}>
              My Yummy Recipe
            </Typography>
            <IconButton
              xs={2}
              className={classes.favoriteIcon}
              aria-label="favorite"
            >
              <FavoriteBorder />
            </IconButton>
          </Grid>
          <Typography variant="h4" className={classes.recipeDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum dui sapien, nec tincidunt enim sodales in. Nullam sagittis
            enim id est elementum, imperdiet rhoncus ex viverra.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecipeCard;
