import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <form>
  <label for="tag">Choose a tag:</label>
  <select id="tag" name="tag">
    <option value="div">div</option>
    <option value="a">a</option>
    <option value="form">form</option>
    <option value="h1">h1</option>
    <option value="input">input</option>
  </select>
  <div class="form-group">
    <label for="class-input">class:</label>
    <input type="text" id="class-input" name="class">
  </div>

  <div class="form-group">
    <label for="id-input">id:</label>
    <input type="text" id="id-input" name="id">
  </div>

  <div class="form-group" id="href-group" style="display: none;">
    <label for="href-input">href:</label>
    <input type="text" id="href-input" name="href">
  </div>

  <div class="form-group" id="target-group" style="display: none;">
    <label for="target-select">target:</label>
    <select id="target-select" name="target">
      <option value="_self">_self</option>
      <option value="_blank">_blank</option>
      <option value="_parent">_parent</option>
      <option value="_top">_top</option>
    </select>
  </div>

  <div class="form-group" id="method-group" style="display: none;">
    <label for="method-select">method:</label>
    <select id="method-select" name="method">
      <option value="get">get</option>
      <option value="post">post</option>
    </select>
  </div>

  <div class="form-group" id="action-group" style="display: none;">
    <label for="action-input">action:</label>
    <input type="text" id="action-input" name="action">
  </div>

  <div class="form-group" id="type-group" style="display: none;">
    <label for="type-select">type:</label>
    <select id="type-select" name="type">
      <option value="text">text</option>
      <option value="email">email</option>
      <option value="password">password</option>
      <option value="checkbox">checkbox</option>
      <option value="radio">radio</option>
      <option value="submit">submit</option>
      <option value="reset">reset</option>
    </select>
  </div>

  <div class="form-group" id="name-group" style="display: none;">
    <label for="name-input">name:</label>
    <input type="text" id="name-input" name="name">
  </div>

  <div class="form-group" id="value-group" style="display: none;">
    <label for="value-input">value:</label>
    <input type="text" id="value-input" name="value">
  </div>
    
 <div class="form-group" id="text-group" >
    <label for="text-input">Text:</label>
    <input type="text" id="text-input" name="text">
  </div>
  <button type="submit">Create element</button>
    </form>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


type size ="Маленький"|"Средний"|"Большой";
type milk ="Банановое"|"Кокосовое"|"Соевое"|"Обычное";
type taste ="Ягодный"|"Ванильный"|"Шоколадный"|"Карамельный";


function coffee(s: size,m?: milk , v?: taste):number {
    let sum:number=0;
    const sizes: Record<size, number> = { Маленький: 150, Средний: 180, Большой: 200 };
    const milks: Record<milk, number> = { Обычное: 0, Банановое: 100, Кокосовое: 110, Соевое: 130 };
    const tastes: Record<taste, number> = { Ягодный: 10, Ванильный: 20, Шоколадный: 30, Карамельный: 40 };
     sum = sizes[s];
    if (m) {
        sum += milks[m];
    }
    if (v) {
        sum += tastes[v];
    }
    return sum;
}

console.log(coffee("Маленький","Банановое","Ванильный"))
console.log(coffee("Большой","Обычное","Шоколадный"))
console.log(coffee("Средний","Соевое"))
console.log(coffee("Средний"))

function myFunc(s:string|number|number[]|null):string[]|number[]|[]{
    if(typeof s === "string")
        return s.split(" ")
    if (typeof s === "number")
    {
        let a:number[]=[]
        for (let i:number=1;i<=s;i++) a.push(i)
        return a
    }
    if (Array.isArray(s) && s.every(e=> typeof e === "number"))
        return s
    return []
}

console.log(myFunc("ghj ghjh ghhj"))
console.log(myFunc(5))
console.log(myFunc([1,2,3]))
console.log(myFunc(null))


interface Student{
    name:string,
    surname:string,
    lastname?:string
}
interface Group{
    nameGroup:string,
    kurs:number,
    students:Student[]
}
interface Teacher{
    name:string,
    surname:string,
    lastname?:string,
    step?:string,
    group?:Group[]
}
function isMyStudent(s: Student, t: Teacher):boolean{
    let flag:boolean=false
    if(t.group)
    {
        t.group.forEach(g=>{
            if (g.students.filter(e=>e == s).length>0)
                flag= true;
        })
    }
    return flag
}

let st:Student={name:"Vova",surname:"Kocha"}
let st2:Student={name:"V",surname:"k"}
let gr:Group = {kurs: 5, nameGroup: "rr", students:[st2,st]}
let gr1:Group = {kurs: 1, nameGroup: "Ggt", students:[st2]}
let te:Teacher = {name:"44",surname:"g",group:[gr]}
let te1:Teacher = {name:"44",surname:"g"}
console.log(isMyStudent(st,te))

function getName(o:Student|Teacher|Group):string{
    if("nameGroup" in o){
        return o.nameGroup
    }
    return o.name+" "+o.surname+" "+(o.lastname? o.lastname:"")

}

console.log(getName(gr))
console.log(getName(st))


function studentCount(o: Teacher | Group):number{
    if("group" in o){
        let sum:number=0
        o.group?.forEach(e=>sum+=e.students.length)
        return sum
    }
    if ("students" in o)
        return o.students.length
    return 0
}

console.log(studentCount(te))
console.log(studentCount(te1))
console.log(studentCount(gr))

function selectGroup(g1: Group, g2: Group, s: Student) : void{
    if (g1.students.length<g2.students.length){
        g1.students.push(s)
    }else g2.students.push(s)
}

console.log(gr)
console.log(gr1)
selectGroup(gr,gr1,st)
console.log(gr)
console.log(gr1)

interface Attribute {
    name: string;
    value: string;
}

function createElementWithAttrs(tag: string, args?: Attribute[], inner?: string): HTMLElement {
    const el = document.createElement(tag);
    if (args)
    for (const attr of args) {
        if (attr.name && attr.value) {
            el.setAttribute(attr.name, attr.value);
        }
    }

    if (inner) {
        el.innerHTML = inner;
    }

    return el;
}
const form = document.querySelector('form');
    if(form)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let element:HTMLElement|null=null
        const tag = form.tag.value;
        let clazz:Attribute = {name:"class" ,value:form.class.value}
        let id:Attribute = {name:"id" ,value:form.id.value}
        let href:Attribute = {name:"href" ,value:form.href.value}
        let target:Attribute = {name:"target" ,value:form.target.value}
        let method:Attribute = {name:"method" ,value:form.method.value}
        let type:Attribute = {name:"type" ,value:form.type.value}
        let action:Attribute = {name:"action" ,value:form.action.value}
        let name:Attribute = {name:"name" ,value:form.name.value}
        let value:Attribute = {name:"value" ,value:form.value.value}
        let text:string = form.text.value
        switch (tag) {
            case "div":
                element = createElementWithAttrs(tag,[clazz,id],text);
                break
            case "a":
                element = createElementWithAttrs(tag,[clazz,id,href,target],text);
                break
            case "form":
                element = createElementWithAttrs(tag,[clazz,id,method,action],text);
                break
            case "input":
                element = createElementWithAttrs(tag,[clazz,id,type,name,value]);
                break
            case "h1":
                element = createElementWithAttrs(tag,[clazz,id],text);
                break

        }
        document.body.appendChild(element);
});
const tagSelect:HTMLSelectElement|null = document.getElementById("tag") as HTMLSelectElement ,
    hrefGroup: HTMLElement|null = document.getElementById("href-group"),
    targetGroup: HTMLSelectElement|null = document.getElementById("target-group") as HTMLSelectElement,
    methodGroup: HTMLSelectElement|null = document.getElementById("method-group") as HTMLSelectElement,
    actionGroup: HTMLElement|null = document.getElementById("action-group"),
    typeGroup: HTMLSelectElement|null = document.getElementById("type-group") as HTMLSelectElement,
    nameGroup: HTMLElement|null = document.getElementById("name-group"),
    valueGroup: HTMLElement|null = document.getElementById("value-group"),
    textGroup: HTMLElement|null = document.getElementById("text-group");
if(tagSelect && hrefGroup && targetGroup && methodGroup && actionGroup && typeGroup && nameGroup && valueGroup && textGroup)
    tagSelect.addEventListener("change", () => {
        if (tagSelect.value === "div") {
            hrefGroup.style.display = "none";
            targetGroup.style.display = "none";
            methodGroup.style.display = "none";
            actionGroup.style.display = "none";
            typeGroup.style.display = "none";
            nameGroup.style.display = "none";
            valueGroup.style.display = "none";
            textGroup.style.display = "block";
        }
        if (tagSelect.value==="a"){
            methodGroup.style.display = "none";
            actionGroup.style.display = "none";
            typeGroup.style.display = "none";
            nameGroup.style.display = "none";
            valueGroup.style.display = "none";
            hrefGroup.style.display = "block";
            targetGroup.style.display = "block";
            textGroup.style.display = "block";
        }
        if (tagSelect.value==="form"){
            methodGroup.style.display = "block";
            actionGroup.style.display = "block";
            typeGroup.style.display = "none";
            nameGroup.style.display = "none";
            valueGroup.style.display = "none";
            hrefGroup.style.display = "none";
            targetGroup.style.display = "none";
            textGroup.style.display = "block";
        }
        if (tagSelect.value==="input"){
            methodGroup.style.display = "none";
            actionGroup.style.display = "none";
            typeGroup.style.display = "block";
            nameGroup.style.display = "block";
            valueGroup.style.display = "block";
            hrefGroup.style.display = "none";
            targetGroup.style.display = "none";
            textGroup.style.display = "none";
        }
        if (tagSelect.value==="h1"){
            methodGroup.style.display = "none";
            actionGroup.style.display = "none";
            typeGroup.style.display = "none";
            nameGroup.style.display = "none";
            valueGroup.style.display = "none";
            hrefGroup.style.display = "none";
            targetGroup.style.display = "none";
            textGroup.style.display = "block";
        }
    });