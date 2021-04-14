import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import RecipeCard from './../RecipeCard/RecipeCard';
import * as Constants from './../../constants';
import axios from 'axios';

const useStyles = makeStyles({
  dashboardContainer: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [data, setData] = useState({ recipes: [] });

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_RECIPES_QUERY,
      });
      const result = queryResult.data.data;
      setData({ recipes: result.recipes });
    };

    fetchData();
  });

  const smMatch = useMediaQuery(theme.breakpoints.up('sm'));
  const mdMatch = useMediaQuery(theme.breakpoints.up('md'));
  const lgMatch = useMediaQuery(theme.breakpoints.up('lg'));
  const getCardAmount = (() => {
    if (lgMatch) return 4;
    if (mdMatch) return 3;
    if (smMatch) return 2;
    return 1;
  })();

  return (
    <React.Fragment>
      {[...Array(4)].map((val, id) => (
        <Grid
          key={`dshRcpGrd${id}`}
          container
          className={classes.dashboardContainer}
        >
          <Grid container justify="center" spacing={3}>
            {[...Array(getCardAmount)].map((val, id) => (
              <RecipeCard key={`dshRcpCrd${id}`} />
            ))}
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Dashboard;
