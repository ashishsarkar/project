app.controller('kridashboardCtrl', ['$scope', '$http','$location', function($scope, $http,$location) {
  var getChart = function() {
    var container = document.getElementById('visualization');
  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    {id: 1, content: 'Activation', start: '2017-11-20', type: 'point'},
    {id: 2, content: 'FSS', start: '2017-11-14', type: 'point'},
    {id: 3, content: 'FSE', start: '2017-11-18', type: 'point'},
    {id: 4, content: 'Site Contact', start: '2017-11-16', end: '2017-11-19', type: 'point'},
    {id: 5, content: 'Remote Vist ', start: '2017-11-25', type: 'point'},
    {id: 6, content: 'Next Planned Onsite Vist', start: '2017-11-27', type: 'point'}
    ]);

  // Configuration for the Timeline chart
  var options = {};

  // Create a Timeline chart
  var timeline = new vis.Timeline(container, items, options);
}

var barchart=function(){
  TESTER = document.getElementById('tester');
  Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
      margin: { t: 0 } } );
 
}


var dashboardtable=function(){
//  $.getJSON("json/dashboardjson.json", function(result) {
// console.log(result)
//   $scope.dashboarddata = result;
//  });
$.ajax({
  url: 'json/dashboardjson.json',
  type: 'GET',
             
              success: function(data) {
                $scope.dashboarddata = data.data;
                  $scope.$apply();
              
                },
                error: function() {
                  alert("An Error Occured");
                }
              });
}
getChart();
   // barchart();
   dashboardtable();
 }]);
