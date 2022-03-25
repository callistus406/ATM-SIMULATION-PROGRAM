const obj = {
  acct: "",
  bal: "",
  setAcct(val) {
    this.acct.concat(val);
  },
  showAcct() {
    console.log(this.acct);
  },
};

obj.setAcct("dsdsd");

obj.showAcct();
