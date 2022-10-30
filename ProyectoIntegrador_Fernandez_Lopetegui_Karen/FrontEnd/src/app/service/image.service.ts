import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, listAll } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string="";
 

  constructor(private storage: Storage) {
    
   }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRef, file).then( async response => { this.getImages() }).catch(error => console.log(error))
  }

  getImages() {
    
    const imagesRef= ref(this.storage,'imagen')
    list(imagesRef).then(async response =>{
      for(let item of response.items){
        this.url= await getDownloadURL(item);
        console.log("La URL es: "+this.url);
      }
    } )
    .catch(error => console.log(error))
    }

    public uploadImageProyect($event: any) {
      const file = $event.target.files[0]
      const imgRef = ref(this.storage,`imagenP/${file.name}`)
      uploadBytes(imgRef, file).then(async response => { this.getImagesP() }).catch(error => console.log(error))
    }

    getImagesP() {
    
      const imagesRef= ref(this.storage,'imagenP')
      listAll(imagesRef).then(async response =>{
      
        for(let item of response.items){
          this.url= await getDownloadURL(item);
          console.log("La URL es: "+this.url);
         
        }
      } ) 
      .catch(error => console.log(error))
      }
}
