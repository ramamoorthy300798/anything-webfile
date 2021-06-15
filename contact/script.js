$(document).ready(function(){
  $("form").submit(function(){
      $flag = true;
      $(this).find(".required").each(function(){
          if($(this).val()==""){
              $flag = false;
              $(this).addClass("blank").children("small").html($(this).attr("name")+"field is required");
          }else{
              $(this).removeClass("blank").children("small").html("");
          }
      });
      return $flag
  });

  $("#subject").change(function () {
    var selectedSubject = $("#subject option:selected").val();
    alert("You have selected the subject - " + selectedSubject);
    });

    });

    function validate(){
      let txtmessage = document.querySelector('#name').nodeValue;
      if(txtmessage ==""){
        alert("please enter the message")
      }else{
        alert("form submitted successfully")
      }
    }





