let randnum = Math.floor(Math.random() * data.length);
let anser = data[randnum];
let num = 0;

const form = document.getElementById("form");
const input = document.getElementById("input");


let datalist = document.createElement("datalist");
datalist.id = "mylist";
let names = [];
data.forEach((e)=>{
	let option = document.createElement('option');
	option.value = e[0];
    datalist.appendChild(option);
});
document.body.appendChild(datalist);

document.getElementsByTagName('button')[0].addEventListener("click",()=>{
	for (let i = 0; i < num; i++){
		let list_element = document.getElementById("item");
		list_element.remove();
		}
	num = 0;
	randnum = Math.floor(Math.random() * data.length);
	anser = data[randnum];
})

form.addEventListener("submit",function(event) {
	event.preventDefault();
	match();
})
function match(){
	num = num + 1;
	const tbody = document.getElementById("table");
	let tr = document.createElement('tr');
	tr.className = 'item';
	tr.id = "item"
	tr.textContent = "";
	if (anser[0] == input.value){
			anser.forEach((e)=>{
				let td = document.createElement("td");
				td.textContent = e;
				td.className = "table-warning";
				tr.appendChild(td);
			})
			tbody.appendChild(tr);
			window.alert(`正解です！${num}回目で正解しました！`);
		}
	else {data.forEach((elem)=>{
		if (elem[0] == input.value){
			elem.forEach((e,index)=>{
				let td = document.createElement("td");
				td.textContent = e;
				if (index < 3){
					if (e == anser[index]){
						td.className = "table-warning";
					}
					else {
						td.className = "table-danger";
					}
				}
				else if(index == 10){
					if (e == anser[index]){
						td.className = "table-warning";
						td.textContent = `第${e}世代`;
					}
					else{
						td.className = "table-danger";
						td.textContent = `第${e}世代`;
					}
				}
				else {if (e == anser[index]){
					td.className = "table-warning";
					}
					else if (e > anser[index]){
						td.className = "table-primary";
					}
					else {
						td.className = "table-danger";
					}}
			tr.appendChild(td);
			});
		tbody.appendChild(tr);}
	})};
	input.value = "";
};




