import { useNavigate} from 'react-router-dom'
import './first.css'; 
const Task = () => {
    let navigate = useNavigate();
        const btnhandler = () => {

            if (window.ethereum) {

                    window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(res=>{
                    console.log('responce',res)
                    navigate('/home/first/second')
                })
            }else {

                alert("install metamask extension!!");
  
              window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en')
  
              }
                }
                    navigate('/home/first/second')    
        return (
            <div>

                <div className="main">
                    
                    
                     <header className='header' > <h2><b>Token Marketplace </b> </h2> </header>
                     <h1 class="display-3 mt-3">ETHEREUM Token Generator</h1> <br></br>
                    <h3 className='t1'><b> Connect Wallet </b></h3>

                    <div className="btn">
                         <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="wallet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-wallet m-4 b-icon bi"><g><path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path></g></svg>
                       <button onClick={btnhandler} >Metamask</button><br /> <br/>
                     </div> <br></br>

                     <div className='process'>
                          <h3>How it Works</h3>
                          <div class="card mb-3 bg-white"><div class="card-body"><h4 class="card-title font-weight-light text-center"><p class="h1 mb-2"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="wallet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-wallet m-4 b-icon bi"><g><path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path></g></svg></p> <p>Install MetaMask</p></h4> <p class="card-text text-center"> You need to have <a href="https://metamask.io/" target="_blank" class="text-reset">MetaMask</a>  installed with an amount of ETH to pay for contract deployment.
        </p></div></div>
                          <div class="card mb-3 bg-white"><div class="card-body"><h4 class="card-title font-weight-light text-center"><p class="h1 mb-2"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="card checklist" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-card-checklist m-4 b-icon bi"><g><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path><path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path></g></svg></p> <p>Enter Details</p></h4> <p class="card-text text-center"> Enter your preferred Token name and symbol.Choose your supply and Token type.
        </p></div></div>
        <div class="card mb-3 bg-white"><div class="card-body"><h4 class="card-title font-weight-light text-center"><p class="h1 mb-2"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="link" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-link m-4 b-icon bi"><g><path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"></path><path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"></path></g></svg></p> <p>Deploy Token</p></h4> <p class="card-text text-center">Confirm your transaction using MetaMask.Once deployed your Token is ready to use.
        </p></div></div>
                     
                     </div>

                </div>
            </div>
        );
    
    }
    
    export default Task;
    
    
    
    


