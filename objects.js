let favoriteMovie ={
    title: "Exhuma",
    genre: "Horror",
    year: "2024",
    mainCharacters:["go eun", "Ama", "rah"],
    describeMovie: function(){
        console.log(this.title + this.genre + this.year)
    }
    
}
favoriteMovie.describeMovie();
favoriteMovie.director = Amarachi;
console.log(favoriteMovie.director)


const student = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      console.log( this.firstName + " " + this.lastName)
    }
  }
  student.age = 20;
  student.major = data-science;