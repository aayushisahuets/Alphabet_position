(function(){
    "use-strict";
    jQuery(document).ready(function() {
        jQuery("#alpha-form input[name=alphabet]").keyup(function(){
            printCharsPosition( jQuery(this).val() );
        });
    }); 
    
    let alphabets = [ 'a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y','z' ];

    function printCharsPosition(input){
        let output_index = '';
     
            for(let i = 0; i < input.length; i++)//input.length is total entered character("y6ge" value is 4)
            {                  
                let char = input[i].toLowerCase();//input value stores in the character [6=y6ge[1]]      
                let indexValue = alphabets.indexOf(char);//index value stores here
                 
                if(indexValue >= 0){
                    output_index += input[i] + ' is positioned at:' + (indexValue+1)+ "<br>";
                }
                else{
                    output_index += input[i] + ' is not an alphabet.'+ "<br>"; //if value is <1 than it display msg
                }
            }
            jQuery("div.num").html(output_index);
    }
})();



