import { ConnectWallet } from "@thirdweb-dev/react";
export default function Main(){
    return(
<div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">NFT Powered decentralized rewards for the next-generation</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus quam. Sed tempor auctor est, a ultrices sapien ultrices at. Phasellus nec egestas elit. Duis tincidunt mi a est euismod, a lobortis justo sodales. Duis imperdiet commodo tortor in maximus. In sodales placerat vestibulum. Nulla blandit urna ac diam semper fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <ConnectWallet
          auth={{
            loginOptional: false,
          }}
        />
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Button</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://economictimes.indiatimes.com/thumb/msid-93499274,width-1200,height-900,resizemode-4,imgsize-99638/how-investible-are-nfts.jpg" alt="" width="720"/>
      </div>
    </div>
    </div>

       
    )
}