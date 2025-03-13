import Hamburger from 'hamburger-react'


export const Menu = ({ toggled, toggle }) => {



  return (
    <Hamburger toggled={toggled} toggle={toggle}  color='#19522F' size={25}/>
  )
}
