$(document).ready(function() {
  // name filed
  $("#name").change(function() {
    var name = $("#name").val();
    if (name != "") {
      $(".alert_name").html("");
      localStorage.setItem("name", name);
      console.log(name);
    } else {
      localStorage.removeItem("name");
      $(".alert_name").html("This filed is required.");
    }
  });

  //email
  $("#email").change(function() {
    var email = $("#email").val();
    if (email != "") {
      $(".alert_email").html("");
      localStorage.setItem("email", email);
      console.log(email);
    } else {
      localStorage.removeItem("email");
      $(".alert_email").html("This filed is required.");
    }
  });

  //phone
  $("#phone").change(function() {
    var phone = $("#phone").val();
    if (phone != "") {
      $(".alert_phone").html("");
      localStorage.setItem("phone", phone);
      console.log(phone);
    } else {
      localStorage.removeItem("phone");
      $(".alert_phone").html("This filed is required.");
    }
  });

  // Github Profile
  $("#github").change(function() {
    var github = $("#github").val();
    if (github != "") {
      localStorage.setItem("github", github);
      console.log(github);
    } else {
      localStorage.removeItem("github");
    }
  });

  // Linked din
  $("#linkedin").change(function() {
    var linkedin = $("#linkedin").val();
    if (linkedin != "") {
      localStorage.setItem("linkedin", linkedin);
      console.log(linkedin);
    } else {
      localStorage.removeItem("linkedin");
    }
  });

  // Education section

  // add education
  $(".education").submit(function(e) {
    e.preventDefault();

    var existingEntries = JSON.parse(localStorage.getItem("education"));
    if (existingEntries == null) existingEntries = [];

    var institution = $("#institution").val();
    var degree = $("#degree").val();
    var specialization = $("#specialization").val();
    var startyear = $("#startyear").val();
    var endyear = $("#endyear").val();

    var data = {
      institution: institution,
      degree: degree,
      specialization: specialization,
      startyear: startyear,
      endyear: endyear
    };

    localStorage.setItem("education", JSON.stringify(data));
    existingEntries.push(data);
    localStorage.setItem("education", JSON.stringify(existingEntries));
  });


  // add project 

  $(".project_form").submit(function(e) {
    e.preventDefault();

    var existingEntries = JSON.parse(localStorage.getItem("project"));
    if (existingEntries == null) existingEntries = [];
    
    var titile = $("#title").val();
    var description = $("#description").val();
    var skill = $("#skills").val();

    var data = {
        titile: titile,
        description: description,
        skill: skill 
    }

    localStorage.setItem("project", JSON.stringify(data));
    existingEntries.push(data);
    localStorage.setItem("project", JSON.stringify(existingEntries));

  })

  


});















$(document).ready(function() {
  // showing education
  if (localStorage.getItem("education") != null) {
    var educations = JSON.parse(localStorage.getItem("education"));
    console.log(educations.length);

    var i = 0;

    for (i = 0; i < educations.length; i++) {
      $(".educations_container").append(
        "<div class='row mb-4'> <div class='col-9'> <h5 class='font-weight-bold'>" +
          educations[i].degree +
          ", <span>" +
          educations[i].specialization +
          "</span></h5> <h5>" +
          educations[i].institution +
          "</h5> <i><span>" +
          educations[i].startyear +
          "</span> - <span>" +
          educations[i].endyear +
          "</span></i> </div> <div class='col-3'>  <button class='btn text-nowrap btn-success my-2 education_edit' index='" +
          i +
          "'><i class='fa fa-edit'></i><a class='ml-2 text-decoration-none'>Edit</a></button> <button class='btn text-nowrap btn-danger education_delete' index='" +
          i +
          "'><i class='fa fa-trash'></i><a class='ml-2 text-decoration-none'>Delete</a></button> </div> </div>"
      );
    }
  }
   

  //edit
  $(".education_edit").each(function(){
    $(this).click(function(){
        var index = $(this).attr("index");
        var educations = JSON.parse(localStorage.getItem("education"));
        var institution = educations[index].institution;
        $("#institution").val(institution);

        var degree = educations[index].degree;
        $("#degree").val(degree);

        var specialization = educations[index].specialization;
        $("#specialization").val(specialization);
      
        var startyear = educations[index].startyear;
        $("#startyear").val(startyear);
     
        var endyear = educations[index].endyear;
        $("#endyear").val(endyear);

        educations.splice(index,1);

        localStorage.setItem("education", JSON.stringify(educations));
        //alert(index);
     })
})

// delete
$(".education_delete").each(function(){
    $(this).click(function(){
        var index = $(this).attr("index");
        var educations = JSON.parse(localStorage.getItem("education"));
        
        educations.splice(index,1);

        localStorage.setItem("education", JSON.stringify(educations));
        //alert(index);
     });
});


// show projects

if (localStorage.getItem("project") != null) {

    var projects = JSON.parse(localStorage.getItem("project"));
    console.log(projects.length);

    var i = 0;

    for(i=0;i<projects.length;i++)
    {

        $(".projects_container").append("<div class='row mb-4'> <div class='col-9'> <h5 class='font-weight-bold'>"+ projects[i].titile+"</h5> <p class='mb-0'>"+ projects[i].description +"</p> <p class='mt-1'><span>Technology Stack</span>: <span>: "+ projects[i].skill +"</span></p></div><div class='col-3'> <button class='btn text-nowrap btn-success my-2 project_edit' index='"+i+"'><i class='fa fa-edit'></i><a class='ml-2 text-decoration-none'>Edit</a></button> <button class='btn text-nowrap btn-danger project_delete' index='"+i+"'><i class='fa fa-trash'></i><a class='ml-2 text-decoration-none'>Delete</a></button></div></div>");
    }

}

// edit project
$(".project_edit").each(function(){
    $(this).click(function(){
        var index = $(this).attr("index");
        var projects = JSON.parse(localStorage.getItem("project"));
         
        var titile = projects[index].titile;
         $("#title").val(titile);
         var description = projects[index].description;
         $("#description").val(description);
         var skill = projects[index].skill;
         $("#skills").val(skill);

       
        projects.splice(index,1);

        localStorage.setItem("project", JSON.stringify(projects));
        //alert(index);
     })
})



// delete
$(".project_delete").each(function(){
    $(this).click(function(){
        var index = $(this).attr("index");
        var projects = JSON.parse(localStorage.getItem("project"));
        
        projects.splice(index,1);

        localStorage.setItem("project", JSON.stringify(projects));
        //alert(index);
     });
});





});
