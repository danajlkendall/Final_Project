var app = angular.module('mainApp');

app.controller('mainPage',function($scope, $http){

  $scope.homData = {};
  $scope.allHomicides = [];
  $scope.chartData = {};
  $scope.homChart={};

  $http({
      method: 'GET',
      url: 'https://data.detroitmi.gov/resource/jut2-warj.json',
      headers: {'X-App-Token': 'c9TllBUfGZDL2uOu9rgu1j0vw'}
    }).then(function successCallBack(response) {
      $scope.homData = response.data;

      for (var i=0; i<$scope.homData.length; i++){
        var homicide = {
          precinct: $scope.homData[i].precinct,
          date: $scope.homData[i].incidentdate,
          lat: $scope.homData[i].location.latitude,
          long: $scope.homData[i].location.longitude
        };
        $scope.allHomicides.push(homicide);
      };
    });

    $scope.precincts = [
        {name : "2nd Precinct", value : 2},
        {name : "3rd Precinct", value : 3},
        {name : "4th Precinct", value : 4},
        {name : "5th Precinct", value : 5},
        {name : "6th Precinct", value : 6},
        {name : "7th Precinct", value : 7},
        {name : "8th Precinct", value : 8},
        {name : "9th Precinct", value : 9},
        {name : "10th Precinct", value : 10},
        {name : "11th Precinct", value : 11},
        {name : "12th Precinct", value : 12},
    ];

    $scope.getData = function(selected){
      $scope.selectedPrecinct = selected;

      $.getJSON("views/main-page/controller/chart.json", function(json) {
        $scope.chartData = json.precinct;

        for (var i=0; i<$scope.chartData.length; i++){
          $scope.homChart = {
            number: $scope.chartData[i].number,
            homJan: $scope.chartData[i].homicides.JAN,
            homFeb: $scope.chartData[i].homicides.FEB,
            homMar: $scope.chartData[i].homicides.MAR,
            homApr: $scope.chartData[i].homicides.APR,
            homMay: $scope.chartData[i].homicides.MAY,
            homJun: $scope.chartData[i].homicides.JUN,
            homJul: $scope.chartData[i].homicides.JUL,
            homAug: $scope.chartData[i].homicides.AUG,
            homSep: $scope.chartData[i].homicides.SEP,
            homOct: $scope.chartData[i].homicides.OCT,
            homNov: $scope.chartData[i].homicides.NOV,
            homDec: $scope.chartData[i].homicides.DEC,
          };
          if ($scope.homChart.number == $scope.selectedPrecinct){
            google.charts.load("current", {packages:['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ["Element", "Density", { role: "style" } ],
                ["Jan", $scope.homChart.homJan, "#5499c7"],
                ["Feb", $scope.homChart.homFeb, "#1b2631"],
                ["Mar", $scope.homChart.homMar, "#1f618d"],
                ["Apr", $scope.homChart.homApr, "#d4e6f1"],
                ["May", $scope.homChart.homMay, "#bdc3c7"],
                ["Jun", $scope.homChart.homJun, "#85929e"],
                ["Jul", $scope.homChart.homJul, "#5499c7"],
                ["Aug", $scope.homChart.homAug, "#1b263"],
                ["Sep", $scope.homChart.homSep, "#1f618d"],
                ["Oct", $scope.homChart.homOct, "#d4e6f1"],
                ["Nov", $scope.homChart.homNov, "#bdc3c7"],
                ["Dec", $scope.homChart.homDec, "#85929e"]
              ]);

              var view = new google.visualization.DataView(data);
              view.setColumns([0, 1,
                               { calc: "stringify",
                                 sourceColumn: 1,
                                 type: "string",
                                 role: "annotation" },
                               2]);

              var options = {
                title: "Precinct " + $scope.homChart.number + " Homicides Per Month",
                width: 600,
                height: 400,
                bar: {groupWidth: "95%"},
                legend: { position: "none" },
              };
              var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
              chart.draw(view, options);
          };
          };
        };
      });
    };
});
