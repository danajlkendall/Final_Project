var app = angular.module('mainApp');

app.factory('dataFactory',function($http){

  var homData = {};

  return {
    getData: getData,
    sendData: sendData
  };

  function getData(){
    $http({
      method: 'GET',
      url: 'https://data.detroitmi.gov/resource/jut2-warj.json',
      headers: {'X-App-Token': 'c9TllBUfGZDL2uOu9rgu1j0vw'}
    }).then(function successCallBack(response) {
      homData = response;
      console.log(homData);
    })
  };

  function sendData(){
    getData();
    return homData;
  };

});
