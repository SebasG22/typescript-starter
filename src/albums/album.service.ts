import { Injectable } from '@nestjs/common';

export interface AlbumEntity {
    id: number;
    name: string;
    year: string;
  }

@Injectable()
export class AlbumService {
    private albums: AlbumEntity[] = [
        {
          id: 1,
          name: 'Ozutochi',
          year: '2022'
        },
        {
          id: 2,
          name: 'YHLQSMDLG',
          year: '2020'
        }
      ];

  getAlbums(): AlbumEntity[] {
    return this.albums;
  }

  getAlbumById(id: number){
    return this.albums.find((item)=> item.id === id);
  }

  addAlbum(name: string, year: string): AlbumEntity{
    const newAlbum = {
        id: this.albums.length + 1,
        name,
        year,
      };
  
      this.albums.push(newAlbum);
  
      return newAlbum;
  }
}
