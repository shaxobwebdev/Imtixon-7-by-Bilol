import logo from 'components/image/logo.svg'
import Menu from 'components/Header/Menu'
import {Icon} from 'components/Icons';
import Playlist from './Header/Playlist';
import DownloadApp from './Header/DownloadApp';




export default function header() {
  


    return(
      <div className="flex flex-col flex-shrink-0 pt-6 bg-black w-60">
          <a href="#" className='px-6 mb-7'>
          <img className='w-auto h-10 ' src={logo} />
          </a>

          <Menu />

          <nav className='px-6 mt-8'>
            <ul>
              <li>
                <a className="flex items-center text-sm font-bold transition-colors gap-x-3 text-link hover:text-white group" href="#">
                <span className='bg-white p-[6px] bg-opacity-70 group-hover:bg-opacity-90'>
                  <Icon name="plus" />
                </span>
                Create Playlist
                </a>
                <a className="flex items-center mt-4 text-sm font-bold transition-colors gap-x-3 text-link hover:text-white group" href="#">
                <span className='bg-gradient-to-r from-gra1 to-gra2  p-[6px] opacity-70 group-hover:opacity-100'>
                  <Icon name="menuheart" />
                </span>
                Liked Songs
                </a>
              </li>
            </ul>
            <div className="h-[1px] bg-active mt-5"></div>
          </nav>
          <nav className='px-6 pt-3 overflow-y-auto scrollbar-hide'>
            <Playlist />
          </nav>
          <span className='px-6 pt-3 '><DownloadApp /></span>
      </div>
    )
  }
