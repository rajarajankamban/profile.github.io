setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    document.getElementById('main').classList.add('active')
},1500)