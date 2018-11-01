(function(){

    angular.module('myExampleModule', [])

        .component('mainComponent', {
            bindings: {
                name2: '@'
            },
            templateUrl: '../templates/myExample.template.html',
            controller: MyController,
            controllerAs: 'Ctrl'
        });


        function MyController() {
            this.currentCity = 'Minsk';
        }

})()