import React, { useEffect, useState } from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import Breadcrumb from '../components/Breadcrumb';
import CardItem from '../components/Card/CardItem';
import { Loader } from '../components/Loader';
import GoUp from '../components/GoUp';

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
			<Breadcrumb pathParams={null} />
			<Box sx={styles.BoxTitle}>
				<Typography gutterBottom variant="h1" component="h1" sx={styles.Title}>
					Welcome to
				</Typography>
				<img alt="PokeAPI Icon" src={process.env.REACT_APP_POKEAPI_LOGO_URL} style={styles.Avatar} />
			</Box>
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
			<GoUp />
		</Container>
	)
}

const styles = {
	BoxTitle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '1em 0',
		'@media (max-width: 900px)': {
			flexDirection: 'column'
		}
	},
	Title: {
		m: 0,
		fontWeight: '500',
		fontFamily: 'Nunito',
		'@media (max-width: 900px)': {
			fontSize: '4rem'
		},
		'@media (max-width: 500px)': {
			fontSize: '3rem'
		}
	},
	Avatar: {

	},
	Container: {
		marginTop: '80px',
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