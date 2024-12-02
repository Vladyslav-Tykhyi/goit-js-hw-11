// У файлі pixabay-api.js зберігай функції для HTTP-запитів

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const API_URL ='https://pixabay.com/api/'

const API_KEY ='47362055-4c26e776b4d447c79837e3674'

const form = document.querySelector(".form")
const btn = document.querySelector(".btn-js")
const input = document.querySelector(".form-input")



export const btnEvent = btn.addEventListener("click", searchClick)

function searchClick(event){
  event.preventDefault()

  if (!input.value.trim()) {
    iziToast.show({
      message: "Input cannot be empty. Please enter a search term!"
    });
    return;
  }
  
  const params = new URLSearchParams({
    key: API_KEY,
    q: input.value
  })
  // console.log(params.toString());
  
  fetch(`${API_URL}?${params}`)
    .then(response => {
    if(!response.ok){
      throw new Error("Sorry, there are no images matching your search query. Please try again!")
    }
    return response.json()
  })
    .then(data =>{
      if (data.hits.length === 0) {
        throw new Error("Sorry, no results found for your query. Please try another search term.");
      }
      console.log(data);
    }
    )
    .catch(err => {
      iziToast.show({
            message: `${err.message}`
        });
    })
    .finally(() => {
      input.value = ""
    })
}