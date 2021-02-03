(function(){
    "use-strict";
    jQuery(document).ready(function() {
        jQuery("#alpha-form input[name=alphabet]").keyup(function(){
            checkValue();
        });
    }); 
            let alphabets = [ 'a', 'b', 'c', 'd', 'e','f',
                         'g', 'h', 'i', 'j','k', 'l', 
                         'm', 'n', 'o','p', 'q', 'r', 
                         's', 't','u', 'v', 'w', 'x', 'y','z' ];

            let chars = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 
                    'I', 'J','K', 'L', 'M', 'N', 'O','P', 
                    'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y','Z'];

    function checkValue(arr){
    // debugger;
        let output_index = '';
        let input = jQuery("#alpha-form input[name=alphabet]").val();//gets the input
     
            for(let i = 0; i < input.length; i++)//input.length is total entered character("y6ge" value is 4)
            {                  
                let char = input[i];//input value stores in the character [6=y6ge[1]]      
                let indexValue = alphabets.indexOf(input[i]);//index value stores here
                 
                if(indexValue >= 0){
                    output_index += char + ' is positioned at:' + (indexValue+1)+ "<br>";
                }
                else{
                    output_index += char + ' is not an alphabet.'+ "<br>"; //if value is <1 than it display msg
                }
            }
            jQuery("div.num").html(output_index);
    }
})();



