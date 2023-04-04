import './style.css'

interface Film{
    name:string,
    nameDir:string,
    rate:number,
    yer:number,
    time:number,
    otz?:string,
    url?:string,
    rateOtz:number,
    date:Date

}
let a:Film[]=[
    {
        yer: 2022,
        url:"https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/731c4031-7389-44f4-8c15-f9f4e3b0ed90/300x450",
        name:"Человек-паук: Нет пути домой",
        rate:8.1,
        time:148,
        nameDir:"Джон Уоттс",
        rateOtz:0,
        date:new Date("2023-03-25")
    },
    {
        yer: 2021,
        url:"https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f26e3e51-1d5f-4574-aa75-0ae132f194c2/300x450",
        name:"Красавица и дракон",
        rate:7.2,
        time:121,
        nameDir:"Мамору Хосода",
        rateOtz:0,
        date:new Date("2023-03-25")
    },
    {
        yer: 2016,
        url:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e849937d-99d7-418f-bbaa-0a7e7cfff385/300x450",
        name:"Твоё имя",
        rate:8.4,
        time:110,
        nameDir:"Макото Синкай",
        rateOtz:0,
        date:new Date("2023-03-25")
    }
    ]
function parseDate(input:string):Date {
    let parts = input.match(/(\d+)/g);
    // @ts-ignore
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
localStore()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form  class="form">
    <div class="lala">
    <div class="la">
      <h2>Название</h2>
     <input type="text" value="" name="text" class="text" required>    
    </div>
    <div class="la">
      <h2>Год релиза</h2>
      <div class="of">
        <input type="number" value="" name="year" class="year">
      </div>
    </div>
     <div class="la">
      <h2>Ссылка на постер</h2>
      <div class="of">
        <input type="text" value="" name="url" class="url" >
      </div>
    </div>
    <div class="la">
      <h2>Режжисер</h2>
      <input list="listDirector" name="nameDirector" class="list dierem" required>
      <datalist id="listDirector">
        <option value="Фрэнк Дарабонт"></option>
        <option value="Роберт Земекис"></option>
        <option value="Питер Джексон"></option>
        <option value="Оливье Накаш"></option>
        <option value="Роджер Аллерс"></option>
        <option value="Кристофер Нолан"></option>
        <option value="Эндрю Стэнтон"></option>
        <option value="Хаяо Миядзаки"></option>
        <option value="Ридли Скотт"></option>
        <option value="Мэтт Ривз"></option>
        <option value="Ден кван"></option>
        <option value="Рубен Фляйшер"></option>
        <option value="Рид Каролин"></option>
        <option value="Сергей Моурицкий"></option>
        <option value="Джон Уоттс"></option>
        <option value="Мамору Хосода"></option>
        <option value="Макото Синкай"></option>
        <option value="Доми Ши"></option>
      </datalist>
    </div>
    <div class="la">
      <h2>Рейтинг(от 0 до 10)</h2>
     <input type="number" value="" name="rate" class="rate"  max="10" min="0" required>    
    </div>
    <div class="la">
      <h2>Время просмотра</h2>
      <input type="number" value="" name="time" class="time" required>
    </div>
    </div>
    
    <button type="reset" class="reset resetbtn">Очистить</button> 
    <button type="submit" >Добавить Фильм</button>
  </form>
  <div class="filtr">
      <h2>Сортировка</h2>
      <div class="btnfil">
          <button id="abz">По алфавиту</button>
          <button id="rateOtz">По оценки отзыва</button>
          <button id="date">По дате добавления</button>
      </div>
   </div>
   <br>
   <form id="fo">
   <div>
    <label>
        Название:
        <input type="text" name="title">
      </label>
      <br>
      <label>
        Год выпуска:
        <input type="number" name="year">
      </label>
      <br>
      <label>
        Режиссер:
        <input type="text" name="director">
      </label>
      <br>
      <label>
        Рэйтинг:
        <input type="number" name="rate">
      </label>
    </div>
  <br>
  <button type="submit">Фильтровать</button>
  <button type="reset">Очистить</button>
</form>
    <div class="film"></div>
    <div class="modal" id="myModal">
        <div class="modalContent">
            <span class="close">X</span>
            <form  class="formi">
                <div class="la">
                  <h2>Отзыв: </h2>
                  <textarea  type="text" value="" name="otz" class="otz" required></textarea>
                </div>
                <div class="la">
                  <h2>Оценка от 0 до 10</h2>
                  <input type="number" value="0" name="tar" class="tar" max="10" min="0" required>
                </div>
                <br>
                <button type="submit" class="mod">Прикрепить</button>
            </form>
        </div>
    </div>
  </div>
`

const form = document.querySelector('form');
if(form)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name:string = form.text.value;
        let url:string = form.url.value;
        let year:number = form.year.value;
        let nameDirector:string = form.nameDirector.value;
        let rate:number = form.rate.value;
        let time:number = form.time.value;
        a.push({  name:name,nameDir:nameDirector,rate:rate,yer:parseInt(String(year)),time:time,url:url,rateOtz:0,date: new Date()})
        let k= document.querySelector(".film") as HTMLElement
        k.innerHTML=""
        randList(a,k)
        localStorage.setItem("list",JSON.stringify(a))
    })

function randList(list:Film[],el:HTMLElement):void
{
    list.forEach((i,k)=>{
        if(i){
            let newdiv:HTMLDivElement = document.createElement('div')
            newdiv.innerHTML=`
            <div class="card" id="${k}">
                <div class="lines"></div>
                <div class="imgbox">
                   <img src="${i.url}" alt="">
                </div>
                <div class="content">
                    <div class="details">
                    <h2>${i.name}</h2>
                    <p>Режисер: ${i.nameDir}</p>
                    <p>Рейтинг: ${i.rate}</p>
                    <p>Год релиза: ${i.yer}</p>
                    <p>Время просмотра: ${i.time}</p>
                    <p>----------------------------------</p>
                    <p>Отзыв: ${i.otz?i.otz:"Отсутствует =("}</p>
                    <p>Оченка: ${i.rateOtz?i.rateOtz:"Отсутствует =("}</p>
                    </div>
                    <div class="btn">
                        <button class="resetbtn model" id="${k}" >Добавить отзыв</button>
                        <button class="resetbtn rem" id="${k}" >Удалить</button>
                    </div>
                    
            <div>
        `

            el.appendChild(newdiv)
        }

    })
    remove()
    modal()

}
randList(a,document.querySelector(".film") as HTMLElement)




function localStore()
{
    if(localStorage.length!==0)
    {
        a =JSON.parse(localStorage.getItem("list") as string) as Film[]
        a.forEach(el=>{
            el.date=parseDate(el.date.toString())
        })
    }
    else
    {
        localStorage.setItem("list",JSON.stringify(a))
    }
}

function remove():void{
    let  rem:NodeListOf<HTMLElement> =document.querySelectorAll(".rem")
    rem.forEach((el)=>{
        el.addEventListener("click",()=>{
            let id:number= +el.id;
            let isAdmin:boolean = confirm("Вы действительно хотите удалить фильм?");
            if (isAdmin){
                a.splice(id,1)
                localStorage.setItem("list",JSON.stringify(a))
                let k= document.querySelector(".film") as HTMLElement
                k.innerHTML=""
                randList(a,k)
            }

        })
    })
}
let flagId:number=1;
function modal():void{
    let  rem:NodeListOf<HTMLElement> =document.querySelectorAll(".model")
    rem.forEach((el)=>{
        el.addEventListener("click",()=>{
            flagId= +el.id;
            let modal:HTMLElement|null = document.querySelector("#myModal")
            if(modal)
                modal.style.display ="block"
        })
    })
}
let model:HTMLElement|null = document.querySelector("#myModal")
let btnModal:HTMLElement|null = document.querySelector(".close")
if(btnModal)
    btnModal.addEventListener("click",()=>{
        if(model)
            model.style.display ="none"
    })
const formi:HTMLFormElement = document.querySelector('.formi') as HTMLFormElement;

    formi.addEventListener('submit', (event) => {
        event.preventDefault();
        let otz:string = formi.otz.value;
        let rateOt:number = formi.tar.value;
        if(model)
            model.style.display ="none"
        a[flagId].otz=otz;
        a[flagId].rateOtz= +rateOt;
        localStorage.setItem("list",JSON.stringify(a))
        let k= document.querySelector(".film") as HTMLElement
        k.innerHTML=""
        randList(a,k)
    })
function sortFilmsAlphabetically(movies: Film[]): Film[] {
    return movies.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
}
const btnSortedAlpha:HTMLElement =document.querySelector("#abz") as HTMLElement
    btnSortedAlpha.addEventListener("click",()=>{
        const sortedFilms = sortFilmsAlphabetically(a);
        let k= document.querySelector(".film") as HTMLElement
        k.innerHTML=""
        randList(sortedFilms,k)
    })
function sortFilmsRateOtz(movies: Film[]): Film[] {
    return movies.sort((a, b) => {
        if (a.rateOtz < b.rateOtz) {
            return 1;
        }
        if (a.rateOtz > b.rateOtz) {
            return -1;
        }
        return 0;
    });
}

const btnSortedRateOtz:HTMLElement =document.querySelector("#rateOtz") as HTMLElement
btnSortedRateOtz.addEventListener("click",()=>{
    let sortedFilms = sortFilmsRateOtz(a);
    console.log(sortedFilms)
    let k= document.querySelector(".film") as HTMLElement
    k.innerHTML=""
    randList(sortedFilms,k)
})

function sortFilmsDate(movies: Film[]): Film[] {
    return movies.sort((a, b) => b.date.getTime() - a.date.getTime());
}

const btnSortedDate:HTMLElement =document.querySelector("#date") as HTMLElement
btnSortedDate.addEventListener("click",()=>{
    let sortedFilms = sortFilmsDate(a);
    console.log(sortedFilms)
    let k= document.querySelector(".film") as HTMLElement
    k.innerHTML=""
    randList(sortedFilms,k)
})



function filterMovies(movies: Film[], year: number | null, rating: number | null, director: string | null, name: string | null): Film[] {
    console.log(year,rating,director,name)
    return movies.filter(movie =>
        (year === null || movie.yer === year) &&
        (rating === null || movie.rate === rating) &&
        (director === null || movie.nameDir.toLowerCase().includes(director.toLowerCase())) &&
        (name === null || movie.name.toLowerCase().includes(name.toLowerCase()))
    );
}

const fo = document.querySelector('#fo') as HTMLFormElement;

fo.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(fo);
    const year = formData.get('year') as string;
    const rating = formData.get('rate') as string;
    const director = formData.get('director') as string;
    const name = formData.get('title') as string;

    const filteredMovies = filterMovies(a, year ? parseInt(year) : null, rating ? parseFloat(rating) : null, director ? director : null, name ? name : null);
    let k= document.querySelector(".film") as HTMLElement
    k.innerHTML=""
    randList(filteredMovies,k)
});