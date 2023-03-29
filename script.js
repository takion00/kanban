const cards = document.querySelectorAll(".card-todo")

const dropzone = document.querySelectorAll(".all-todos")


cards.forEach(card => {
  card.addEventListener("dragstart", function(){
    dropzone.forEach(zone => {
      zone.classList.add("highlight")
    })

    this.classList.add("is-dragging")
  })

  // card.addEventListener("drag", () => {
  //   console.log("drag")
  // })

  card.addEventListener("dragend", function() {
    dropzone.forEach(zone => {
      zone.classList.remove("highlight")
    })

    this.classList.remove("is-dragging")
  })
})



dropzone.forEach(zone => {
  zone.addEventListener("dragover", function(e)  {
    const myCard = document.querySelector(".is-dragging")
    console.log(myCard)

    this.appendChild(myCard)
    this.classList.add("over")
  })
  
  zone.addEventListener("drop", function()  {

    this.classList.remove("over")
  })
  
  zone.addEventListener("dragleave", function() {
    this.classList.remove("over")
  })
  
})