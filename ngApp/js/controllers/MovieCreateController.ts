namespace app.Controllers{
  export class MovieCreateController{
    public movie:app.Interfaces.IMovie = {id:null,title:"",director:""};

    public createMovie(){
        this.MovieService.create(this.movie).then((res)=>{
          this.$state.go('Home');
        }, (err)=>{

        })
    }

    constructor(private MovieService: app.Services.MovieService, private $state: ng.ui.IStateService){

    }
  }

  angular.module('app').controller('MovieCreateController',MovieCreateController);
}
