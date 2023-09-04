// elements
const content = document.getElementById('content_box');
const container = document.getElementById('container');
const secondPage = document.getElementById('second_page')

// forms
const form = document.querySelector('form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');

// modal
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// dark/light mode
const mode = document.getElementById('mode');

// come back
const back = document.getElementById('back');

// function
function boolean() {
    if(
        input1.value == 2 && input2.value == 4 && input3.value == 6
        && input4.value == 8 && input5.value == 10
    ){
        content.classList.add("d-none")
        container.classList.remove('bg_img')
        setTimeout(()=>{
            secondPage.classList.remove('d-none')   
            secondPage.classList.add('d-flex')
        },1000)
    }else if(
        input1.value == "" && input2.value == "" && input3.value == ""
        && input4.value == "" && input5.value == ""
    ){
        alert(`Javob kiritilmadi!`)
    }else if(
        input1.value == "" || input2.value == "" || input3.value == ""
        || input4.value == "" || input5.value == ""
    ){
        alert(`Qaysidir katak bo'sh qolgan!`)
    }else{
        modal.style.display = 'flex'
        closeBtn.addEventListener('click', ()=>{
            modal.style.display = 'none'
        })
        window.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.style.display = 'none'
            };
        });
    };
};

// form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    boolean();
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
});

// mode
mode.addEventListener('click', ()=>{
    container.classList.toggle('dark')
});

// come back
back.addEventListener('click', ()=>{
    window.location.reload()
});