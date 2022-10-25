import { Injectable } from '@nestjs/common';
import { AlbumEntity } from '../albums/album.service';

export interface SongEntity {
    id: number;
    name: string;
    albumId: number;
    album?: AlbumEntity;
    sebas?:string;
  }

@Injectable()
export class SongService {
    private songs: SongEntity[] = [
        {
          id: 1,
          name: 'Hey mor',
          albumId: 1
        },
        {
          id: 2,
          name: 'Moscow Mule',
          albumId: 2
        }
      ];

  getSongs(): SongEntity[] {
    return this.songs;
  }

  addSong(name: string, albumId: number): SongEntity{
    const newSong = {
        id: this.songs.length + 1,
        name,
        albumId
      };
  
      this.songs.push(newSong);
  
      return newSong;
  }
}
