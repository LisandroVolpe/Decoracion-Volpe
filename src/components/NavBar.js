import react from 'react'
import CartWidget from './CartWidget/CartWidget'

function NavBar() {
    return <>
	<CartWidget/>
        <nav>
			<ul style={{listStyle: 'none'}}>
				<li><a href="">Home</a></li>
				<li><a href="">Nuevo</a></li>
				<li><a href="">Productos</a></li>
				<li><a href="">Contacto</a></li>
			</ul>
		</nav>
     </>
}


export default NavBar;
