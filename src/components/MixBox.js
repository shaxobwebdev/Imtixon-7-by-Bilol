import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ArtistBox({title ,see = false, singer}) {
  return (
      <section>
          <header className='flex justify-between'>
            <h3 className='text-2xl font-bold tracking-tight text-white hover:underline'>{title}</h3>
            {see && (
                <NavLink className={'text-link text-[12px] font-semibold tracking-widest bottom-0'} to={see}>
                    SEE ALL
                </NavLink>
            )}
          </header>
 
      </section>
      
  )
}
