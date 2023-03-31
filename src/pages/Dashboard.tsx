import React, { useEffect, useState } from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

import CardItem from '../components/Card/CardItem';
import { Loader } from '../components/Loader';

import { notify } from "../utils/utils";
import { PokemonService } from '../services/pokemons.service'
import { PokemonData, Pokemons } from '../models/PokemonData';

const Dashboard = () => {
	const [pokemons, setPokemons] = useState<Array<Pokemons>>([]);
	const [loading, setLoading] = useState(true)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		getPokemons()
	}, [])

	const getPokemons = async () => {
		try {
			const { results } = await PokemonService.pokemons(offset)

			for (let pokemon of results) {
				getPokemonById(pokemon);
			}
			setOffset(offset + 10)
			setLoading(false)
		} catch (error) {
			notify('error', 'Failure to obtain pokemon')
		}
	}

	const getPokemonById = async (pokemon: PokemonData) => {
		try {
			const response = await PokemonService.pokemon(pokemon.url)

			setPokemons((data) => [...data, response]);
		} catch (error) {
			notify('error', 'Failure to obtain pokemon')
		}
	}

	const goToNextPage = () => {
		setOffset(offset + 10)

		getPokemons()
	}

	return (
		<Container component="main" fixed maxWidth={'lg'} sx={styles.Container}>
			<Grid container spacing={4}>
				{loading ? <Loader /> : (
					<>
						{pokemons.map((pokemon) => (
							<CardItem pokemon={pokemon} key={pokemon.name} />
						))}
					</>
				)}
			</Grid>
			<Box>
				<Button
					sx={styles.Button}
					variant="contained"
					onClick={goToNextPage}
				>
					{loading ? <Loader /> : 'Load More'}
				</Button>
			</Box>
		</Container>
	)
}

const styles = {
	Container: {
    marginTop: '110px',
		paddingBottom: '60px'
	},
	Button: {
		display: 'block',
		margin: '1em auto',
		background: '#47667b',
		padding: '1em 2em',
		':hover': {
      cursor: 'pointer',
      bgcolor: '#4C7961',
      transform: 'scale(0.95)',
      transition: 'all .5s'
    },
	}
}

export default Dashboard