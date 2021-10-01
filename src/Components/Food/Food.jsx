import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Food = props => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.foodData;
    return (
        <div>
            <Card>
                <CardMedia
                    component="img"
                    height="auto"
                    image={strMealThumb}
                    alt={strMeal}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 200)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/food/${idMeal}`}>
                        <Button variant="contained">Show Details</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};


export default Food;