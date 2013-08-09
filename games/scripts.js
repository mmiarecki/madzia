var Count = function() {
    var one = 1;
    var two = 2;
    var sign = "+";
    
    this.getOne = function() {
        return one;
    };
    
    var setOne = function(newOne) {
        one = newOne;
    };
    
    this.getTwo = function() {
        return two;
    };
    
    var setTwo = function(newTwo) {
        two = newTwo;
    };
    
    this.getSign = function() {
        return sign;
    };
    
    var setSign = function(newSign) {
        sign = newSign;
    };
    
    this.getResult = function() {
        return jQuery('input.result').val();
    };
    
    this.setCountEvent = function() {
        jQuery('button.count').on('click', function(event){
            event.preventDefault();
            count.createFeedback(count.checkEquation());
        });
    };
    
    this.checkEquation = function() {
        return (eval(this.getOne() + this.getSign() + this.getTwo()) == this.getResult());
    };
    
    this.createFeedback = function(result) {
        if (result) {
            return positiveFeedback();
        }
        return helpFeedback();
    }
    
    var positiveFeedback = function() {
        alert('Bardzo dobrze!!');
    };
    
    var helpFeedback = function() {
        alert('Tu będzie podpowiedź');
    }
    
    this.createNewEquation = function() {
        
    };
}

var count = new Count();
count.setCountEvent();
