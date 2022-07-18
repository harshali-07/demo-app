import './second.css'

const Second = () => {
   
        return (
            <div>
                <div className="outerdiv">
                    <div className='headings'>
     <svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="#fff" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"></path><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"></path><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"></path><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"></path></g></g></svg></svg>
     <h2>ETHEREUM - Mainnet</h2>
     <h3>Create your ERC20 Token</h3>
     </div>

     <div className='content'>
 <h4>Create your Token</h4> 
     <div className='form'>
    
    <div className="input-container">
         <label>Token Name :</label>
         <input type="text" name="uname" required /><br/><br/>

         <label>Token Symbol :</label>
         <input type="text" name="uname" required /> <br/> <br/>

         <label>Total Supply :</label>
         <input type="number" min="0"name="uname" required /> <br/> <br/> </div> </div>
         
         <div className='btn'> <button>Generate Token</button> </div>
    </div>

        </div>

            </div>
        );
    
    }
    
    export default Second;
    
    
    
    


