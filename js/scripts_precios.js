//AÑADIR CHECK VALIDO AL ABRIR POPUP
$(document).ready(function(){
    $("#aceptar_terminos_popUp").click(function(){
      $('.bs-example-modal').modal('hide');
      $("input[type='checkbox']").attr('checked',':checked');
    });
});

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO WEB
$("#contactForm_web").validator().on("submit", function (event) {
    var valido_form_01 = 0;
    var valido_select_web_01 = 0;
    var valido_select_web_02 = 0;
    var valido_check_web_01 = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        submitMSG(true, "");
        valido_form_01 = 1;
    }

    //Opcion de paquete de evaluaciones
    if (!$('#tipo_paquete_web').val() ){
        submitMSG_paquete_evaluaciones(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_paquete_evaluaciones(true, "");
        valido_select_web_01 = 1;
        //console.log(valido_select_01);
    }

    //Opcion de hora
    if (!$('#hora_contacto_web').val() ){
        submitMSG_hora_web(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_hora_web(true, "");
        valido_select_web_02 = 1;
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones(true, "");
        valido_check_web_01 = 1;
    }

    if ((valido_form_01)&&(valido_select_web_01)&&(valido_select_web_02)&&(valido_check_web_01) === 1) {
        event.preventDefault();
        submitMSG(true, "");
        submitForm();
    }
    else {
        submitMSG(false, "Complete los campos que faltan");
    }
});


function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_paquete_evaluaciones(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_paquete_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_hora_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_hora_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_web").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess(){
    $("#contactForm_web")[0].reset();
    submitMSG(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitForm(){
    // Initiate Variables With Form Content
    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var tipo_paquete_web = ($('select[id=tipo_paquete_web]').val());
    var hora_contacto_web = ($('select[id=hora_contacto_web]').val());


    $.ajax({
        type: "POST",
        url:  "php/process_formulario_landing_precios.php",
        data: "first_name=" + first_name +
              "&telephone=" + telephone +
              "&tipo_paquete_web=" + tipo_paquete_web +
              "&hora_contacto_web=" + hora_contacto_web,


        success: function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "pagina_agradecimiento_precios_web.html";
            } else {
                submitMSG(false,text);
            }
        }
    });
}





//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO XS
$("#contactForm_xs").validator().on("submit", function (event) {
    var valido_form_02 = 0;
    var valido_select_xs_01 = 0;
    var valido_select_xs_02 = 0;
    var valido_check_xs_01 = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_xs(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        submitMSG_xs(true, "");
        valido_form_02 = 1;
    }

    //Opcion de paquete de evaluaciones
    if (!$('#tipo_paquete_xs').val() ){
        submitMSG_paquete_evaluaciones_xs(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_paquete_evaluaciones_xs(true, "");
        valido_select_xs_01 = 1;
        //console.log(valido_select_01);
    }

    //Opcion de hora
    if (!$('#hora_contacto_xs').val() ){
        submitMSG_hora_xs(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_hora_xs(true, "");
        valido_select_xs_02 = 1;
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones_xs(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones_xs(true, "");
        valido_check_xs_01 = 1;
    }

    if ((valido_form_02)&&(valido_select_xs_01)&&(valido_select_xs_02)&&(valido_check_xs_01) === 1) {
        event.preventDefault();
        submitMSG_xs(true, "");
        submitForm_xs();
    }
    else {
        submitMSG_xs(false, "Complete los campos que faltan");
    }
});


function submitMSG_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_paquete_evaluaciones_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_paquete_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_hora_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_hora_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_xs").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess_xs(){
    $("#contactForm_xs")[0].reset();
    submitMSG_xs(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitForm_xs(){
    // Initiate Variables With Form Content
    var first_name_xs = $("#first_name_xs").val();
    var telephone_xs = $("#telephone_xs").val();
    var tipo_paquete_xs = ($('select[id=tipo_paquete_xs]').val());
    var hora_contacto_xs = ($('select[id=hora_contacto_xs]').val());


    $.ajax({
        type: "POST",
        url:  "php/process_formulario_landing_precios_xs.php",
        data: "first_name_xs=" + first_name_xs +
              "&telephone_xs=" + telephone_xs +
              "&tipo_paquete_xs=" + tipo_paquete_xs +
              "&hora_contacto_xs=" + hora_contacto_xs,


        success: function(text){
            if (text == "success"){
                formSuccess_xs();
                window.location.href = "pagina_agradecimiento_precios_xs.html";
            } else {
                submitMSG_xs(false,text);
            }
        }
    });
}
