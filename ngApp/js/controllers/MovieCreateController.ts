namespace app.Controllers{
  export class MovieCreateController{
    public movie:app.Interfaces.IMovie = {id:null,title:"",director:""};

    public createMovie(){
        this.MovieService.create(this.movie).then((res)=>{
          
        }, (err)=>{

        })
    }

    constructor(private MovieService: app.Services.MovieService){

    }
  }

  angular.module('app').controller('MovieCreateController',MovieCreateController);
}
