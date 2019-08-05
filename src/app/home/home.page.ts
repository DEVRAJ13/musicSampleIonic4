
import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { PlayerService, Track } from '../player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  track: Track;
  player: HTMLAudioElement;
  shuffle: boolean;
  interval:any;
  constructor(private playerService: PlayerService) {
    this.track = this.playerService.random();
    this.createPlayer();

    
  }

  ngOnDestroy() {
    this.player.pause();
    this.player.src = '';
    this.player.load();
  }

  prev() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.prev();
      }
    }

    this.reload();
  }

  next() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.next();
      }
    }

    this.reload();
  }

  playPause() {
    if (this.player.paused) {
      this.player.play();
     this.interval = setInterval(()=>{
        this.getProgress();
      },1000)
    } else {
      this.player.pause();
      clearInterval(this.interval);
    }
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  toggleLoop() {
    this.player.loop = !this.player.loop;
  }

  setVolume(volume: number) {
    this.player.volume = volume / 100;
  }

  getVolume(): number {
    return this.player.volume * 100;
  }

  

  setProgress(duration: number) {
    this.player.currentTime = this.player.duration * duration / 100;
    console.log(this.player.currentTime);
  }

  getProgress(): number {
    console.log(this.player.currentTime);
    return this.player.currentTime / this.player.duration * 100 || 0;
  }

  private createPlayer() {
    this.player = new Audio();
    this.player.onended = () => this.next();
    this.setTrack();
  }

  private reload() {
    this.setTrack();
    this.player.play();
  }

  private setTrack() {
    this.player.src = this.track.url;
    this.player.load();
  }
}