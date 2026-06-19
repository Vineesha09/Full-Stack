var app = angular.module('studentApp', []); 
app.controller('studentController', function($scope, $http) { 
// Fetch students 
function loadStudents() { 
$http.get('/students') 
.then(function(response) { 
$scope.students = response.data; 
}); 
} 
loadStudents(); 
// Add student 
$scope.addStudent = function() { 
$http.post('/students', $scope.student) 
.then(function() { 
$scope.student = {}; 
loadStudents(); 
}); 
}; 
// Delete student 
$scope.deleteStudent = function(id) { 
$http.delete('/students/' + id) 
.then(function() { 
loadStudents(); 
}); 
}; 
});