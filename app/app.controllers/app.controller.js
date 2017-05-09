'use strict';

angular.module('myapp')
    .controller('KeyController',['$scope','CalculateService',function($scope,CalculateService){
        
        $scope.keys = [1,2,3,"+",4,5,6,"-",7,8,9,"*","C",0,'=','/'];
        $scope.output = '';
        
        $scope.press = function(key){
            $scope.output = calculate(key);
        }
        
        function calculate(key){
         if(typeof key == 'number'){
             if(typeof $scope.output != "number"){
                return key;
             }else{
                 return $scope.output*10+key;
             }
         }else{
             if(typeof key != '' && key != 'C' && key != '='){
                CalculateService.value1 = $scope.output;
                CalculateService.operator = key;
                return key;
                
             }
             
             if( key == '='){
                 
                 return CalculateService.doCalculate($scope.output);
             }
             
             if(key == 'C'){
                 return '';
             }
             
         }
        }
        
        
    }])
