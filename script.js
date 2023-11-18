
/* ---------- this field for input field ------------*/
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

/* error for empty field */ 
const emptyDay = document.querySelector("#emptyD");
const invalidDay = document.querySelector("#invalidD");

const emptyMonth = document.querySelector("#emptyM");
const invalidMonth = document.querySelector("#invalidM");

const emptyYear = document.querySelector("#emptyY");
const invalidYear = document.querySelector("#invalidY");

/* target for error color for label */
const d = document.getElementById("d");
const m = document.getElementById("m");
const y = document.getElementById("y");

/*current Date*/
const date = new Date(); 
var CD = date.getDate();
var CM = date.getMonth() + 1;
var CY = date.getFullYear();

/* ----------for output ----------- */
const days = document.getElementById("dys");
const months = document.getElementById("mnths");
const years = document.getElementById("yrs");    

/* --------for submit button-------  */
const form = document.getElementById("submit").addEventListener("click", magic);

function magic(e) {
    e.preventDefault()

    /*input date*/
    var GD = day.value;
    var GM = month.value;
    var GY = year.value;
                
    const daylimit = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = 0; i < daylimit.length; i++) {
        var dl = (daylimit[CM - 2]);
    }

    /* invalidation if empty */

    if (GD === "") {
        emptyDay.classList.remove("x"); 
        invalidDay.classList.add("a");    
        emptyDay.classList.add("dsplyEmptyEr");
        d.classList.add("erClr");
        day.classList.add("erBdrClr");
        day.classList.add("invalidBorderColor");
        d.classList.add("invalidColor");
        days.style.display = "none";
    } 
    else {
        emptyDay.classList.add("y");
        invalidDay.classList.add("a");  
        emptyDay.classList.remove("dsplyEmptyEr");
        d.classList.remove("erClr");
        day.classList.remove("erBdrClr");
        day.classList.add("normalBorderColor");
        d.classList.add("normalColor");
        days.style.display = "inline-block";
    }
    if (GM === "") {
        emptyMonth.classList.remove("x");
        invalidMonth.classList.add("a");    
        emptyMonth.classList.add("dsplyEmptyEr");
        m.classList.add("erClr");
        month.classList.add("erBdrClr");
        month.classList.add("invalidBorderColor");
        m.classList.add("invalidColor");
        months.style.display = "none";
    }
    else {
        emptyMonth.classList.add("y");
        invalidMonth.classList.add("a");
        emptyMonth.classList.remove("dsplyEmptyEr");
        m.classList.remove("erClr");
        month.classList.remove("erBdrClr");
        month.classList.add("normalBorderColor");
        m.classList.add("normalColor");
        months.style.display = "inline-block";
    }
    if (GY === "") {        
        emptyYear.classList.remove("x");
        invalidYear.classList.add("a");    
        emptyYear.classList.add("dsplyEmptyEr");
        y.classList.add("erClr");
        year.classList.add("erBdrClr");
        year.classList.add("invalidBorderColor");
        y.classList.add("invalidColor");
        years.style.display = "none";
    }
    else {
        emptyYear.classList.add("y");
        invalidYear.classList.add("a");
        emptyYear.classList.remove("dsplyEmptyEr");
        y.classList.remove("erClr");
        year.classList.remove("erBdrClr");
        year.classList.add("normalBorderColor");
        y.classList.add("normalColor");
        years.style.display = "inline-block";
    }

    /* invalidate input  */

    if (GD > daylimit[GM - 1] ||GD > 31 || GD < 0) {
        invalidDay.classList.remove("a");
        d.classList.add("labelColor");
        day.classList.add("labelBdrColor");
        days.style.display = "none";
    } 
    else {
        d.classList.remove("labelColor");
        day.classList.remove("labelBdrColor");
    }
    if (GM > 12 || GM < 0) {
        invalidMonth.classList.remove("a");
        m.classList.add("labelColor");
        month.classList.add("labelBdrColor");
        months.style.display = "none";
    }
    else {
        m.classList.remove("labelColor");
        month.classList.remove("labelBdrColor");
    }

    if (GY > CY || GY < 0) {
        invalidYear.classList.remove("a");
        y.classList.add("labelColor");
        year.classList.add("labelBdrColor");
        years.style.display = "none";
    }
    else {
        y.classList.remove("labelColor");
        year.classList.remove("labelBdrColor");
    }

    /*  date calculation  */

    if (GD > CD && GM > CM) {
        days.innerHTML = (dl - GD) + CD;
        console.log(days.innerHTML = (dl - GD) + CD);
        months.innerHTML = 12 - (GM - (CM - 1));
        console.log(months.innerHTML = 12 - (GM - (CM - 1)))
        years.innerHTML = (CY - GY) - 1;
        console.log(years.innerHTML = (CY - GY) - 1)
    }
    else if (GD < CD && GM < CM) {
        days.innerHTML = CD - GD;
        console.log(days.inneHTML = CD - GD);
        months.innerHTML = CM - GM;
        console.log(months.innerHTML = CM - GM)
        years.innerHTML = CY - GY;
        console.log(years.innerHTML = CY - GY)
    }
    else if (GD > CD && GM < CM) {
        days.innerHTML = (dl - GD) + CD;
        console.log(days.inneHTML = (dl - GD) + CD);
        months.innerHTML = (CM - GM) -1;
        console.log(months.innerHTML = (CM - GM) -1)
        years.innerHTML = CY - GY;
        console.log(years.innerHTML = CY - GY)
    }
    else if (GD < CD && GM > CM) {
        days.innerHTML = CD - GD;
        console.log(days.inneHTML = CD - GD);
        months.innerHTML = 12 - (GM - CM);
        console.log(months.innerHTML = 12 - (GM - CM))
        years.innerHTML = (CY - GY) - 1;
        console.log(years.innerHTML = (CY - GY) - 1)
    }
    else if (GD > CD && GM == CM) {
        days.innerHTML = (dl - GD) + CD;
        console.log(days.inneHTML = parseInt((dl - GD) + CD));
        months.innerHTML = 12 - (GM - (CM - 1));
        console.log(months.innerHTML = 12 - (GM - (CM - 1)))
        years.innerHTML = (CY - GY) - 1;
        console.log(years.innerHTML = (CY - GY) - 1)
    }
    else if (GD < CD && GM == CM) {
        days.innerHTML = CD - GD;
        console.log(days.inneHTML = CD - GD);
        months.innerHTML = CM - GM;
        console.log(months.innerHTML = CM - GM)
        years.innerHTML = CY - GY;
        console.log(years.innerHTML = CY - GY)
    }
    else if (GD == CD && GM > CM) {
        days.innerHTML = GD - CD;
        console.log(days.inneHTML = GD - CD);
        months.innerHTML = 12 - (GM - CM);
        console.log(months.innerHTML = 12 - (GM - CM))
        years.innerHTML = (CY - GY) - 1;
        console.log(years.innerHTML = (CY - GY) - 1)
    }   
    else if (GD == CD && GM < CM) {
        days.innerHTML = GD - CD;
        console.log(days.inneHTML = GD - CD);
        months.innerHTML = CM - GM;
        console.log(months.innerHTML = CM - GM)
        years.innerHTML = CY - GY;
        console.log(years.innerHTML = CY - GY)
    }
    else if (GD == CD && GM == CM) {
        days.innerHTML = GD - CD;
        console.log(days.inneHTML = GD - CD);
        months.innerHTML = GM - CM;
        console.log(months.innerHTML = GM - CM);
        years.innerHTML = CY - GY;
        console.log(years.innerHTML = CY - GY)
    } 
}



