var Application = {
	run: function(){
		console.log("%ctestServer:: 3306_run", 'color: green');
		window.addEventListener('load', this.onRun.bind(this), false);
	},
	onRun: function(){
		console.log("%ctestServer:: 3306_onRun", 'color: green');
		console.log(this.dice20());
	},
	dice20: function(){
		return Math.floor((Math.random() * 10)+(Math.random() * 10));
	}
}
Application.run();
