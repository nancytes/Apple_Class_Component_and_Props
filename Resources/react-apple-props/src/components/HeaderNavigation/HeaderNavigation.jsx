import React, { Component } from 'react'
import logo from '../../commonResource/images/icons/logo-sm.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import cart from '../../commonResource/images/icons/cart-sm.png'

export default class HeaderNavigation extends Component {
  render() {
    return (
        <div class="nav-wrapper fixed-top">
		  <div class="container">
			<nav class="navbar navbar-toggleable-sm navbar-expand-md">
			    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a class="navbar-brand mx-auto" href="#"><img src={logo} /></a>

			    <div class="navbar-collapse collapse">
			        <ul class="navbar-nav nav-justified w-100 nav-fill">
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li class="nav-item" ><a class="nav-link js-scroll-trigger" href="/search/"><img src={search} /></a></li>
						<li class="nav-item"><a  class="nav-link js-scroll-trigger" href="/cart/"><img src={cart} /></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    )
  }
}
