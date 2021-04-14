import React, { useState } from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons';
import Image from 'material-ui-image';
import meal from './../../images/meal.jpg';

const useStyles = makeStyles((theme) => ({
  recipeMainImgContainer: {
    height: '600px',
    overflow: 'hidden',
  },
  recipeDescContainer: {
    height: '540px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: '30px',
  },
  recipeTitle: {
    fontSize: '40px',
  },
}));

const Recipe = ({
  match: {
    params: { recipeId },
  },
}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);

  const handleSelection = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // TODO: Create reusable custom Image component based on Material UI Image
  const RecipeMainImage = () => {
    return (
      <Paper square elevation={0} className={classes.recipeMainImgContainer}>
        <Image src={meal} className={classes.recipeMainImg} />
      </Paper>
    );
  };

  // TODO: Separate to reusable CheckboxList component
  const RecipeIngredientsList = () => {
    return (
      <List aria-label="ingredients list">
        {[0, 1, 2, 3].map((value) => {
          return (
            <ListItem
              dense
              key={`rcpIngrdItm${value}`}
              onClick={handleSelection(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<CheckCircle />}
                  color="primary"
                />
              </ListItemIcon>
              <ListItemText primary="Text1"></ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={5}>
        <RecipeMainImage />
      </Grid>
      <Grid item xs={12} md={7}>
        <Paper square elevation={0} className={classes.recipeDescContainer}>
          <Typography variant="h2" className={classes.recipeTitle}>
            MyRecipeName
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <RecipeIngredientsList />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Recipe;
