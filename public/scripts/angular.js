var app = angular.module('whatsCookingApp', []);

app.controller('calendarController', ['$http', function ($http) {
  var controller = this;

  this.searchResults = [];
  this.day = null;
  this.searchTerm = null;
  this.recipe = null;
  this.calendar = {
    sunday: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: ""
  }
  this.shoppingList = [];

  this.newRecipe = function (id, key) {
    controller.searchResults = []
    $http.get('https://api.edamam.com/search?q=' + controller.searchTerm + '&app_id=' + id + '&app_key=' + key).then(
      function (response) {
        for (var i = 0; i < response.data.hits.length; i++) {
          controller.searchResults.push(response.data.hits[i].recipe)
          controller.searchTerm = null
        }
      }, function (err) {
        console.log(err);
      }
    );
  }

  this.chooseRecipe = function (index) {
    controller.recipe = controller.searchResults[index].label
    for (var i = 0; i < controller.searchResults[index].ingredientLines.length; i++) {
      controller.shoppingList.push(controller.searchResults[index].ingredientLines[i])
      controller.searchTerm = null
    }

    if (controller.day == "sunday") {
      controller.calendar.sunday = calendar.recipe
      controller.recipe = null;
    } else if (controller.day == "monday") {
      controller.calendar.monday = calendar.recipe
      controller.recipe = null;
    } else if (controller.day == "tuesday") {
      controller.calendar.tuesday = calendar.recipe
      controller.recipe = null;
    } else if (controller.day == "wednesday") {
      controller.calendar.wednesday = calendar.recipe
      controller.recipe = null;
    } else if (controller.day == "thursday") {
      controller.calendar.thursday = calendar.recipe
      controller.recipe = null;
    } else if (controller.day == "friday") {
      controller.calendar.friday = calendar.recipe
      controller.recipe = null;
    } else {
      controller.calendar.saturday = calendar.recipe
      controller.recipe = null;
    }
  }

  this.removeItem = function (index) {
    controller.shoppingList.splice(index, 1)
  }

  $http.get('/kevinisdumb').then(function (response) {
    controller.appId = response.data.appId
    controller.appKey = response.data.appKey
  }, function (err) {
    console.log(err);
  })
}]);
