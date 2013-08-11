var Count = function() {
    var one = 1;
    var two = 2;
    var sign = "+";
    var maxRange = 10;
    
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
    
    var getMaxRange = function() {
    	return maxRange;
    }
    
    this.setCountEvent = function() {
        jQuery('button.count').on('click', function(event){
            event.preventDefault();
            count.createFeedback(count.checkEquation());
        });
    };
    
    this.checkEquation = function() {
        return (eval(this.getOne() + this.getSign() + this.getTwo()) == this.getResult()); // res = '07'
    };
    
    this.createFeedback = function(result) {
        if (result) {
            return positiveFeedback();
        }
        return helpFeedback();
    }
    
    var positiveFeedback = function() {
        alert('Bardzo dobrze!!');
        createNewEquation();
    };
    
    var helpFeedback = function() {
        alert('Niestety źle!');
    }
    
    var createNewEquation = function() {
    	var max = getMaxRange();
        var a = Math.floor(Math.random() * max) + 1;
        var b = Math.floor(Math.random() * (max-a)) + 1;
        setOne(a);
        setTwo(b);
        showNewEquation();
    };
    
    var showNewEquation = function() {
    	jQuery('span.firstNr').text(count.getOne());
    	jQuery('span.secondNr').text(count.getTwo());
    	jQuery('input.result').val('');
    }
}

var count = new Count();
count.setCountEvent();
