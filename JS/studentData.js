import Navbar from "../Components/navbar.js";

document.getElementById("Navbar").innerHTML = Navbar();

let data = JSON.parse(localStorage.getItem("data")) || [];

 // search
const handleSearch = (e) => {
  e.preventDefault();

  let searchInput = document.getElementById("search").value;

  let filteredData = data.filter((ele) =>
      ele.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  Uimaker(filteredData);
};

document.getElementById("searchBtn").addEventListener("click", handleSearch); 


const Uimaker = ((list) => {

    document.getElementById("studentList").innerHTML = "";

    list.map((ele,index) => {
        
      const div = document.createElement("div"); 
      div.className = "studentList";


      let img = document.createElement("img");
      img.className="studentIMG"
      img.src = ele.img || "Img not found";

      let name = document.createElement("h3");
      name.innerHTML ="Name :  " + ele.name;
      
      let grid = document.createElement("h3");
      grid.innerHTML = "Grid :  " + ele.grid;

      let course = document.createElement("h3");
      course.innerHTML = "Course :  " + ele.course;
      // course.innerHTML = ele.course || "No Course";  

        let fees = document.createElement("h3");
        fees.innerHTML = "Fees :  " + ele.fees;
        // fees.innerHTML = ele.fees || "No Fees";  
      
     let deleteBtn = document.createElement("button");
     deleteBtn.innerHTML = 'delete'

     deleteBtn.onclick = ()=>{
      data.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(data));
      Uimaker(data);
      
     }
        div.append(img, name, grid, course,fees,deleteBtn);
        document.getElementById("studentList").append(div);

    });

});


// filter 

const handleFilter = (print) => {
  console.log(print);
    let filteredData = data.filter((ele) => ele.course === print);
    Uimaker(filteredData);
}

document.getElementById("filter").addEventListener("change", (event) => {
  handleFilter(event.target.value);
});


// sortby
const handleSort = (print) => {
  console.log(print);
  
    if (print == "lth") {
      console.log(data);
      
      let comp = data.sort((a, b) =>  (a.fees) -  (b.fees));
      console.log(comp);
      
      Uimaker(comp);
    } 
    else if (print == "htl") {
      console.log(data);
      let comp = data.sort((a, b) =>  (b.fees) -  (a.fees));
      console.log(comp);
      Uimaker(comp);
    }
  };

  document.getElementById("sort").addEventListener("change", (event) => {
    handleSort(event.target.value);
  });


Uimaker(data);


