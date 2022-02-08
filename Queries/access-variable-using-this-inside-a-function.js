var a = 10

function abc() {
    var a = 15;
    console.log("window variable", window.a);
    /**
     * if this object refers to the current context the following value should have been 15
     * but instead this is 10, why?
     */
    console.log("current variable", this.a);
}

abc();