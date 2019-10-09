import { TestBed } from '@angular/core/testing';

import { KeyWordService } from './key-word.service';

describe('KeyWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyWordService = TestBed.get(KeyWordService);
    expect(service).toBeTruthy();
  });
});
