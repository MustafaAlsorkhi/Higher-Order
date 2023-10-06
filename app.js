//q7

// let n = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
// n.forEach(namee=> {
//    console.log(namee);
// })



//q8 .. foreach

// function projectSeries() {
// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];

// let idTitle = [];
// newSeries.forEach(series=>{
//   idTitle.push({
//     idArry: series.id,
//     titleArry: series.title,
//   });
// });
// return idTitle;
// }
// const result = projectSeries();
// console.log(result);


//q9 .. map

// function projectSeries() {
// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];

// let idTitle = newSeries.map(series=>{
// return{
//     idArry: series.id,
//     titleArry: series.title }
//   ;

// });
// return idTitle;
// }
// const result = projectSeries();
// console.log(result);


//q10 .. filter

// function filterSeries() {
// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];



// let idTitle = newSeries.filter(series=>{
     
//     if(series.rating<5){
// return{
//     idArry: series.id,
//     titleArry: series.title,
// };
// }  
// });

// return idTitle;
// }

// const result = projectSeries();
// console.log(result);



//q11
// let hm = ["Java", "JavaScript", "Python", "C++", "PHP"];
// let tt = hm.reduce((series,mj)=>{

// if (mj.length > series.length )
// {
// return mj;
// }else{
//     return series;
// }

// });
// console.log(tt);



//q12
// function displayName (){
// let pokemonData =[
//     {
//       "game_index": 76,
//       "version": {
//         "name": "red",
//         "url": "https://pokeapi.co/api/v2/version/1/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "blue",
//         "url": "https://pokeapi.co/api/v2/version/2/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "yellow",
//         "url": "https://pokeapi.co/api/v2/version/3/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "gold",
//         "url": "https://pokeapi.co/api/v2/version/4/"
//       }
//     },
//     {
//         "game_index": 132,
//         "version": {
//           "name": "silver",
//           "url": "https://pokeapi.co/api/v2/version/5/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "crystal",
//           "url": "https://pokeapi.co/api/v2/version/6/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "ruby",
//           "url": "https://pokeapi.co/api/v2/version/7/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "sapphire",
//           "url": "https://pokeapi.co/api/v2/version/8/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "emerald",
//           "url": "https://pokeapi.co/api/v2/version/9/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "firered",
//           "url": "https://pokeapi.co/api/v2/version/10/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "leafgreen",
//           "url": "https://pokeapi.co/api/v2/version/11/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "diamond",
//           "url": "https://pokeapi.co/api/v2/version/12/"
//         }}
//     ];


//     let poke = pokemonData.reduce( (oq,jk)=>{
//         oq.push(jk.version.name);
//        return oq;
//     },[]);
//     return poke
// }
// const mm = displayName();
// console.log(mm);



//q13

// a)
//  var employee = {
//     firstName: 'Rawan',
//     sayHi: function(){
//         console.log("Hi Coach ! " + this.firstName);
//     }
// }

// employee.sayHi();                /// Hi Coach ! Rawan


// b)

// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true
//     },
//     printInfo: function(){
//         console.log("Car owner? " + this.hasCar);
//     }
// }

// employee.printInfo();     /// Car owner? undefined
                          // because you should write :   this.info.hasCar   then the output : Car owner? true 



// c)
// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true,
//         printAddress: function(){
//             return this.data.address;
//         },
//         data: {
//             address: "Zarqa"
//         }
//     },
// }

// employee.info.printAddress();  /// zarqa