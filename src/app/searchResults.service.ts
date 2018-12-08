import {Track} from './track.model';

export class SearchResultsService {
  public Tracks: Track[] = [];
  public Selected: number = -1; // Default to negative to indicate,
                                // that nothing was selceted.
}
