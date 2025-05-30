import React from 'react'
import { Store } from 'lucide-react';
import { ShieldOff } from 'lucide-react';
import { ChevronsLeftRightEllipsis } from 'lucide-react';
import { Columns3Cog } from 'lucide-react';

import { MoveRight } from 'lucide-react';

const Inter = () => {
  return (
    <div>
    <div className='w-full flex justify-end mb-5 '>
        <div className='lg:w-1/2 '>
                <p className='text-sm font-thin text-white/40'>Enter the cosmos hub</p>
                  <div>
                        <p className='text-4xl font-bold text-white/80'>The Heart of the Interchain.</p>
                        <p className='pl-3 mt-2 text-white/40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, expedita soluta sit, praesentium deserunt voluptates
                          minima saepe vitae ullam, odio tenetur voluptatem numquam vero. Laudantium amet cumque harum delectus aliquid!</p>
                  </div>
                  <div className="sections grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2">
                    <div className=' m-1'>
                      <p className='flex gap-2 p-2 font-bold animate__animated animate__fadeInLeftBig'><Store /> marketplace</p>
                      <p className='text-sm font-thin text-white/40 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nisi? Doloribus perspiciatis, voluptate, est dolores
                         sapiente ut quia atque unde nisi inventore corrupti quae repudiandae modi. Corrupti, iusto perferendis. Ducimus?</p>
                    </div>
                    <div className=' m-1'>
                      <p className='flex gap-2 p-2 font-bold animate__animated animate__fadeInRight'><ShieldOff /> Security Provider</p>
                      <p className='text-sm font-thin text-white/40 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos saepe, pariatur tenetur, nisi consequuntur nesciunt suscipit tempora
                         modi accusantium quos explicabo nam. Deleniti sed pariatur incidunt, harum delectus perspiciatis! Itaque.</p>
                    </div>
                    <div className=' m-2'>
                      <p className='flex gap-2 p-2 font-bold animate__animated animate__fadeInLeftBig'><ChevronsLeftRightEllipsis /> Router</p>
                      <p className='text-sm font-thin text-white/40 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nihil neque in laudantium harum, incidunt dolor
                         excepturi dicta dolore perferendis, delectus dolorem temporibus animi odit vel, nostrum sed veritatis porro.</p>
                    </div>
                    <div className=' m-2'>
                      <p className='flex gap-2 p-2 font-bold animate__animated animate__fadeInRight'>   <Columns3Cog /> custodian</p>
                      <p className='text-sm font-thin text-white/40 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat dicta illum recusandae harum adipisci maiores distinctio 
                        repellendus asperiores excepturi saepe amet molestiae repellat cupiditate eum, autem pariatur rem. Odit.</p>
                    </div>
                  </div>
                  <button className='mt-5 p-2 bg-white text-black rounded-sm flex gap-2 font-bold'>Cosmos Hub <MoveRight /></button>
              </div>


              
      
                </div>
                        <div className=' lg:w-full flex  justify-center mt-3  m-2 p-4'>
                        <div className=' sm:w-full  lg:w-1/2'>
                            <p className='text-2xl font-bold text-white'>Secured By</p>
                            <p className='text-xl font-thin text-white/40'>The Atoms.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat culpa reprehenderit delectus nesciunt officiis error tempore,
                                 necessitatibus est neque eos consequatur laudantium soluta illum quas aut esse vitae rerum dolorum?</p>

                                <div className='flex flex-col sm:flex-row gap-2'>
                                   <button className='mt-5 p-2 bg-white text-black rounded-sm  cursor-pointer   '>Start Learning</button>
                                 <button className='mt-5 p-2  rounded-sm cusror-pointer border-1 border-white cursor-pointer hover:bg-white hover:text-black'>Learn more...</button>
                              </div>
                                </div>
                        </div>

                 </div>
  )
}

export default Inter
