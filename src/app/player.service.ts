import { Injectable } from '@angular/core';

export class Track {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  current: number;
  playlist: Track[] = [
    {
      name: 'Sixteen',
      artist: 'Ellie Goulding',
      url: 'https://docs.google.com/uc?export=download&id=107-QHev-hsPV2m_onoLFIzVIobjaPzDD',
      cover: 'https://www.tunelyrico.com/wp-content/uploads/2019/04/sixteen-ellie-goulding-lyrics.jpg',
    },
    {
      name: 'Ban',
      artist: 'Sunanda Sharma',
      url: 'https://docs.google.com/uc?export=download&id=1eomgpXv3myHo86ysjW5lLHvRmSVienkp',
      cover: 'https://pbs.twimg.com/media/EApDldrWsAE6cz4.jpg',
    },
    {
      name: 'Come Together',
      artist: 'Beatles',
      url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
      cover: 'https://c.saavncdn.com/540/Listen-Again-English-2015-500x500.jpg',
    },
  ];

  random(): Track {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  next(): Track {
    return this.getNextTrack();
  }

  prev() {
    return this.getPrevTrack();
  }

  private getNextTrack(): Track {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }

    return this.playlist[this.current];
  }

  private getPrevTrack(): Track {
    if (this.current === 0) {
      this.current = this.playlist.length - 1;
    } else {
      this.current--;
    }

    return this.playlist[this.current];
  }
}
