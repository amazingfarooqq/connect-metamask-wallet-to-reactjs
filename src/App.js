import logo from './logo.svg';
import './App.css';
import { useWeb3React } from '@web3-react/core';
import { injected } from './components/wallet/Connectors';

function App() {

  const { activate, account, deactivate, active , chainId } = useWeb3React()

  const connectMetamask = async () => {
    try {
      await activate(injected)
    } catch (error) {

    }
  }
  const disconnectMetamask = async () => {
    try {
      await deactivate()
    } catch (error) {

    }
  }





  return (
    <div className="App">


      <br />
      <br />
      <br />

      {active ? 'connected' : "not connected"}

      <br />


      {active ?
        <button className="disconnectwallet" onClick={disconnectMetamask}>Disconnect Wallet</button>

        :
        <button className="connectwallet" onClick={connectMetamask}>Connect Wallet</button>


      }

      <br />
      <br />
      <br />
      {active &&
        <>
        <span className='account'>{account}</span>
        <br />
        <br />
        <span className='chainid'>{chainId}</span>

        </>
      }


    </div>
  );
}

export default App;
