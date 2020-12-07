const display=document.querySelector(".display");
document.querySelector(".button1").addEventListener("click",function(){
    display.value +="1";
    })

  document.querySelector(".button2").addEventListener("click",function(){
    display.value +="2";
   })

   document.querySelector(".button3").addEventListener("click",function(){
    display.value +="3";
    })   

    document.querySelector(".buttonAdd").addEventListener("click",function(){
        display.value +="+";
        })     
    
        document.querySelector(".button4").addEventListener("click",function(){
            display.value +="4";
            })
        
         document.querySelector(".button5").addEventListener("click",function(){
            display.value +="5";
           })
        
           document.querySelector(".button6").addEventListener("click",function(){
            display.value +="6";
            })   
        
            document.querySelector(".buttonMinus").addEventListener("click",function(){
                display.value +="-";
                }) 
                document.querySelector(".button7").addEventListener("click",function(){
                    display.value +="7";
                    })
                
                 document.querySelector(".button8").addEventListener("click",function(){
                    display.value +="8";
                   })
                
                   document.querySelector(".button9").addEventListener("click",function(){
                    display.value +="9";
                   })
                
                    document.querySelector(".buttonTimes").addEventListener("click",function(){
                        display.value +="*";
                        })

                       
                   /*  document.querySelector(".buttonSin").addEventListener("click",function(){
                        display.value =Math.sin(display.value) ;
                            })
                            document.querySelector(".buttonCos").addEventListener("click",function(){
                                display.value +="cos";
                                })
                                document.querySelector(".buttonTan").addEventListener("click",function(){
                                    display.value +="tan";
                                    }) */
                                  
                         

                        document.querySelector(".button0").addEventListener("click",function(){
                            display.value +="0";
                            })
                        
                         document.querySelector(".buttonOpen").addEventListener("click",function(){
                            display.value +="(";
                           })
                        
                           document.querySelector(".buttonClose").addEventListener("click",function(){
                            display.value +=")";
                            })   
                        
                            document.querySelector(".buttonHash").addEventListener("click",function(){
                                display.value +="/";
                                })     
                                                                   
                                document.querySelector(".buttonDot").addEventListener("click",function(){
                                    display.value +=".";
                                    })
                                
                                 document.querySelector(".buttonD").addEventListener("click",function(){
                                   let prevalue=display.value;
                                   display.value=prevalue.substr(0,prevalue.length-1);
                                   
                                   
                                    
                                   })
                                
                                   document.querySelector(".buttonC").addEventListener("click",function(){
                                    display.value ="";
                                    })   
                                
                                    document.querySelector(".buttonEqual").addEventListener("click",function(){
                                     const answer=display.value
                                      
                                       
                                       
                                        display.value =eval(answer);
                                        
                                        })    
                                                                          
                              