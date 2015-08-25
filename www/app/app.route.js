angular.module('shiftworx-alerts')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/shared/sidemenu/menu.html',
        controller: 'menuController'
      })
      .state('app.main', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'app/components/LandingPage/landingpage.html'
          }
        }
      });
    //
    // .state('app.search', {
    //   url: '/search',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/search.html'
    //     }
    //   }
    // })
    //
    // .state('app.browse', {
    //     url: '/browse',
    //     views: {
    //       'menuContent': {
    //         templateUrl: 'templates/browse.html'
    //       }
    //     }
    //   })
    //   .state('app.playlists', {
    //     url: '/playlists',
    //     views: {
    //       'menuContent': {
    //         templateUrl: 'templates/playlists.html',
    //         controller: 'PlaylistsCtrl'
    //       }
    //     }
    //   })
    //
    // .state('app.single', {
    //   url: '/playlists/:playlistId',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/playlist.html',
    //       controller: 'PlaylistCtrl'
    //     }
    //   }
    // });
    // // if none of the above states are matched, use this as the fallback
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
  });
