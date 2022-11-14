$(document).ready(function(){
    $("#submit-form").submit((e)=>{
    
      
    
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyJdhaTLxRPt9X0uu5GCKTie73qrD-OMci1iyxHpXsEq9-GWcdBlqCuxUljXOLyrX-g/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
    })
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
    
            }
        }
    })
    
      
    
    })