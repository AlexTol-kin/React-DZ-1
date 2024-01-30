import logo from './logo.svg';
import './App.css';
import { NowDateYear } from './core';
import { createElement } from 'react';

export const App = () => {
	return createElement(
		'div',
		{
			className: 'App',
		},
		createElement(
			'header',
			{
				className: 'App-header',
			},
			createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js '),
				'and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement(
				'h1',
				{
					className: 'date',
				},
				NowDateYear(),
			),
		),
	);
};

// <div className="App">
// 	<header className="App-header">
// 		<img src={logo} className="App-logo" alt="logo" />
// 		<p>
// 			Edit <code>src/App.js</code> and save to reload.
// 		</p>
// 		<a
// 			className="App-link"
// 			href="https://reactjs.org"
// 			target="_blank"
// 			rel="noopener noreferrer"
// 		>
// 			Learn React
// 		</a>
// 		<h1 className="date">{NowDateYear()}</h1>
// 	</header>
// </div>
