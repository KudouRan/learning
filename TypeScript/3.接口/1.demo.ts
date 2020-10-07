function printLable(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

printLable({ label: 'hehehhe' });

//使用接口定义
interface LabeledValue {
  label: string;
}

function printLable1(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

printLable1({ label: 'hehehhe' });

//继承,可以多继承
interface LabeledValueSub extends LabeledValue {
  name: string;
}

function printLable2(labeledObj: LabeledValueSub) {
  console.log(labeledObj.label);
}

printLable2({ name: 'cat', label: 'hehehhe' });
