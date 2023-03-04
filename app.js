var app = angular.module('crudApp', []);

app.controller('crudController', function($scope) {
  $scope.people = [
    {name: 'John Doe', email: 'john.doe@example.com'},
    {name: 'Jane Smith', email: 'jane.smith@example.com'}
  ];
  $scope.formTitle = "Add Person";
  $scope.formButton = "Add";
  $scope.formData = {name: "", email: ""};
  
  $scope.submitForm = function() {
    if ($scope.formTitle === "Add Person") {
      $scope.people.push({name: $scope.formData.name, email: $scope.formData.email});
    } else {
      $scope.editPersonIndex.name = $scope.formData.name;
      $scope.editPersonIndex.email = $scope.formData.email;
    }
    $scope.formData = {name: "", email: ""};
    $scope.formTitle = "Add Person";
    $scope.formButton = "Add";
  };
  
  $scope.editPerson = function(person) {
    $scope.formData.name = person.name;
    $scope.formData.email = person.email;
    $scope.formTitle = "Edit Person";
    $scope.formButton = "Save";
    $scope.editPersonIndex = person;
  };
  
  $scope.deletePerson = function(person) {
    var index = $scope.people.indexOf(person);
    $scope.people.splice(index, 1);
  };
});
