import { TestBed } from '@angular/core/testing';

import { GitSearchService } from './git-search.service';

describe('GitSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSearchService = TestBed.get(GitSearchService);
    expect(service).toBeTruthy();
  });
});
