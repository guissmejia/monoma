import React, { useEffect, useState } from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CardItem from '../components/Card/CardItem';
import { Loader } from '../components/Loader';

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
		const { results } = await PokemonService.pokemons(offset)

		for (let pokemon of results) {
			getPokemonById(pokemon);
		}
		setLoading(false)
	}

	const getPokemonById = async (pokemon: PokemonData) => {
		const response = await PokemonService.pokemon(pokemon.url)

		setPokemons((data) => [...data, response]);
	}

	return (
		<Container component="main" fixed maxWidth={'lg'}>
			<Grid container spacing={4}>
				{loading ? <Loader /> : null}
				{pokemons.map((pokemon) => (
					<CardItem pokemon={pokemon} key={pokemon.name}/>
				))}
			</Grid>
		</Container>
	)
}

export default Dashboard