import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: "Days One", Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		color-scheme: light dark;
		color: #000;
		background-color: #fff;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	a {
		font-weight: 500;
		color: #646cff;
		text-decoration: inherit;
	}
	a:hover {
		color: #535bf2;
	}

	html,
	body {
		min-height: 100vh;
		padding: 0;
		margin: 0;
	}

	body {
		/* display: flex;
		place-items: center; */
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	button {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: border-color 0.25s;
	}
	button:hover {
		border-color: #646cff;
	}
	button:focus,
	button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}

	@media (prefers-color-scheme: light) {
		:root {
			color: #213547;
			background-color: #ffffff;
		}
		a:hover {
			color: #747bff;
		}
		button {
			background-color: #f9f9f9;
		}
	}

  /**************************/
  /* CSS Animations Classes */
  /**************************/

  /* 
  The following class-endings: *-enter, *-enter-active, *-exit, *-exit-active,
  have very specific meanings to <CSSTransition />
  (see more: https://reactcommunity.org/react-transition-group/css-transition)
  */

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;

    transition: opacity 250ms ease-out;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;

    transition: opacity 250ms ease-out;
  }

`;

export default GlobalStyles;
