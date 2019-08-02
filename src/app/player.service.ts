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
      name: 'Don\'t Wanna Fight',
      artist: 'Alabama Shakes',
      url: 'https://docs.google.com/uc?export=download&id=1z8Uy9GyM75TADY6fnqUMLzfP-S8w5hzj',
      cover: 'https://c.saavncdn.com/540/Listen-Again-English-2015-500x500.jpg',
    },
    {
      name: 'Harder',
      artist: 'Daft Punk',
      url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
      cover: 'https://c.saavncdn.com/540/Listen-Again-English-2015-500x500.jpg',
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
