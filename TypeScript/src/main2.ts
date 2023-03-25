import './style.css'

interface Film{
    name:string,
    nameDir:string,
    rate:number,
    yer:number,
    time:number,
    otz?:string

}
let a:Film[]=[
    {
        name:" 1999",
        nameDir:"122",
        rate:8,
        yer:8,
        time:123
    },
    {
        name:" 1111",
        nameDir:"122",
        rate:8,
        yer:8,
        time:123
    }
    ]
localStore()
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form  class="form">
    <div class="lala">
    <div class="la">
      <h2>Название</h2>
     <input type="text" value="" name="text" class="text">    
    </div>
    <div class="la">
      <h2>Год релиза</h2>
      <div class="of">
        <input type="number" value="" name="year" class="year">
      </div>
    </div>
    <div class="la">
      <h2>Режжисер</h2>
      <input list="listDirector" name="nameDirector" class="list dierem">
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
      <h2>Рейтинг</h2>
     <input type="number" value="" name="rate" class="rate">    
    </div>
    <div class="la">
      <h2>Время просмотра</h2>
      <input type="number" value="" name="time" class="time">
    </div>
    </div>
    
    <button type="reset" class="reset resetbtn">Очистить</button> 
    <button type="submit" >Добавить Фильм</button>
  </form>
  
    
         
       
    
    <div class="film">
        
    </div>
  </div>
`
const form = document.querySelector('form');
if(form)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name:string = form.text.value;
        let year:number = form.year.value;
        let nameDirector:string = form.nameDirector.value;
        let rate:number = form.rate.value;
        let time:number = form.time.value;
        a.push({  name:name,nameDir:nameDirector,rate:rate,yer:year,time:time})
        let k= document.querySelector(".film") as HTMLElement
        k.innerHTML=""
        randList(a,k)
        localStorage.setItem("list",JSON.stringify(a))
    })

function randList(list:Film[],el:HTMLElement):void
{
    list.forEach((i,k)=>{
        let newdiv:HTMLDivElement = document.createElement('div')
        newdiv.innerHTML=`
            <div class="card" id="${k}">
                <div class="lines"></div>
                <div class="imgbox">
                    <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450" alt="">
                </div>
                <div class="content">
                    <div class="details">
                    <h2>${i.name}</h2>
                    <p>Lorem erijgejg egergiuheriguh ioeurghoiuegoieh goeirg hoierbg</p>
                    <p>Lorem erijgejg egergiuheriguh ioeurghoiuegoieh goeirg hoierbg</p>
                    <p>Lorem erijgejg egergiuheriguh ioeurghoiuegoieh goeirg hoierbg</p>
                    <p>1111111111111111111111111111111111</p>
                    <p>11111111111111111h erth rth 11111111111111111</p>
                    <p>11111111111rth rh11111111111111111111111</p>
                    <p>1111111111111e eerherheh 111111111111111111111</p>
                    <p>111111111rth rh 1111111111th rth 111111111111111</p>
                    <p>1111111111111111111111111111111111</p>
                    <p>1111111111 rth rth rth rth r1111111111111111</p>
              
                    </div>
            <div>
        `
        el.appendChild(newdiv)
        // <h2>${i.name}</h2>
        // <h2>${i.nameDir}</h2>
        // <h2>${i.rate}</h2>
        // <h2>${i.yer}</h2>
        // <h2>${i.time}</h2>
        // let f = i.genre
        // let newdiv = document.createElement('div')
        // newdiv.className=`plakat${k}`
        // newdiv.classList.add('blok')
        // newdiv.classList.add('element-animation')
        // let newEl = document.createElement('img')
        // let newEll = document.createElement('p')
        // let Name = document.createElement('h2')
        // let rate = document.createElement('h2')
        // let time = document.createElement('h2')
        // newEll.innerHTML=f
        // Name.innerHTML=i.name
        // rate.innerHTML=i.rate
        // time.innerHTML=i.time+' мин'
        // newEl.setAttribute('src',i.url)
        // newEl.classList.add('set')
        // let tem = localStorage.getItem('tem')
        // if(tem==='0') newEll.classList.add('setting')
        // else newEll.classList.add('settingSnow')
        // newEll.id='setting'
        // rate.classList.add('rateVisible')
        // time.classList.add('timeVisible')
        // Name.classList.add('nameHig')
        // el.appendChild(newdiv)
        // let ell=document.getElementsByClassName(`plakat${k}`)
        // ell[0].appendChild(newEl)
        // ell[0].appendChild(Name)
        // ell[0].appendChild(newEll)
        // ell[0].appendChild(rate)
        // ell[0].appendChild(time)
    })
}
randList(a,document.querySelector(".film") as HTMLElement)

function localStore()
{
    if(localStorage.length!==0)
    {
        a =JSON.parse(localStorage.getItem("list") as string) as Film[]
    }
    else
    {
        localStorage.setItem("list",JSON.stringify(a))
    }
}

