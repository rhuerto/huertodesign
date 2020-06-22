import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta name="google-site-verification" content="0RxM3JxKl2y88nYsANMf9h-HOKWuZLt5wUJqplj2rxU" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link href="http://www.huertodesign.com" hreflang="en-us" rel="alternate" title="Huerto Design" type="text/html"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
     		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-3801417-3"></script>
		    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
			<script
				dangerouslySetInnerHTML={{
				__html: `
				// Hide Header on on scroll down
				var didScroll;
				var lastScrollTop = 0;
				var delta = 5;
				var navbarHeight = $('header').outerHeight();

				$(window).scroll(function(event){
					didScroll = true;
				});

				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 250);

				function hasScrolled() {
					var st = $(this).scrollTop();
					
					// Make sure they scroll more than delta
					if(Math.abs(lastScrollTop - st) <= delta)
						return;
					
					// If they scrolled down and are past the navbar, add class .nav-up.
					// This is necessary so you never see what is "behind" the navbar.
					if (st > lastScrollTop && st > navbarHeight){
						// Scroll Down
						$('header').removeClass('nav-down').addClass('nav-up');
					} else {
						// Scroll Up
						if(st + $(window).height() < $(document).height()) {
							$('header').removeClass('nav-up').addClass('nav-down');
						}
					}
					
					lastScrollTop = st;
				}
				// Google Analytics
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
	  
				gtag('config', 'UA-3801417-3');
				`
				}}
			/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
