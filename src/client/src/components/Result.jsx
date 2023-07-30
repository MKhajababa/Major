import { useLocation } from 'react-router-dom'
const Result = () => {
    var location = useLocation();
    const {bids,id,tdrtitle,desc} = location.state;
    var max = 0;
    var resu;
    for(let i = 0;i<bids.length;i++){
        if(bids[i].amt > max){
        max = bids[i].amt;
        console.log("Result:" + i + '=='+ max);
        }
        
    }
    
    for(let i = 0;i<bids.length;i++){
        if(bids[i].amt == max){
        resu = bids[i];
        console.log("Result poof:" + resu);
        }
        
    }
    return (
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-lg p-5 bg-opacity-80">
            
            <div>
                <h1 className="font-bold text-3xl">Result </h1>
            </div>

            <div className="flex ">
                
            <div>
                <div class="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900 xl">Winner Information</h3>
                </div>
                <div class="mt-6 border-t border-gray-100">
                    <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Winnar Name</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{resu.name}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Tender</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tdrtitle}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Describtion</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{desc}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Tender Amount</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{resu.amt}</dd>
                    </div>
                    
                    </dl>
                </div>
                </div>

            </div>  

        </div>
    )
}

export default Result;