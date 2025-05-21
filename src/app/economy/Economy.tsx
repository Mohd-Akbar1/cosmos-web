import React from 'react'
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const Economy = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center mt-3 text-white/70'>
        <div className='text-white w-full ml-10 pl-10'>
            <p className='text-4xl font-bold text-white/80'>Be the part of the open</p>
            <p className='text-4xl font-bold text-white/80'>Economy of the future</p>
            <p className='text-sm font-thin flex gap-2 my-2 text-white/40'>powerful features <MoveRight /></p>
        </div>

        <div className='w-[80vw] grid  md:grid-cols-4 md:grid-rows-6 md:m-5 gap-2 '>

          <div className='  row-span-6 col-span-2 bg-white/3 p-5'>
              <p className='text-[12px] p-2 text-white/40'>Interchain Account</p>
              <div className='size-40 w-full flex items-center justify-center'>
                <Image src="/image.png" alt="bloackchain" width={100} height={100} />
              </div>
              <p className='text-3xl'>One Secure Account for all your digital Assets.</p>
              <p className='text-[12px] p-2 text-white/40'>comming soon...</p>
           </div>

          <div className=' col-span-2 row-span-3 bg-white/3 flex flex-col '>
          <p className='text-[12px] p-2 text-white/40'>Decentralized exchnage</p>
          <div className='flex h-[85%] items-center gap-4 justify-around'>
            <p className='text-2xl text-center flex items-center p-3'>Swap Tokens & collectibles.</p>
            <div>
              <Image  src="/image1.png" alt="bloackchain" width={100} height={100} className=''/>
            </div>
          </div>
             <p className='text-[12px] p-2 text-white/40'>comming soon...</p>
          
           </div>
            <div className=' col-span-1 row-span-3 bg-white/3'>
                    <p className='text-[12px] p-2 text-white/40'>Liquidity Pool</p>
                    <p className='text-2xl p-3'>Provide Liquidity earn Rewards.</p>
            
            </div>
          <div className=' col-span-1 row-span-3 bg-white/3'>
                   <p className='text-[12px] p-2 text-white/40 '>Wrapped ETH/BTC</p>
                   <p className='text-2xl p-3'>+ Ethereum.</p>
                   <p className='text-2xl p-3'>+ Bitcoin.</p>
           </div>
        </div>
                 

      
    </div>
  )
}

export default Economy
