export interface PokemonData {
  name: string;
  url: string;
}

export interface Abilities {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean
  slot: number;
}

export interface Forms {
  name: string;
  url: string;
}

export interface GameIndices {
  game_indices: number;
  version: {
    name: string;
    url: string;
  }
}

export interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  }
  version_group: {
    name: string;
    url: string;
  }
}

export interface Moves {
  move: {
    name: string;
    url: string;
  }
  version_group_details: VersionGroupDetails
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  name: string;
  url: string;
  back_default: string;
  back_female: null
  back_shiny: string;
  back_shiny_female: null
  front_default: string;
  front_female: null
  front_shiny: string;
  front_shiny_female: null
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface Pokemons {
  abilities: Array<Abilities>;
  base_experience: number;
  forms: Array<Forms>;
  game_indices: Array<GameIndices>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: Species;
  sprites: Sprites,
  stats: Array<Stats>;
  types: Array<Types>;
  weight: number;
}

export interface CustomerResponse {
  count: number,
  next: string,
  previous: null,
  results: Array<PokemonData> | []
}