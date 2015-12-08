var app = angular.module('whatsCookingApp', []);

app.controller('calendarController', function () {
  var controller = this;
  this.day =
  this.week = {
    sunday: {recipe: "chicken", link: ""},
    monday: {recipe: "fish", link: ""},
    tuesday: {recipe: "steak", link: ""},
    wednesday: {recipe: "shrimp", link: ""},
    thursday: {recipe: "pork", link: ""},
    friday: {recipe: "lamb", link: ""},
    saturday: {recipe: "pasta", link: ""}
  };

  // this.submit = function () {
  //   controller.
  // }

});
