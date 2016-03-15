namespace app.Services{
  interface IMovieResourceClass extends ng.resource.IResource<IMovieResourceClass>{
    id: number;
    title: string;
    director: string;
  }

  interface IMovieResource extends ng.resource.IResourceClass<IMovieResourceClass>{

  }

  export class MovieService{
    private MovieResource: ng.resource.IResourceClass<ng.resource.IResource<any>>;

    public getAll(){
      return this.MovieResource.query();
    }

    public create(movie:app.Interfaces.IMovie){
      return this.MovieResource.save(movie).$promise;
    }

    public delete(movieId:number){
      return this.MovieResource.delete({id: movieId}).$promise;
    }

    public getMovie(id:number){
      return this.MovieResource.get({id: id});
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.MovieResource = $resource('/api/movies/:id')
    }

  }
  angular.module('app').service('MovieService',MovieService);
}
