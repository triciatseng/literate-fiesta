namespace app.Controllers{
  export class MovieDetailsController{
    public movie: app.Interfaces.IMovie;

    constructor(private $stateParams: ng.ui.IStateParamsService, private MovieService:app.Services.MovieService){
      this.movie = MovieService.getMovie( $stateParams['id']);
    }
  }

  angular.module('app').controller('MovieDetailsController',MovieDetailsController);
}
