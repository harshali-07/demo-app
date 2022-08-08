import { useNavigate} from 'react-router-dom';
import './second.css'


const Second = () => {
  let navigate = useNavigate();
        const btnhandler = () => {

          navigate('/home/first/second/billing')
        }    
            return (
            <div>
                <div className="outerdiv">
                    <div className='top'>
                        <div className='topname'>   
                              <svg><svg viewBox="0 0 32 32"><g fillOpacity="evenodd"><path fillOpacity="evenodd" fill="#fff" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"></path><g fillOpacity="nonzero"><path fillOpacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"></path><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"></path><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"></path></g></g></svg></svg>
     <h2>ETHEREUM - Mainnet</h2>
         </div>
      </div>
     <div class="contain">
     <h3>Enter Token Details</h3>

    <div class="form">
      <form>
      <div class="form-group"><label class="form-label">Network<span class="val-required">*</span>
      </label><select class="form-select" name="tokenType"><option value="1">Mainnet</option>
      <option value="2">Testnet</option></select>
      <span class="form-text text-muted">Select the base configuration of your token (Free and Basic have limited configurations)</span></div>
        <br/>
        
        <p>
          <label > Token name <span class="val-required">*</span></label> 
          <input type="text" placeholder='enter token name'/> 
        </p>
        <p>
          <label>Symbol <span class="val-required">*</span></label> 
          <input type="text" placeholder='your token symbol' />
        </p>
      
        <p>
          <label>Initial sypply <span class="val-required">*</span></label>
          <input type="number"/>
        </p>
        <p>
          <label>Token Decimals <span class="val-required">*</span></label>
          <input type="number" placeholder='enter number of decimals'/>
        </p>
        
       <div className='gt'>
          <button class="btn my-3 p-2 text-uppercase btn-dark btn-lg btn-block" onClick={btnhandler}> Generate Token</button>
          </div>
      </form>
      </div>
      </div>    
</div>
        </div>
        );
  }
    
    export default Second;
    
    
    
    


