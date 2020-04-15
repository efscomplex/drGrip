import React from 'react'
import {
      Navbar,
      SocialBar,
      List, } from './../base/'

import useStore from './../../store'
const {config:{menu}} = useStore()

function AppFooter(){
      return (
            <footer className="app-footer footer">
                  <SocialBar className="social-bar dark-3" items={["fb","ig","ld"]}/>
                  <main className="main dark">
                        <Navbar className="navbar" items={menu.items}/>
                        <hr className="mg-2" width="90%" color="#444"></hr>
                        <section className="flex-c mg-2-4all">
                              <List 
                                    decoration="underline"
                                    title="YOSEMITE BUM RESOLES" 
                                    items={["6769 8th Street", "Buena Park, CA 90620", "714.522.5556"]}>
                              </List>
                              <List 
                                    title="CUSTOMER SERVICE" 
                                    items={["Contact", "Order Form", "Trax Rubber Info"]}>
                              </List>
                        </section>
                  </main>
            </footer>
      )
}

export default AppFooter