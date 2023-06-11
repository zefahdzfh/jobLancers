// -----typed.js-----



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyB9fVvFnTIcuBz-0iZoWbblq-Inr9R7b-IfuwrNYc1IHkSyNfsEjDp-PwVBQGPc0GkWw/exec'
  const form = document.forms['contact-us']

  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
              form.reset()
              alert("Your Message send succesfully ")
              console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
  })
  function Menu(e) {
      let list = document.querySelector('ul');
      e.name === 'menu' ? (e.name = "close", list.classList.
          add('top-[100px]'), list.classList.add('opacity-100'))
          : (e.name = "menu", list.classList.remove('top-[100px]'),
              list.classList.remove('opacity-100'))
  }


  // const imgDiv = document.querySelector('#userImg');
  // const img = document.querySelector('#photo');
  // const file = document.querySelector('#file')
  // const upload = document.querySelector('#upload');

  // file.addEventListener('change',function(){
  //     const chosedfile = this.file[0];
  //     if(chosedfile){
  //         const reader = new FileReader();

  //         reader.addEventListener('load', function(){
  //             img.setAttribute('src' , reader.result);
  //         })
  //     reader.readAsDataURL(chosedfile);
  //     }
  // })




  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');

  darkToggle.addEventListener('click', function () {
      if (darkToggle.checked) {
          html.classList.add('dark');
          localStorage.theme = 'dark';
      } else {
          html.classList.remove('dark');
          localStorage.theme = 'light';
      }
  });

  window.onscroll = function () {
      menu()
      dark()
  };

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadbtn = document.querySelector('#uploadbtn');


file.addEventListener('change', function(){

  const choosedfile = this.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', function(){
      img.setAttribute('src', reader.result);
  });

  reader.readAsDataURL(choosedfile)

});

  function menu() {
      if (document.documentElement.scrollTop > 650) {
          document.getElementById("navbar").classList.add("md:bg-black")
          document.getElementById("navbar").classList.remove("md:bg-transparent")
          document.getElementById("navbar").classList.add("md:w-screen")
          document.getElementById("navbar").classList.remove("md:w-full")
          document.getElementById("navbar").classList.add("md:pl-10")
          document.getElementById("navbar").classList.remove("md:pl-0")
          document.getElementById("navbar").classList.add("md:pr-10")
          document.getElementById("navbar").classList.remove("md:pr-0")
          document.getElementById("navbar").classList.remove("md:border-b")
      } else {
          document.getElementById("navbar").classList.remove("md:bg-black")
          document.getElementById("navbar").classList.add("md:bg-transparent")
          document.getElementById("navbar").classList.remove("md:w-screen")
          document.getElementById("navbar").classList.add("md:w-full")
          document.getElementById("navbar").classList.remove("md:pl-10")
          document.getElementById("navbar").classList.add("md:pl-0")
          document.getElementById("navbar").classList.remove("md:pr-10")
          document.getElementById("navbar").classList.add("md:pr-0")
          document.getElementById("navbar").classList.add("md:border-b")
      }
  }

  function dark(){
      if (document.documentElement.scrollTop > 100) {
          document.getElementById("darkmode").classList.add("block")
          document.getElementById("darkmode").classList.remove("hidden")
      } else {
          document.getElementById("darkmode").classList.remove("block")
          document.getElementById("darkmode").classList.add("hidden")
      }
  }

  $(window).on('load', function () {

  $('.spin-wrapper').fadeOut();

  $(setTimeout(() => {

      }, 10))
      });
  