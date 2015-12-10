var app = angular.module('whatsCookingApp', []);

app.controller('calendarController', ['$http', function ($http) {
  var controller = this;

  this.searchResults = []
  this.shoppingList = []
  this.day = null;
  this.recipe = null;

  this.newRecipe = function (id, key) {
    controller.searchResults = []
    $http.get('https://api.edamam.com/search?q=' + controller.recipe + '&app_id=' + id + '&app_key=' + key).then(
      function (response) {
        for (var i = 0; i < response.data.hits.length; i++) {
          controller.searchResults.push(response.data.hits[i].recipe)
        }
      }, function (err) {
        console.log(err);
      }
    );
  }

  this.chooseRecipe = function (index) {
    controller.recipe = controller.searchResults[index]
    console.log(controller.recipe);
  }

  this.placeRecipe = function (recipeName) {
      $(".day").click(
        this.append("<h3>" + recipeName + "</h3>")
      )
      console.log("clicked");
    }
  $http.get('/kevinisdumb').then(function (response) {
    controller.appId = response.data.appId
    controller.appKey = response.data.appKey
  }, function (err) {
    console.log(err);
  })
}]);
