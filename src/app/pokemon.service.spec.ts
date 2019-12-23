import { TestBed } from '@angular/core/testing';

import { PokemonServices } from './pokemons.service';

describe('PokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonServices = TestBed.get(PokemonServices);
    expect(service).toBeTruthy();
  });
});
