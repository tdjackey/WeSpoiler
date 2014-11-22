'use strict';

var app = angular.module('wespoilerApp');


app.factory('AllService', function(){
  var methods = {};
  var movieObject = AV.Object.extend('Movie');
  var spolierObject = AV.Object.extend('Spolier');

  methods.getMovie = function(id,successFunc){
    var movieQuery = new AV.Query(movieObject);
    movieQuery.get(id,{
      success:function(result){
        var movie = {};
        movie.id = result.id;
        movie.month = result.get('month');
        movie.name = result.get('name');
        var poster = result.get('poster');
        if(poster){
          movie.poster = poster.url();
        }
        successFunc(movie);
      }
    });
    return;
  };
  methods.getMovies = function(successFunc){
    var movieQuery = new AV.Query(movieObject);
    movieQuery.find({
      success: function(results){
        var movies = [];
        var i = 0;
        for(i = 0; i < results.length; i += 1){
          var movie = {};
          movie.id = results[i].id;
          movie.month = results[i].get('month');
          movie.name = results[i].get('name');
          var poster = results[i].get('poster');
          if(poster){
            movie.poster = poster.url();
          }
          movies.push(movie);
        }
        var m = _.groupBy(movies,'month');
        var moviesPres = [];
        for(i = 12; i >= 1; i -= 1){
          if(m[i+'']){
            moviesPres.push({
              month: i+'',
              movies: m[i+'']
            });
          }
        }
        successFunc(moviesPres);
      }
    });
  };
  methods.getSpolierByMovie = function(movieId, successFunc){
    var movie = movieObject.new();
    movie.id = movieId;
    var spolierQuery = new AV.Query(spolierObject);
    spolierQuery.equalTo('movie',movie);
    spolierQuery.find({
      success: function(results){
        var spoliers = [];
        for(var i = 0; i < results.length; i += 1){
          var spolier = {};
          spolier.id = results[i].id;
          spolier.content = results[i].get('content');
          spolier.hates = results[i].get('hates');
          spoliers.push(spolier);
        }
        successFunc(spoliers);
      }
    });


  };
  methods.newSpolier = function(movieId, message, successFunc){
    var spolier = spolierObject.new();
    var movie = movieObject.new();
    movie.id = movieId;
    spolier.set('content', message);
    spolier.set('movie', movie);
    spolier.save(null, {
      success: function(result){
        successFunc(result);
      }
    });
  };
  return methods;
});
