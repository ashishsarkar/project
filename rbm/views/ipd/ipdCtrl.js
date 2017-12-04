app.controller('ipdCtrl', ['$scope', '$http','$location', function($scope, $http,$location) {
//page onload  
var onload=function(){
	$.ajax({
		url: 'json/ipdjson.json',
		type: 'GET',
		crossDomain : true,
		success: function(responsejson) {
			$scope.responsejson=responsejson;
			barchart(responsejson)
			columnchart(responsejson);
			$scope.$apply();
		},
		error: function() {
			alert("An Error Occured");
		}
	});

}
//display idp bar chart
var barchart=function(responsejson){
	var data = [
	{
		x: responsejson.ipd_chartdata.x_axis,
		y: responsejson.ipd_chartdata.y_axis,
		type: 'line',
		mode: 'lines+text',
		text: responsejson.ipd_chartdata.y_axis,
		textposition: 'top',
		textfont: {

			size: 16,
			color: '#a1a9af'
		},
		marker: {
			color: '#2aa3eb',
			size:14
		},
		line: {
			color: '#2aa3eb',
			width: 3
		}
	}];
	var layout = {
  title:'3 Month IPD Rolling Trend'
};
	Plotly.newPlot('idprolling_id', data,layout);
}
	//display idp category chart
	var columnchart=function(responsejson){
		var data = [{
			type: 'bar',
			x: responsejson.ipdcategorydata.x_axis ,
			y: responsejson.ipdcategorydata.y_axis ,
			orientation: 'h',
			text: responsejson.ipdcategorydata.x_axis,
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
			var layout = {
  title:'IPDs by Category (3-month rolling)'
};

		Plotly.newPlot('cloumndiv', data,layout);
	}

	onload();
}]);
