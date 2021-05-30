export const errorMessage =(dataObject)=>{
    let str ='';

    for (const object in dataObject) {
        if (object.hasOwnProperty(object)) {
            str +='<div class="invalid-feedback animated fadeInDown">'+dataObject[object][0]+'</div>';
        }else{
            str +='<div class="invalid-feedback animated fadeInDown">'+(dataObject[object][0]+'</div>');
        }
    }
    return str;
}


export const displayErrorMessage = (errorResponse, displayErr)=>{



    if(typeof errorResponse == 'string'){


        // displayErr.innerHTML = '<div class="invalid-feedback animated fadeInDown">'+errorResponse+'</div>';
        displayErr.innerHTML = '<div class="alert alert-danger alert-dismissable" role="alert"><h3 class="alert-heading font-size-h5 font-w400">Error</h3><p class="mb-0">'+errorResponse+'</p></div>';
    }else if(typeof errorResponse == 'undefined'){
        // displayErr.innerHTML = '<div class="invalid-feedback animated fadeInDown"> Action failed Message</div>';
        displayErr.innerHTML = '<div class="alert alert-danger alert-dismissable" role="alert"><h3 class="alert-heading font-size-h5 font-w400">Error</h3><p class="mb-0"> Action failed Message </p></div>';
    }else{
        const lengthErrObject = Object.key(errorResponse).length;
        if(lengthErrObject > 0){
            const err = errorMessage(errorResponse);
            displayErr.innerHTML = err;
        }
    }
}
