angular.module("myApp",[])
.controller("firstCont", function($scope){
    // $scope.hello = 'привет'; // тестовый пример использовнаия переменной
    
    // Создать врем. переменную
    $scope.testInput = 'укажите свое значение';
    
    // Создать хранилище значений
    $scope.tasksArray = ['это первое Задание','это второе Задание'];
    // Создать функцию переноса с врем. хранилища в общее
    $scope.addNew = function(){
        // if ($scope.testInput !=''){
        if ($scope.testInput){
         $scope.tasksArray.push($scope.testInput);
         $scope.testInput = '';
        } else{
            alert('Текст не заполнен!');
        }
    };

    $scope.deleteItem = function(item){
        var index = $scope.tasksArray.indexOf(item);
        // console.log(index);
        $scope.tasksArray.splice(index,1);
    };
});