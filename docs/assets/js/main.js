"use strict";const paletteClassList=document.querySelector(".preview__container").classList,checkPalette1=document.querySelector(".js-check1");function setPalette1(){paletteClassList.add("palette1"),paletteClassList.remove("palette2","palette3")}checkPalette1.addEventListener("click",setPalette1);const checkPalette2=document.querySelector(".js-check2");function setPalette2(){paletteClassList.add("palette2"),paletteClassList.remove("palette1","palette3")}checkPalette2.addEventListener("click",setPalette2);const checkPalette3=document.querySelector(".js-check3");function setPalette3(){paletteClassList.add("palette3"),paletteClassList.remove("palette1","palette2")}checkPalette3.addEventListener("click",setPalette3);const formData={},cardFields={fullname:document.querySelector(".js-text-name"),job:document.querySelector(".js-text-job"),emailAddress:document.querySelector(".js-mail"),telephone:document.querySelector(".js-number"),linkedin:document.querySelector(".js-linkedin"),github:document.querySelector(".js-github")},inputName=document.querySelector(".js-input-name"),inputJob=document.querySelector(".js-input-job"),inputEmail=document.querySelector(".js-input-mail"),inputPhone=document.querySelector(".js-input-phone"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),formButton=document.querySelector(".js-share"),textShare=document.querySelector(".js-textShare");function setData(e){const t=e.currentTarget.name,n=e.currentTarget.value;formData[t]=n,cardFields[t].innerHTML=e.currentTarget.value}function changeLinks(e){const t=e.currentTarget.name,n=e.currentTarget.value;formData[t]=n,cardFields[t].href=e.currentTarget.value}function validation(e){e.preventDefault(),inputName.value.length>1&&inputJob.value.length>1&&inputEmail.value.length>1&&inputPhone.value.length>1&&inputLinkedin.value.length>1&&inputGithub.value.length>1?(console.log("hola"),textShare.classList.remove("hidden"),formButton.classList.add("disabled")):alert("No has introducido ningún dato")}inputName.addEventListener("keyup",setData),inputJob.addEventListener("keyup",setData),inputEmail.addEventListener("keyup",changeLinks),inputPhone.addEventListener("keyup",changeLinks),inputLinkedin.addEventListener("keyup",changeLinks),inputGithub.addEventListener("keyup",changeLinks),formButton.addEventListener("click",validation);const resetElement=document.querySelector(".js-reset");function reset(){inputName.value="",inputJob.value="",inputEmail.value="",inputPhone.value="",inputLinkedin.value="",inputGithub.value="",cardFields.fullname.innerHTML="Nombre Apellido",cardFields.job.innerHTML="Front-end developer"}function changeToRed(){console.log("changeToRed"),document.querySelector(".preview__container").classList.add("palette1")}resetElement.addEventListener("click",reset),resetElement.addEventListener("click",setPalette1);const arrow1=document.querySelector(".js-arrow1"),arrow2=document.querySelector(".js-arrow2"),arrow3=document.querySelector(".js-arrow3"),collapsible=document.querySelector(".js-collapsed"),collapsibleHidden1=document.querySelector(".js-hidden1"),collapsibleHidden2=document.querySelector(".js-hidden2"),collapsibleHidden3=document.querySelector(".js-hidden3");function changeCollapsible1(){collapsibleHidden1.classList.toggle("hidden")}function changeCollapsible2(){collapsibleHidden2.classList.toggle("hidden")}function changeCollapsible3(){collapsibleHidden3.classList.toggle("hidden")}console.log(collapsibleHidden3),arrow1.addEventListener("click",changeCollapsible1),arrow2.addEventListener("click",changeCollapsible2),arrow3.addEventListener("click",changeCollapsible3);