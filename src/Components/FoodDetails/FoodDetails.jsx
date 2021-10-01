import React, { useEffect, useState } from 'react';
import BackHome from '../BackHome';
import { useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';


const FoodDetails = () => {
    const { idMeal } = useParams();
    const [foodDetails, setFoodDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setFoodDetails(data.meals[0]))
    }, [idMeal])

    console.log(foodDetails)
    const { strMeal, strMealThumb, strInstructions, strCategory, strYoutube } = foodDetails;

    return (
        <div>
            <Grid sx={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#fafafa',
                boxShadow: '0 0 10px #333',
                color: '#333'
            }} >
                <img style={{ width: '100%', height:'100%' }} src={strMealThumb} alt={strMeal} />
                <div style={{ padding: '20px' }}>
                    <h1>Name: {strMeal} -
                        <Typography variant="subtitle1" gutterBottom component="i">
                            {strCategory}
                        </Typography>
                    </h1>

                    <p><strong style={{ color: '#000', fontSize: '1.2em' }} >Instructions:</strong> {strInstructions}. </p>
                    <h4>Ingrediences</h4>
                    <ul>
                        <li>{foodDetails.strIngredient1} - {foodDetails.strMeasure1}</li>
                        <li>{foodDetails.strIngredient2} - {foodDetails.strMeasure2}</li>
                        <li>{foodDetails.strIngredient3} - {foodDetails.strMeasure3}</li>
                        <li>{foodDetails.strIngredient4} - {foodDetails.strMeasure4}</li>
                        <li>{foodDetails.strIngredient5} - {foodDetails.strMeasure5}</li>
                        <li>{foodDetails.strIngredient6} - {foodDetails.strMeasure6}</li>
                        <li>{foodDetails.strIngredient7} - {foodDetails.strMeasure7}</li>
                        <li>{foodDetails.strIngredient8} - {foodDetails.strMeasure8}</li>
                    </ul>
                    <hr />

                    <div style={{
                        display: 'flex',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                        <a href={strYoutube} target="_blank" rel='noreferrer'><Button variant="contained">Watch Recipe</Button></a>
                        <BackHome></BackHome>
                    </div>
                </div>
            </Grid>
            <div style={{ textAlign: 'center' }}>
            </div>
        </div>
    );
};

export default FoodDetails;