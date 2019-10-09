const elements = [
	{
	id: 1,
	type: 'TASK',
	typeName: '任务',
	typeDesp: '',
	image: 'images/icons48/gear.png',
	isControllNode: false,
	style: '',
	taskClass: 'com.mr.xxx.TaskDemo',
	contentFunc: createTaskContent
	},

	{
		id: 2,
		type: 'MAIL',
		typeName: '邮件',
		typeDesp: '',
		image: 'images/icons48/mail_new.png',
		isControllNode: false,
		style: '',
		To: '',
		Cc: '',
		From: '',
		contentFunc: createMailContent
	},

	{
		id: 3,
		type: 'START',
		typeName: '开始',
		typeDesp: '',
		image: 'images/icons48/event.png',
		isControllNode: true,
		style: 'fillColor=#cdeb8b;shape=ellipse',
		contentFunc: createStartContent
	},

	{
		id: 4,
		type: 'END',
		typeName: '结束',
		typeDesp: '',
		image: 'images/icons48/event_end.png',
		isControllNode: true,
		style: 'fillColor=#ffc7c7;shape=ellipse'
	},

	{
		id: 5,
		type: 'ERROR',
		typeName: '异常',
		typeDesp: '',
		image: 'images/icons48/error.png',
		isControllNode: true,
		style: 'fillColor=#f52212;shape=ellipse',
		errorClass: 'com.mr.xxx.ErrorDemo',
		contentFunc: createErrorContent
	},

	{
		id: 6,
		type: 'MERGE',
		typeName: '分支',
		typeDesp: '',
		image: 'images/icons48/merge.png',
		isControllNode: true,
		style: 'fillColor=#91bcc0;shape=ellipse',
		condition: '',
		contentFunc: createMergeContent
	},

];


function createStartContent() {
	let content = document.createElement('div');
	let table = document.createElement('table');

	addInputElement(table, '名称', 'input', this.data.typeName, 'true');
	addInputElement(table, '描述', 'textarea', this.data.typeDesp);

	content.appendChild(table);

	content.func = function (cell) {
		cell.data.typeDesp = content.getElementsByTagName('input')[1].value;
	};
	return content;
}

function createErrorContent() {
	let content = document.createElement('div');
	let table = document.createElement('table');

	addInputElement(table, '名称', 'input', this.data.typeName, 'true');
	addInputElement(table, '描述', 'textarea', this.data.typeDesp);
	addInputElement(table, '异常处理类', 'input', this.data.errorClass);
	content.appendChild(table);

	content.func = function (cell) {
		cell.data.typeDesp = content.getElementsByTagName('input')[1].value;
		cell.data.errorClass = content.getElementsByTagName('input')[2].value;
	};
	return content;
}

function createMergeContent() {
	let content = document.createElement('div');
	let table = document.createElement('table');

	addInputElement(table, '名称', 'input', this.data.typeName, 'true');
	addInputElement(table, '描述', 'textarea', this.data.typeDesp);
	addInputElement(table, '路由条件', 'input', this.data.condition);
	content.appendChild(table);

	content.func = function (cell) {
		cell.data.typeDesp = content.getElementsByTagName('input')[1].value;
		cell.data.condition = content.getElementsByTagName('input')[2].value;
	};
	return content;
}

function createTaskContent() {
	let content = document.createElement('div');
	let table = document.createElement('table');

	addInputElement(table, '名称', 'input', this.data.typeName, 'true');
	addInputElement(table, '描述', 'textarea', this.data.typeDesp);
	addInputElement(table, '任务处理类', 'input', this.data.taskClass);
	content.appendChild(table);

	content.func = function (cell) {
		cell.data.typeDesp = content.getElementsByTagName('input')[1].value;
		cell.data.taskClass = content.getElementsByTagName('input')[2].value;
	};
	return content;
}

function createMailContent() {
	let content = document.createElement('div');
	let table = document.createElement('table');

	addInputElement(table, '名称', 'input', this.data.typeName, 'true');
	addInputElement(table, '描述', 'textarea', this.data.typeDesp);
	addInputElement(table, '收件人', 'input', this.data.To);
	addInputElement(table, '抄送人', 'input', this.data.Cc);
	addInputElement(table, '发件人', 'input', this.data.From);
	content.appendChild(table);

	content.func = function (cell) {
		cell.data.typeDesp = content.getElementsByTagName('input')[1].value;
		cell.data.To = content.getElementsByTagName('input')[2].value;
		cell.data.Cc = content.getElementsByTagName('input')[3].value;
		cell.data.From = content.getElementsByTagName('input')[4].value;
	};
	return content;
}


function addInputElement(table, type, name, value, readonly) {
	let tr = document.createElement('tr');

	let tdLabel = document.createElement('td');
	tdLabel.innerHTML = name;
	tr.appendChild(tdLabel);

	let td = document.createElement('td');
	let inputData = document.createElement(type);
	inputData.setAttribute('value', value);
	if(readonly){
		inputData.setAttribute('readonly', readonly);
	}

	td.appendChild(inputData);
	tr.appendChild(td);

	table.appendChild(tr);
}
