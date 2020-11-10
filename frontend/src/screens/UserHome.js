import React from 'react'


const UserHome = () => {
    return (
        
              
               <div class="card-deck" >
               
               <div class="card bg-light border-primary mb-3 text-center" >
               
               <div class="card-body">
                <h4>Deposit to ATM</h4>
               <img class="card-img-top" src="../assets/deposit3.jpg" alt="Deposit"></img> 
               
               <a href="/deposit" class="btn btn-primary">Deposit</a>
               </div>
                </div>
                
               <div class="card bg-light border-primary mb-3">
               <img class="card-img-top" src="../assets/Balance-Enquiry-w.png" alt="Balance"></img> 
               <div class="card-body">
               <a href="/balance" class="btn btn-primary">View Balance</a>
               </div>
               </div>

               <div class="card bg-light mb-3  border-primary text-center" >
               <div class="card-body">
               
               <img class="card-img-top" src="../assets/change PIN.png" alt="Change PIN"></img> 
               <a href="/change" class="btn btn-primary ">Change PIN</a>
               </div>
               </div>

               <div class="card bg-light mb-3  border-primary text-center" >
               <div class="card-body">
               <h4>Withdraw from ATM</h4>
               <img class="card-img-top" src="../assets/withdraw3.jpg" alt="Withdraw"></img> 
               <a href="/withdraw" class="btn btn-primary ">Withdraw</a>
               </div>
               </div>

          

               </div>
           
         
               
        
           
           
    )
}

export default UserHome
