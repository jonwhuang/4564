app.controller("chartCtrl", function ($scope) {

  $scope.labels = [":10",":20",":30",":40",":50","1:00", "1:10","1:20","1:30"],

  $scope.series = ["Conversation"]

  $scope.data = [
    [-0.8294462782412093, -0.7575233110696172, -0.3573443110696172, -0.6441003110696172, -0.7570003489696172, 0.4324313110696172, -0.6234003110696172, 0.1570003110696172,1]
  ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.onHover = function(points) {
    if (points.length > 0) {
        // console.log('Point', points[0].value);
        // console.log(points[0].label);
      // } else {
        // console.log('No point');
        $('#result')[0].innerHTML = points[0].label;
        $scope.currentPoint = points[0].value.toString().slice(0,5)
        // debugger;
      };
  };

$scope.chartOptions = {
  bezierCurve: false
};

  var avergeArray = $scope.data[0]
  var total = 0;
  for(var i = 0; i < avergeArray.length; i++) {
    total += avergeArray[i];
  }
  var avg = total / avergeArray.length
  $scope.average = Math.round(avg*100)/100
  // $scope.average = avg.toString().slice(3,5) + '%';
  if (avg >= 0){
    $scope.sentiment = 'positive';
    $('#averageScore').css('background-color','green');
  } else{
    $scope.sentiment = 'negative';
    $('#averageScore').css('background-color','red');
  };


});