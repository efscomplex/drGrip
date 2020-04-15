import React from 'react'
import {Link} from 'react-router-dom'

import {
      Navbar,
      Logo,
      Slider, } from './../base/'

import useStore from  '../../store/'
const {config:{title, logo, menu, slides}} = useStore()

function AppHeader(){
      return (
            <header className="app-header">
                  <div className="main-header">
                        <Link to={"/"}>
                              <Logo className="logo"
                                    src={logo.src}
                                    text={title}
                              />
                        </Link>
                        <div>
                              <Navbar className="navbar mg-l-4" items={menu.items}>
                                    {/* <Dropdown options={["Eng","fra", "Cat" ]}>Lang</Dropdown> */}
                              </Navbar>
                        </div>
                  </div>
                  <Slider slides={slides}/>
            </header>
      )
}

export default AppHeader