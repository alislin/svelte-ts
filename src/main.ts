import App from './page/App.svelte';

const app = new App({
	target: document.querySelector("#app"),
	props: {
		name: 'world'
	}
});

export default app;