angular.module('QurbaniApp', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html'
            })
            .state('istakahra', {
                url: '/istakahra',
                controller:'istakahraController',
                templateUrl:'views/istakahra/istakahra.html'
            })
            .state('dua', {
                url: '/dua',
                controller:'duaController',
                templateUrl:'views/dua/dua.html'
            })
            .state('MassTrainnig', {
                url: '/MassTrainnig',
                controller: 'MassTrainnigController',
                templateUrl:'views/MassTrainnig/MassTrainnig.html'
            })
            .state('Health', {
                url: '/Health',
                controller: 'HealthController',
                templateUrl:'views/Health/Health.html'
            })
            .state('QuranService', {
                url: '/QuranService',
                controller: 'QuranServiceController',
                templateUrl:'views/QuranService/QuranService.html'
            })
            .state('Help', {
                url: '/Help',
                controller: 'HelpController',
                templateUrl:'views/Help/Help.html'
            })
            .state('QurbaniService', {
                url: '/QurbaniService',
                controller: 'QurbaniServiceController',
                templateUrl:'views/QurbaniService/QurbaniService.html'
            })
            .state('ContactDepartment', {
                url: '/ContactDepartment',
                controller: 'ContactDepartmentController',
                templateUrl:'views/ContactDepartment/ContactDepartment.html'
            })
            .state('tour', {
                url: '/tour',
                templateUrl:'views/tour/tour.html'
            });

        $urlRouterProvider.otherwise('/tour');

    })

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })