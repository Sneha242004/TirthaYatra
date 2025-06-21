function submitForm(event){
    let form=document.querySelector("#tirthaform");
    let valid=true;
    let randomNumber=Math.floor(Math.random()*1000);
    form.addEventListener("submit",(event)=>{
        event.preventDefault();

        let dham=form.dhamName.value;
        let transport=form.transport.value;
        let name=form.unname.value;
        let adhar=form.adhar.value;
        let dob=form.dob.value;
        let cNumber=form.cNumber.value;
        let eNumber=form.eNumber.value;
        let address=form.address.value;

        let msg="";
        
        debugger

        if(dham==-1){
            Swal.fire({
                title: "Please Select Dham",
                text: "Please choose atleast one dham",
                icon: "error"
              });
              valid=false;
              return;
        }
        else if(transport==-1){
            Swal.fire({
                title: "Please Select transport",
                text: "Please choose atleast one transport",
                icon: "error"
              });
              valid=false;
              return;;
        }
        else if(name==''){
            Swal.fire({
                title: "Please enter name",
                text: "Please enter name",
                icon: "error"
              });
              valid=false;
              return;
        }
        else if(adhar==''){
            Swal.fire({
                title: "Please enter adhar number",
                text: "Please enter adhar number",
                icon: "error"
              });
             valid=false;
             return ;
        }
        else if(dob==''){
            Swal.fire({
                title: "Please chose Date of birth",
                text: "Date of birth cannot be empty",
                icon: "error"
              });
              valid=false;
              return;
        }
        else if(cNumber==''){
            Swal.fire({
                title: "Please enter contact Number",
                text: "Please enter contact Number",
                icon: "error"
              });
              valid=false;
              return;
        }
        else if(address==''){
            Swal.fire({
                title: "Please enter your address",
                text: "please enter your address",
                icon: "error"
              });
              valid=false;
              return;
        }
        else if(adhar !='' && adhar.length<16){
            let adharStr=parseInt(adhar);
           if(isNaN(adharStr)){
            Swal.fire({
                title: "please provide valid adhar",
                text: "Adhar cannot contain alphabets",
                icon: "error"
        
              });
              valid=false;
              return;
           }
        }

       if(valid){
            Swal.fire({
                title: "Registration Successful",
                text: "Reference Number",
                icon: "success"
        
              }).then(()=>{
                setTimeout(()=>{
                    window.location.reload();
                },6000);
              })
    }
        else{
            Swal.fire({
                title: "Registration Failed",
                text: "Fill the form correctly",
                icon: "error"
              });
              event.preventDefault();
        }
    })
    debugger
    // let randomNumber=Math.floor(Math.random()*9999);
    
}

function calcAge(){
    debugger
    let dob=document.querySelector("#dob").value;
    let currentyear=new Date().getFullYear();
    let age=Math.abs(currentyear-parseInt(dob.slice(0,4)));
    document.querySelector("#age").value=age;
}
