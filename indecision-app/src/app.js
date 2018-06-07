import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, my name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

/* ----------
babeljs.io - plugin - transform-class-properties in .babelrc
https://babeljs.io/docs/plugins/transform-class-properties/

not necessary to use contructor() and bind the function
---------- */

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, my name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
