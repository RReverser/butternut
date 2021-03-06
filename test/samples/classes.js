module.exports = [
	{
		description: 'minifies class declaration',

		input: `
			class Foo {
				bar () {
					// code goes here
				}

				baz () {
					// code goes here
				}
			}`,

		output: `class Foo{bar(){}baz(){}}`
	},

	{
		description: 'minifies class expression',

		input: `
			var Foo = class Foo {
				bar () {
					// code goes here
				}

				baz () {
					// code goes here
				}
			}`,

		output: `var Foo=class a{bar(){}baz(){}}`
	},

	{
		description: 'minifies subclass declaration',

		input: `
			class  Foo  extends  Bar {
				baz () {
					// code goes here
				}
			}`,

		output: `class Foo extends Bar{baz(){}}`
	},

	{
		description: 'minifies subclass expression',

		input: `
			var Foo = class  Foo  extends  Bar {
				baz () {
					// code goes here
				}
			}`,

		output: `var Foo=class a extends Bar{baz(){}}`
	},

	{
		description: 'minifies id-less subclass expression',

		input: `
			var Foo = class    extends  Bar {
				baz () {
					// code goes here
				}
			}`,

		output: `var Foo=class extends Bar{baz(){}}`
	}
];
