'use strict'
var frm=document.forms.MyForm;

var sitename=frm.elements.SiteName;

var siteurl=frm.elements.SiteUrl;

var date=frm.elements.Date;

var visitors=frm.elements.Visitors;

var email=frm.elements.Email;

var division=frm.elements.Division;

var paym = frm.elements.Payment;

var votes=frm.elements.Votes;

var description=frm.elements.Description;

var user=frm.elements.User;

function one(bool){/////////////////////////////////////////////////название сайта
  var sitenameValue=sitename.value.trim();
    if(!sitenameValue){
      sitename.parentElement.className='form-control fail';
      document.getElementById('siteNameError').innerHTML="Вы не заполнили название сайта";   
    if(bool){
      sitename.focus()
    };
    if (bool){
      document.getElementById("siteNameError").scrollIntoView();
    }
      return false
    }else{
      sitename.parentElement.className='form-control success';
      document.getElementById('siteNameError').innerHTML="";
      return true
    }
}

function two(bool){/////////////////////////////////////////////////////////url сайта
  var siteurlValue=siteurl.value.trim();
    if(!siteurlValue){
      siteurl.parentElement.className='form-control fail';
      document.getElementById('siteUrlError').innerHTML="Вы не заполнили URL сайта";
     if(bool){
      siteurl.focus()
     };
      return false
    }else{
      siteurl.parentElement.className='form-control success';
      document.getElementById('siteUrlError').innerHTML="";
      return true
    }
}

function three(bool){/////////////////////////////////////////////////////дата запуска сайта
  var currentDate = new Date();
  var dd=currentDate.getDate();
  var mm = currentDate.getMonth()+1;
  var yyyy = currentDate.getFullYear();
    currentDate = yyyy + '-' +"0"+ mm + '-' +dd;////////дата не должна быть равна сегодняшнему дню
  var dateValue=date.value;
    if(!dateValue){
      date.parentElement.className='form-control fail';
      document.getElementById('dateError').innerHTML="Вы не отметили дату";
    if(bool){
        date.focus()
    };
      return false
    }else if(dateValue==currentDate||dateValue>currentDate){
      date.parentElement.className='form-control fail';
      document.getElementById('dateError').innerHTML="Дата не может быть равна сегодняшнему дню или быть больше его";
     if(bool){
      date.focus()
     };

    }else{
      date.parentElement.className='form-control success';
      document.getElementById('dateError').innerHTML="";
    return true
    }
}

function four(bool){////////////////////////////////////////////////////////////посетителей в сутки
  var visitorsValue=visitors.value.trim();
  if(!visitorsValue){
    visitors.parentElement.className='form-control fail';
    document.getElementById('visitorsError').innerHTML="Вы не отметили количество пользователей";
    if(bool){
      visitors.focus()
    };
    return false
  }else if(visitorsValue<0){///////////////////////////если количество пользователей менее 0 в сутки
     visitors.parentElement.className='form-control fail';
    document.getElementById('visitorsError').innerHTML="Вы отметили неверное количество пользователей";
    if(bool){
      visitors.focus()
    }
       return false
  }else{
    visitors.parentElement.className='form-control success';
    document.getElementById('visitorsError').innerHTML="";
    return true
  }
}

function five(bool){//////////////////////////////////////////////////////////e-mail
  function checkEmail(email){
  return /@/.test(email);///////////////////////////имейл должен содержать @
  }
var emailValue=email.value.trim();
  if(!emailValue||!checkEmail(emailValue)){
    email.parentElement.className='form-control fail';
    document.getElementById('emailError').innerHTML="Вы ввели некорректный e-mail";
   if(bool){
       email.focus()
    };

  return false
  }else{
    email.parentElement.className='form-control success';
    document.getElementById('emailError').innerHTML="";
    return true
  } 
}


function six(bool){/////////////////////////////////////////////////рубрика каталога
  var divisionValue=division.value;
  if(!divisionValue||divisionValue=='1'){///////выбирать категорию "здоровье" нельзя
    document.getElementById('divisionError').innerHTML="Вы выбрали неверную рубрику";//////
     if(bool){
      division.focus()
     };
    return false
  }else{
    document.getElementById('divisionError').innerHTML="";
    return true
  }
}

function seven(bool) {
var payment = frm.elements.Payment;
var paymentValue = payment.value;
  if(paymentValue == ""){
    document.getElementById("paymentError").innerHTML = "Вы не отметили тип размещения";
    return false;
  }else if(paymentValue == "1") {
    document.getElementById("paymentError").innerHTML ="Бесплатное размещение недоступно";
   return false;
  }else{
    document.getElementById("paymentError").innerHTML = "";
    return true;
  }
}

function eight(bool){//////////////////////////////////////////////////////разрешить отзывы
  var votesValue=votes.checked;
  if(!votesValue){
    votes.parentElement.className='form-control fail';
    document.getElementById('votesError').innerHTML="Вы не разрешили отзывы";
    if(bool){
     votes.focus()
    };
    return false
  }else{
    votes.parentElement.className='form-control success';
    document.getElementById('votesError').innerHTML="";
    return true
  }
}


function nine(bool){/////////////////////////////////////////////////////////////////описание
  var descriptionValue=description.value.trim();
  if(descriptionValue==""){
    description.parentElement.className='form-control fail';
    document.getElementById('descriptionError').innerHTML="Вы не заполнили описание";
    if(bool){
     description.focus()
    };
  return false
  }else{
    description.parentElement.className='form-control success';
    document.getElementById('descriptionError').innerHTML="";
    return true
  }
  
}

function ten(bool){
var userValue=user.value.trim();
  if(!userValue){
      user.parentElement.className='form-control fail';
      document.getElementById('userNameError').innerHTML="Вы не заполнили имена разработчиков";   
    if(bool){
      user.focus()
    };
      return false
    }else{
      user.parentElement.className='form-control success';
      document.getElementById('userNameError').innerHTML="";
      return true
    }
}
///////////////////////////////////////////////////////////////
frm.onsubmit=function approve(EO){
EO=EO||window.event;
  var trueAnswer=true;
    trueAnswer= nine(true)&&trueAnswer
    trueAnswer= eight(true)&&trueAnswer
    trueAnswer= seven(true)&&trueAnswer
    trueAnswer= six(true)&&trueAnswer
    trueAnswer= five(true)&&trueAnswer
    trueAnswer= four(true)&&trueAnswer
    trueAnswer = three(true)&&trueAnswer
    trueAnswer = two(true)&&trueAnswer
    trueAnswer = one(true)&&trueAnswer
    trueAnswer= ten(true)&&trueAnswer
if(!trueAnswer){
EO.preventDefault();
  }
}
/////////////////////////////////////////////////////////////////////////////////

sitename.addEventListener('blur',answer1)
function answer1(EO){
 EO=EO||window.event;
 return one(false)
}

siteurl.addEventListener('blur',answer2)
function answer2(EO){
 EO=EO||window.event;
 return two(false)
}

date.addEventListener('blur',answer3)
function answer3(EO){
 EO=EO||window.event;
 return three(false)
}

visitors.addEventListener('blur',answer4)
function answer4(EO){
 EO=EO||window.event;
 return four(false)
}

email.addEventListener('blur',answer5)
function answer5(EO){
 EO=EO||window.event;
 return five(false)
}

division.addEventListener('change',answer6)
function answer6(EO){
 EO=EO||window.event;
 return six(false)
}

payment.addEventListener('change',answer7)
function answer7(EO){
 EO=EO||window.event;
 return seven(false)
}

votes.addEventListener('change',answer8)
function answer8(EO){
 EO=EO||window.event;
 return eight(false)
}

description.addEventListener('blur',answer9)
function answer9(EO){
 EO=EO||window.event;
 return nine(false)
}

user.addEventListener('blur',answer10)
function answer10(EO){
 EO=EO||window.event;
 return ten(false)
}
