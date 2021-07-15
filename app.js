var name = prompt("Heyy What Is Your name ?")

alert("Heey, wlecome To My Modest Website " + name)

 
var Favorit_Series = prompt("What is you Favorit_Series ?")
var Favorit_Movies = prompt("What is your Favorit_Movies ?")
if (Favorit_Series == "Peaky Blinders") {
  document.write(
    "<div>" + "<h3>" + Favorit_Series + "</h3>"
   + "<img  src='https://upload.wikimedia.org/wikipedia/en/e/e8/Peaky_Blinders_titlecard.jpg'")
}

else if (Favorit_Series == "The Queen's Gambit") {
    document.write(
      "<div>" + "<h3>" + Favorit_Series + "</h3>"
      + "<img  src='https://comicyears.com/wp-content/uploads/2020/10/The-Queens-Gambit-Review-Netflix-tv-series.jpg'")
}

else {
        alert('we dont have this Show')
      }

if (Favorit_Movies == "God Father") {
    document.write(
      "<div>" + "<h3>" + Favorit_Movies + "</h3>"
      + "<img  src='https://wallpaperaccess.com/full/1107715.jpg'" + "</div>")
}
 

else if (Favorit_Movies == "The Social Network’ ") {
      document.write(
        "<div>" + "<h3>" + Favorit_Movies + "</h3>"
        + "<img  src='https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg?quality=90&auto=webp'" + "</div>")
}

else {
        alert('we dont have this Show')
      }
 