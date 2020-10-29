import React from 'react'


const UserHome = () => {
    return (
        
              
               <div class="card-deck" >
               
               <div class="card bg-light border-primary mb-3 text-center" >
               
               <div class="card-body">
                <h4>Deposit to ATM</h4>
               <img class="card-img-top" src="../assets/deposit3.jpg" alt="Deposit"></img> 
               
               <a href="#" class="btn btn-primary">Deposit</a>
               </div>
                </div>
                
               <div class="card bg-light border-primary mb-3">
               <img class="card-img-top" src="../assets/Balance-Enquiry-w.png" alt="Balance"></img> 
               <div class="card-body">
               <a href="#" class="btn btn-primary">View Balance</a>
               </div>
               </div>
               <div class="card bg-light mb-3  border-primary text-center" >
               
               <div class="card-body">
               <h4>Withdraw from ATM</h4>
               <img class="card-img-top" src="../assets/withdraw3.jpg" alt="Withdraw"></img> 
               <a href="#" class="btn btn-primary ">Withdraw</a>
               </div>
               </div>
               </div>
           
         
               
        
           
           
    )
}

export default UserHome
