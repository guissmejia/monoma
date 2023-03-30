import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Moves } from '../../models/PokemonData';

type Pokemon = {
  pokemon: any
};

const CardItem = ({ pokemon: { id, sprites, name, weight, moves } }: Pokemon) => {
  const { front_default } = sprites?.other?.dream_world
  const pokemonName = `${name.charAt(0).toUpperCase()}${name.toLowerCase().slice(1)}`

  return (
    <Grid item key={id} xs={12} sm={6} md={4} sx={styles.Grid}>
      <Card sx={styles.Card}>
        <CardMedia
          component="img"
          sx={styles.CardMedia}
          image={front_default}
          alt={pokemonName}
          title={pokemonName}
        />
        <Typography gutterBottom variant="inherit" component="span" sx={styles.Weight}>
          Weight: {weight} kg
        </Typography>
        <CardContent sx={styles.CardContent}>
          <Typography gutterBottom variant="h5" component="h2" sx={styles.CardTitle}>
            {pokemonName}
          </Typography>
          {moves.slice(0, 2).map((move: Moves, idx: number) => (
            <Typography component="span" sx={styles.Tags} key={`${pokemonName}-${move.move.name}-${idx}`}>
             {`#${move.move.name} `}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Grid>

  )
}

const styles = {
  Grid: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  Card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    borderRadius: '20px',
    backgroundColor: '#4C7961',
    position: 'relative',
    zIndex: '5',
    transition: 'all .5s',
    ':hover': {
      cursor: 'pointer',
      bgcolor: '#47667b',
      transform: 'scale(0.95)',
      transition: 'all .5s'
    },
  },
  CardMedia: {
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
    width: '100%',
    height: '100%',
    objectFit: 'initial',
  },
  Weight: {
    position: 'absolute',
    bottom: '30%',
    right: '8%',
    background: '#39D152',
    fontWeight: '500',
    fontSize: '17px',
    padding: '3px 12px',
    borderRadius: '15px',
    color: '#fff',
  },
  CardContent: {
    flexGrow: 1,
    background: '#fff',
    padding: '30px 35px',
  },
  CardTitle: {
    color: '#1C5533',
    fontWeight: '600'
  },
  Tags: {
    color: '#638E77',
  }
}


export default CardItem