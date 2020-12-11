
/* currency conversion code */
function check(){
    
    var a,b,c,result;
    b=Number(document.getElementById("selec").value);
    c=Number(document.getElementById("selec2").value);
    a=Number(document.getElementById("amount").value);
    if(b==c)
    {
      alert("You have entered Two Same country: Please try again!!!");
    }
    else
    {
    switch (b)
    {
    
    /* *****************start case 1***************** */
        case 1:
            {
                if(b==1 && c==2)
                {
                result=104.01*a;
                }
               /* else if(b==1 && c==2)
                {
                result=64.94*a;
                }*/
                else if(b==1 && c==3)
                {
                result=73.9623*a;
                }
                else if(b==1 && c==4)
                {
                result=1.34*a;
                }
                else if(b==1 && c==5)
                {
                result=5.405*a;
                }
                else if(b==1 && c==6)
                {
                    result=1.28*a;
                }
                else if(b==1 && c==7)
                {
                    result=0.82*a;
                }
                else if(b==1 && c==8)
                {
                    result=1597.19*a;
                }
                else if(b==1 && c==9)
                {
                    result=0.83*a;
                }
                else if(b==1 && c==10)
                {
                    result=137.19*a;
                }
                else if(b==1 && c==11)
                {
                    result=0.75*a;
                }
                else if(b==1 && c==12)
                {
                    result=0.65*a;
                }
            break;
            }
        /* *****************end case 1***************** */
        
        
        
        /* *****************start case 2***************** */
        case 2:
        {
            if(b==2 && c==1)
            {
            result=0.01*a;
            }
            else if(b==2 && c==3)
            {
            result=0.71*a;
            }
            else if(b==2 && c==4)
            {
            result=0.013*a;
            }
            else if(b==2 && c==5)
            {
            result=0.05*a;
            }
            else if(b==2 && c==6)
            {
                result=0.012*a;
            }
            else if(b==2 && c==7)
            {
                result=0.02*a;
            }
            else if(b==2 && c==8)
            {
                result=15.34*a;
            }
            else if(b==2 && c==9)
            {
                result=0.02*a;
            }
            else if(b==2 && c==10)
            {
                result=1.32*a;
            }
            else if(b==2 && c==11)
            {
                result=0.0072*a;
            }
            else if(b==2 && c==12)
            {
                result=0.01*a;
            }
        break;
        }
        /* *****************end case 2***************** */
        
        
        
        /* *****************start case 3***************** */
        case 3:
        {
            if(b==3 && c==1)
            {
            result=0.014*a;
            }
            else if(b==3 && c==2)
            {
            result=1.41099*a;
            }
            else if(b==3 && c==4)
            {
            result=0.01811*a;
            }
            else if(b==3 && c==5)
            {
            result=0.07*a;
            }
            else if(b==3 && c==6)
            {
                result=0.02*a;
            }
            else if(b==3 && c==7)
            {
                result=0.02*a;
            }
            else if(b==3 && c==8)
            {
                result=21.64*a;
            }
            else if(b==3 && c==9)
            {
                result=0.02*a;
            }
            else if(b==3 && c==10)
            {
                result=1.86*a;
            }
            else if(b==3 && c==11)
            {
                result=0.0101141*a;
            }
            else if(b==3 && c==12)
            {
                result=0.01*a;
            }
        break;
        }
        /* *****************end case 3***************** */
        
        
        
        /* *****************start case 4***************** */
        case 4:
        {
            if(b==4 && c==1)
            {
            result=0.75*a;
            }
            else if(b==4 && c==2)
            {
            result=77.89*a;
            }
            else if(b==4 && c==3)
            {
            result=55.29*a;
            } 
            else if(b==4 && c==5)
            {
            result=4.05*a;
            }
            else if(b==4 && c==6)
            {
                result=0.96*a;
            }
            else if(b==4 && c==7)
            {
                result=1.21*a;
            }
            else if(b==4 && c==8)
            {
                result=1196.62*a;
            }
            else if(b==4 && c==9)
            {
                result=1.34*a;
            }
            else if(b==4 && c==10)
            {
                result=102.83*a;
            }
            else if(b==4 && c==11)
            {
                result=0.56*a;
            }
        break;
        }
        /* *****************end case 4***************** */
        
    }   
        }
        document.getElementById("c_answer").innerHTML=result;

}
 
function popUp(url) {
    popUpWindow = window.open("currencyconverter.html",'popUpWindow','height=300,width=600,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}


