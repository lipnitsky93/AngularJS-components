var app = angular.module('app', []);

app.controller('myCtrl', function($scope) {
    
});

//-------------------------bindToController--------------------------------------

//Example 1

app.controller('MyController', function($scope){
    
    $scope.change = function(){
        $scope.fullname = 'Brian Kim';
    }
});

app.directive('myDirective', function () {
  return {
    restrict: 'E',
    // scope: {
    //     name: '='
    // },

    scope: {},
     
    controller: function () {
        this.name = 'BK';
    },
    controllerAs: 'ctrl',
    
    //bindToController: true,

    bindToController: {
        name: '='
    },
    template: '{{ctrl.name}}',
  };
});

//Example 2

app.controller('newCtrl', function($scope) {
    this.nameCt = 'Dhan';

    // $scope.$watch('nameCt', function(newValue) {
    //     this.nameCt = newValue;
    // }).bind(this);
});

app.directive('newDirective', function() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        controller: 'newCtrl',
        controllerAs: 'newC',
        bindToController: true,
        template: '<div>Name in directive: {{newC.name}}</div> <input type="text" ng-model="newC.name">'
    }
});


app.component('newComponent', {
    bindings: {
        name: '='
    },

    controller: 'newCtrl',
    controllerAs: 'newComp',
    
    template: '<div>Name in component: {{newComp.name}}</div> <input type="text" ng-model="newComp.name">'
})


