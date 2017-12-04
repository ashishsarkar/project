app.controller('subjectsCtrl', ['$scope', '$http','$location', function($scope, $http,$location) {

	var barchart=function(){
     // $http({
     //        method: 'GET',
     //        url: 'http://54.209.25.66/data'
     //    }).then(function successCallback(responseValue) {
     //       	console.log(responseValue)
     //    }, function errorCallback(responseValue) {
     //        console.log("error");
     //    });

     $.ajax({
     	url: 'json/chartdata.json',
     	type: 'GET',
     	crossDomain : true,
     	success: function(data1) {
     		// data1=JSON.parse(data1);
     		console.log(data1)
     		//var y=[11, 13, 6,9,10,8,15,16,18,20]
     		var data = [
     		{
     			x: data1.x,
     			y: data1.y,
     			type: 'bar',
     			mode: 'text',
     			text: data1.y,
     			textposition: 'auto',
     			textfont: {

     				size: 16,
     				color: '#fff'
     			},
     			marker: {
     				color: '#2aa3eb',
     				size:14

     			},
     			line: {
     				color: '#2aa3eb',
     				width: 3
     			}
     		} 	
     		];

     		Plotly.newPlot('visualization', data);
     	},
     	error: function() {
     		alert("An Error Occured");
     	}
     });
 }
 var columnchart=function(){
 	var x=[8, 10, 12,8,4,11,3,2,1]
 	var data = [{
 		type: 'bar',
 		x: [8, 10, 12,8,4,11,3,2,1],
 		y: ['EN', 'MD', 'NA','NW','OS','OT','TA','TC','XM'],
 		orientation: 'h',
 		text: x,
 		textposition: 'auto',
 		hoverinfo: 'none',
 		textfont: {
 			color: '#fff'
 		},
 		marker: {
 			color: '#2aa3eb',
 			line: {
 				color: '#2aa3eb',
 				width: 1
 			}
 		}
 	}];

 	Plotly.newPlot('cloumndiv', data);
 }
 barchart();
	//columnchart();

}]);
