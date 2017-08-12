import React from 'react'
import Link from 'gatsby-link'


// TODO: detect availability of web 3
let web3available = false;

const EtherInterface = () => {
  return (
    (<p><Link to="/pay-now/">"Make a payment now."</Link></p>) +
    (<p><Link to="/pay-later/">"Make a payment later."</Link></p>) +
    (<p><Link to="/cancel-payment/">"Cancel a payment you've sent."</Link></p>) +
    (<p><Link to="/refund-payment/">"Refund a payment you've received."</Link></p>)
  );
}

const EtherError = () => {
  console.log("Thee was a serious error establishing a connection to the blockchain.");
  return (
    <div>
      <p>There was a serious error establishing a connection to the blockchain. You may need to start your Ethereum node.</p>
    </div>
  )
}


// TODO: Query the contract to find out if there are pending payments left to cancel.
// TODO: Populate a list of pending payents for cancellation.
// TODO: Enable the user to cancel a pending payment.
// TODO: Repopulate the list when finished

const Payments = () => {
  // TODO: get payments
  // TODO: populate this list
  return (<p>Sigh!</p>)
};

const CancelPaymentPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to page 2, ok?</p><Payments />
    <p>Got it</p>
    <Link to="../">Go back to the homepage</Link>
  </div>

const PayNowPage = () => <p>STUB: Pay now</p>

const IndexPageNoWeb3 = () => {
//   return (<p>ok</p>);
// }
    return (
      <div>
        <h1>Ethereum Safe Pay</h1>
        <p>Welcome Ethereum Safe Pay.</p>
        {
          web3available ?
            <EtherInterface></EtherInterface> :
            <div><p>awww shucks!</p><EtherError /></div>
        }
      </div>
    );
};

const IndexPageWithWeb3 = () => {
  <p>darn</p>
}
//   return (
//     <div>
//         <h1>Ethereum Safe Pay</h1>
//         <p>Welcome Ethereum Safe Pay.</p>
//       { web3available ? (
//           <p>you're hooked up!</p>
//           <p><Link to="/pay-now/">{"Make a payment now."}</Link></p>
//           <p><Link to="/pay-later/">{"Make a payment later."}</Link></p>
//           <p><Link to="/cancel-payment/">{"Cancel a payment you've sent."}</Link></p>
//           <p><Link to="/refund-payment/">{"Refund a payment you've received."}</Link></p>) :
//         (<p>awww shucks!</p>);
//       }
//     </div>);
// };

const IndexPage = web3available ? IndexPageWithWeb3 : IndexPageNoWeb3;

export default IndexPage
