
//do caculation
function caculates(str) {

    // Array to save the number of str
    var number=["#"];
    // Array to save the operator of str
    var opt=[];
    // final result
    var result;
    // save to different Array according to different value of str
    for (var i = 0; i < str.length-1; i++) 
    {
        if(str[i]=='+'||str[i]=='-'||str[i]=='*'||str[i]=='/'||str[i]=='('||str[i]==')')
        {
                opt.push(str[i]);
                number.push("#");                       
        }
        else
        {
                number.push(str[i]);
        }
    }
    
    // Reverses the elements in opt Array.
    opt.reverse();

    var num=[];
    while(number.length>0)
    {
        var opsNum="";
        var num1="";
        while(number.length>0&&num1=="")
        {
            var val=number.pop();

            if(val!="#")
            {           
                opsNum+=val;
            }
            else
            {
                num1=reverseStr(opsNum);
            }
        }
        
        num.push(num1);  
    }

    while(num.length>1)
    {
        // get the location of operator '*' or '/',and save them to Array indexOfMD.
        var indexOfMD=[];
        for (var i = 0; i <opt.length-1; i++) 
        {
            if(opt[i]=="*"||opt[i]=="/")
            {
                indexOfMD.push(i);                
            }
        }
        // // Reverses the elements in an Array.
        // indexOfMD.reverse();

        while (indexOfMD.length>0) 
        {
            // get the index of operator,number1,number2.
            var indexOfOpt=indexOfMD.pop();

            var indexOfNum1=indexOfOpt+1;        
            var indexOfNum2=indexOfOpt;

            if(num[indexOfNum1]=="#")
            {
                // indexOfNum1=indexOfOpt-1;
                for (var i = indexOfNum1; i <num.length; i++) 
                {
                    if(num[i]=="#")    
                        continue;
                    else
                    {   
                        indexOfNum1=i;
                        break;
                    }
                }
                
            }

            // get the value of index of operator,number1,number2
            var valueOfIndexOfopt=opt[indexOfOpt];
            var valueOfIndexOfNum1=num[indexOfNum1];
            var valueOfIndexOfNum2=num[indexOfNum2];

            // caculate using the two number that we got before
            if(valueOfIndexOfopt=="*")
            {
                var tempResult=Number(valueOfIndexOfNum1)*Number(valueOfIndexOfNum2);
                //set the value of indexOfNum1 as tempResult,and the next index as "#"
                num[indexOfNum1]=tempResult;
                num[indexOfNum2]="#";
                //set the value of indexOfOpt as "#"
                opt[indexOfOpt]="#"

            }
            else if(valueOfIndexOfopt=="/")
            {
                var tempResult=Number(valueOfIndexOfNum1)/Number(valueOfIndexOfNum2);
                //set the value of indexOfNum1 as tempResult,and the value of indexOfNum2 as "#"            
                num[indexOfNum1]=tempResult;
                num[indexOfNum2]="#";
                //set the value of indexOfOpt as "#"
                opt[indexOfOpt]="#"
            }
                
        }

        // get the first number to caculate
        var num1=num.pop();

        //get the second number to caculate
        var num2=num.pop();
        while(num.length>0&&num2=="#")
        {
            num2=num.pop();
        }

        if(num.length==0&&num2=="#")
            num2=0;
        //get the first operator to caculate
        do
        {
            opt1=opt.pop();        
        }
        while(opt1=="#"&&opt.length>0)

        if(opt.length==0)
            opt1="+";
        //caculate
        switch (opt1) 
        {
            case "+":
                var result1=Number(num1)+Number(num2);
                num.push(String(result1));
                break;

            case "-":
                var result1=Number(num1)-Number(num2);
                num.push(String(result1));
                break;

            case "*":
                var result1=Number(num1)*Number(num2);
                num.push(String(result1));
                break;
                
            case "/":
                var result1=Number(num1)/Number(num2);
                num.push(String(result1));
                break;

            default:
                break;
        }


    }
    result=num[0];

    return result;
}

//get the correct number to caculate 
function reverseStr(value) {
    var temStr="";
    for (var i = value.length-1; i >=0; i--) {  
        temStr+=value[i];
    }
    return temStr;
}