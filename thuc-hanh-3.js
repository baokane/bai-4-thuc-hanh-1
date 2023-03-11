function hinhchunhat() {
    var dai = parseInt(document.forms['hinhchunhatform']['dai'].value);
    var rong = parseInt(document.forms['hinhchunhatform']['rong'].value);
    var chuvi = (dai + rong) * 2;
    var dientich = dai * rong
    // alert(chu vi)
    document.getElementById("chuvi").innerHTML = chuvi;
    document.getElementById("dientich").innerHTML = dientich;

}