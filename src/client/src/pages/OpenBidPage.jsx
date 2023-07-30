import react, { useContext, useEffect, useState } from 'react';
import { json, useLocation } from 'react-router-dom';
import { TransactionContext } from "../context/TransactionContext";
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import Result from '../components/Result';
import fs from 'node:fs';
const openBidPage = (props)=>{

    const { openTdrs,currentAccount, handleChangeBidAmt, handleChangeBidderName, placeOpenBid, setTdrID, tdrID, loadOpenTdrs , getPrevOpenBids, OpenBids} = useContext(TransactionContext);

    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const id = location.state.tdr.props.id;
    const opentdr = openTdrs[id];
    const [name,setName] = useState();
    const [bid,setBid] =useState();
    const [bidings,setBidings] = useState([]);
    
    const handleChangeName = (e) =>{
        setName(e.target.value);
        console.log("Temp::" + name);
        handleChangeBidderName(e);
    }
    
    
    const handleChangeAmt = (e) =>{
        setBid(Number(e.target.value));
        console.log("Number" + bid);
        handleChangeBidAmt(e);
    }
   
    const handlePlaceOpenBid = () => {
        var p = [];
        var k = {};
        k['id'] = tdrID;
        k["name"] = name;
        k["amt"] = bid;
        bidings.push(k);
        setBidings(bidings);
        console.log(tdrID);
        placeOpenBid();

        try {
            
            const fileData = localStorage.getItem('data');
            var tt = JSON.parse(fileData);
            if(tt!=null){
            for(let i = 0;i<tt.length;i++){
                p.push(tt[i]);
            }}
            p.push(k);
            localStorage.setItem('data',JSON.stringify(p));
            
          } catch (error) {
            console.error('Error writing JSON file:', error);
          }
        
    }
   

    

    useEffect(()=>{
        setTdrID(id);
        // console.log(id);
        setTimeout(()=>{
            setLoading(true);
            loadOpenTdrs();
            getPrevOpenBids();
            setLoading(false);
            var biddata = JSON.parse(localStorage.getItem('data'));
            var sortedid = [];
            for(let i=0;i<biddata.length;i++){
                if(biddata[i].id == tdrID){
                    sortedid.push(biddata[i]);
                }

                
            }
         
            setBidings(sortedid);
        
            
  
           
        },1000)

        
    })
    

    return(

        <div className='bg-base-300 h-full w- mr-1 p-5 ml-2 rounded-lg grid grid-row-6 grid-cols-3 bg-opacity-80'>

            <div className='row-span-1 col-span-2'>
                <h1 className='text-4xl font-bold'>OpenTender</h1>
                <br></br>  
                 <Link to='/result' state={{bids:bidings,id:tdrID,tdrtitle:opentdr.tdrTitle.title,desc:opentdr.tdrDesc.desc}}>
               
                <button
    class="middle none center mr-3 rounded-lg border boder-blue-500 bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Result
  </button>
            </Link>
            </div>
            <div className='row-span-2 col-span-2 grid grid-row-3 p-3 bg-base-300 m-3 rounded-lg'>
                <div className='text-2xl row-span-1 text-center font-bold '>
                    {opentdr.tdrTitle.title}
                </div>
                <div className='row-span-3'>
                    {opentdr.tdrDesc.desc}
                   

                </div>
            </div>
            <div className='row-span-2 col-span-1 text-center p-3 bg-base-300 m-3 rounded-lg grid grid-rows-5 '>
                
                <div className='text-xl row-start-1 font-bold'>
                    Bid Here
                </div>
               
               <div className='row-start-3'>
                    <input type="text" placeholder='Enter Amount in ETH' className='text-center input input-bordered input-primary w-full max-w-xs m-2' onChange={handleChangeAmt} />
               </div>
               <div className='row-start-4'>
                    <input type="text" placeholder='Enter Name' className='text-center input input-bordered input-primary w-full max-w-xs m-2' onChange={handleChangeName} />
                    
               </div>
               <div className='row-start-5'>
                    <button className='btn hover:bg-primary w-[200px]' onClick={handlePlaceOpenBid}>
                        Bid
                    </button>
                   
               </div>

            </div>
            <div className='row-span-3 col-span-full p-3 bg-base-300 m-3 rounded-lg'>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <div className='font-bold px-5'>Bidder Address</div>
                            <div className='font-bold px-5'>Bid Amount</div>
                        </div>
                        {isLoading?
                            <div className='px-5'>
                                Loading
                            </div>
                            :
                            <div >
                                {
                                
                                bidings.map((x)=>(<div className=' flex flex-row justify-between'> 
                                    <div className='px-5'>{x.name}</div>
                                    <div className='px-5'>{x.amt} ETH</div>
                                 </div>))}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>

    )

}

export default openBidPage;



{/* <div className="grid grid-rows-6 bg-base-300 h-full ml-2 rounded-xl p-5 bg-opacity-80">

<div className='sticky row-span-1 top-0'>
    <h1 className="font-bold text-4xl">OpenTender</h1>
</div>

<div className='grid grid-col-3 gap-2 row-span-3'>
    <div className='col-span-2'>    
        <div className='text-3xl font-bold'>
            {tdr.tdrTitle.title}
        </div>
        <div className=' text-xl'>
            {tdr.tdrDesc.desc}
        </div>
    </div>
    <div className='col-span-1'>
        Highest Bid: {tdr.tdrMaxBid.maxBid} ETH
    </div>
</div>

</div>   */}