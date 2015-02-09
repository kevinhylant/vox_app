var myAppModule = angular.module('myApp', []);

myAppModule.controller('NamesController',
  function($scope){
    
    var names = [
      { first: "Kevin", last:"Hylant"},
      { first: "Greg", last:"Hylant"},
      { first: "Steve", last:"Hylant"}
    ];
    names.someText = "You have started your journey.";
    names.remove = function(index){
      names.splice(index,1);
    };
    names.addJoe = function(){
      names.splice(0,0,{first:'Joe',last:'Smo'});
    };
    names.add = function(){
      var a = $('#test').val();
      names.splice(0,0,{first:a});
    };

    $scope.names = names;
  }
);

myAppModule.controller('StartUpController',
  function($scope) {
    var funding = {};
    $scope.funding = funding;
    funding.startingEstimate = 0;
    funding.computeNeeded = function(){
      funding.needed = funding.startingEstimate * 10;
    };
    $scope.$watch('funding.startingEstimate', funding.computeNeeded);

    funding.requestFunding = function(){
      window.alert("Sorry, please get more customers first.");
    };

    funding.reset = function(){
      funding.startingEstimate = 0;
    };
  }
);

myAppModule.controller('DeathrayMenuController',
  function($scope) {
    $scope.menuState = {};
    $scope.menuState.show = true;
    $scope.toggleMenu = function() {
      $scope.menuState.show = !$scope.menuState.show;
    };
    $scope.stun = function(){
      window.alert("Don't taz me dude.");
    };
    $scope.disintegrate = function(){
      window.alert("Don't dis me dude.");
    };
    $scope.erase = function(){
      window.alert("Don't erase me du");
    };
    $scope.isDisabled = false;
    $scope.currentAvailabilityOption = "Available";
    $scope.toggleAvailability = function(){
      $scope.isDisabled = !$scope.isDisabled;
      if($scope.isDisabled === false){
        $scope.currentAvailabilityOption = "Available";
      }
      else {
        $scope.currentAvailabilityOption = "Unavailable";
      }
    };
  }
);

myAppModule.controller("RestaurantTableController",
  function($scope){
    var restaurants = {};
    restaurants.directory = [
      {name:"The Handsome Heifer", cuisine:"BBQ"},
      {name:"Green's Green Greens", cuisine:"Salads"},
      {name:"House of Fine Fish", cuisine:"Seafood"}
    ];
    restaurants.selectRestaurant = function(index) {
      restaurants.selectedRow = index;
    };
    $scope.restaurants = restaurants;
  }  
);

myAppModule.controller("ImagesController",
  function($scope){
    
  }
);






