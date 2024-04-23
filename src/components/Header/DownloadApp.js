import React from 'react';
import {Icon} from 'components/Icons';


export default function DownloadApp() {
  return (
      <div>
          <a className='flex items-center py-2 transition-colors gap-x-4 text-link hover:text-white' href="#">
          <span><Icon name="menudownload" />Good afternoon</span>
          <span className='text-sm font-bold'>Good afternoon</span>
          </a>
      </div>
  )
}
