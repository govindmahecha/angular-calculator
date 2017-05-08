angular.module('myapp')
    .service('CalculateService',[function(){
        var self = this;
        var value1 = '';
        var operator = '';
        
        this.doCalculate = function doCalculate(value){
            var result  = '';
            
            if(self.operator == '+')
                result =  self.value1+ value;
            else if(self.operator == '-')
                result =  self.value1-value;
            else if(self.operator == '*')
                result =  self.value1*value;
            else if(self.operator == '/')
                result = self.value1/value;
            
            value1 = result;
            return result;
        } 
    }])