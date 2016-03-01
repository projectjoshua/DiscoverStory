app.controller('MainController', ['$scope', function ($scope, WebSocketsService) {
    
    $scope.mlb = {
        tileName : 'mlb champs',
        winner: 'New York Yankees',
        defeated: 'defeated Brooklyn Dodgers'
    };
    $scope.song = {
        tileName : 'popular song',
        songTitle : 'Near You',
        songArtist : 'Francis Craig and his Orchestra'
    };
    $scope.bestfilm = {
        tileName : 'best film',
        filmTitle : 'Gentlemans Agreement'
    };
    $scope.collegebaseball = {
        tileName : 'college baseball champs',
        cbwinner: 'California Golden Bears',
        cbloser: 'defeated Yale Bulldogs'
    };
    $scope.sciandtech = {
        tileName : 'science & technology',
        scienceNews : 'Elmers Glue-All Invented by Borden Company'
    };
    $scope.tourdefrance = {
        tileName : 'tour de france',
        bycyclist : 'Greg LeMond'
    };
    $scope.usnews = {
        tileName : 'news headlines',
        topusnews : 'Chuck Yeager Breaks Sound Barrier in X-1 Rocket'
    };
    $scope.superbowl = {
        tileName : 'nfl champions',
        bowlchamps : 'Chicago Cardinals',
        bowllosers : 'defeated Philadelphia Eagles 28-21'
    };
    $scope.nbachamps = {
        tileName : 'nba champs',
        nbachamps : 'Philadelphia Warriors',
        nbalosers : 'defeated Chicago Stags'
    };
    $scope.meaning = {
        "color" : "white",
        "background-color" : "#86b840",
        "font-size" : "20px",
        "padding" : "15px 50px 0px 20px",
        "height" : "300px"
    };
    
    
}]);