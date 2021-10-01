import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=a');

    const handleChange = (event) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`)
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => data.meals ? setFoods(data.meals) : '')
    }, [url]);
    return (
        <>
            <TextField
                sx={{ width: '50%', margin: '30px auto', display: 'flex' }}
                id="outlined-basic"
                label="Search Food you Want"
                variant="outlined"
                onChange={handleChange}
                margin="dense"
            />
            <hr style={{ width: '80%', margin: '30px auto' }} />
            <Grid sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} >
                {foods.map(food => <Food foodData={food} key={food.idMeal}></Food>)}
            </Grid>
        </>
    );
};

export default Foods;