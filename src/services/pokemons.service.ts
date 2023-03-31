import instance from './instance';
import { CustomerResponse, Pokemons } from '../models/PokemonData';

export class PokemonService {
  static pokemons(offset: number): Promise<CustomerResponse> {
    return instance.get(`${process.env.REACT_APP_GET_POKEMON}?limit=10&offset=${offset}`);
  }
  static pokemon(url: string): Promise<Pokemons> {
    return instance.get(`${url}`);
  }
}
