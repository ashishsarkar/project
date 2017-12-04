var app = angular.module('app', ['dndLists', 'ui.slimscroll', 'xeditable', 'ui.layout', 'angular-storage', 'ui.bootstrap', 'angularNotify', 'ui.router', 'ngMockE2E','angularUtils.directives.dirPagination']);
 

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      
        .state('login', {
            url: '/login',
            templateUrl: 'views/login/login.html',
            controller: 'loginCtrl'
        })
         .state('kridashboard', {
            url: '/kridashboard',
            templateUrl: 'views/kridashboard/kridashboard.html',
            controller: 'kridashboardCtrl'
        })
          .state('idp', {
            url: '/idps',
            templateUrl: 'views/ipd/ipd.html',
            controller: 'ipdCtrl'
        })
           .state('subjects', {
            url: '/subjectscreened',
            templateUrl: 'views/subjects/subjects.html',
            controller: 'subjectsCtrl'
        })

      

});


app.run(function($rootScope, $location) {
    $rootScope.location = $location;
});

// if (session_id == undefined || session_id == "") {
//     window.location = "index.html";
// }


Array.prototype.diff = function(a) {
    return this.filter(function(i) {
        return a.indexOf(i) < 0;
    });
};
// ,'720kb.tooltips'
app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});

app.run(function($httpBackend) {

 

    $httpBackend.whenPOST(/\/saveUser/).respond(function(method, url, data) {
        data = angular.fromJson(data);
        return [200, { status: 'ok' }];
    });

    $httpBackend.whenPOST(/\/submitFeedback/).respond(function(method, url, data) {
        data = angular.fromJson(data);
        return [200, { status: 'ok' }];
    });

    $httpBackend.whenGET(/views/).passThrough();

    // $httpBackend.whenPOST('http://106.51.65.165/5500/AuthorDocument').passThrough();
    $httpBackend.whenPOST(/\/5500/).passThrough();
    $httpBackend.whenPOST(/authorDoc/).passThrough();

    $httpBackend.whenGET(/\/5500/).passThrough();

});