
// --------------------------------------------------------
/**
 * BÀI TẬP 1 : TÍNH NGÀY THÁNG NĂM
 */

document.getElementById('btnTommorow').onclick = function () {
    var day = document.getElementById('inputDay').value * 1;
    var month = document.getElementById('inputMonth').value * 1;
    var year = document.getElementById('inputYear').value * 1;

    var showResult = "";

    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if ((day >= 1) && (day < 30)) {
            day += 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day >= 1) && (day == 30)) {
            day = 1;
            month += 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
        if ((day >= 1) && (day < 31)) {
            day += 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day >= 1) && (day == 31)) {
            day = 1;
            month += 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 2) {
        if ((day >= 1) && (day < 28)) {
            day += 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day >= 1) && (day == 28)) {
            day = 1;
            month += 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 12) {
        if ((day >= 1) && (day < 31)) {
            day += 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day >= 1) && (day == 31)) {
            day = 1;
            month = 1;
            year += 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Năm không xác định!`;
        }
    }
    else {
        showResult = `Tháng không xác định!`;
    }

    document.getElementById('showResultDayMonthYear').innerHTML = showResult;
}

document.getElementById('btnYesterday').onclick = function () {
    var day = document.getElementById('inputDay').value * 1;
    var month = document.getElementById('inputMonth').value * 1;
    var year = document.getElementById('inputYear').value * 1;

    var showResult = "";

    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if ((day > 1) && (day <= 30)) {
            day -= 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day == 1) && (day <= 30)) {
            day = 30;
            month -= 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if ((day > 1) && (day <= 31)) {
            day -= 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day == 1) && (day <= 31)) {
            day = 31;
            month -= 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 3) {
        if ((day > 1) && (day <= 31)) {
            day -= 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day == 1) && (day <= 31)) {
            day = 28;
            month = 2;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 2) {
        if ((day > 1) && (day <= 28)) {
            day -= 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day == 1) && (day <= 28)) {
            day = 31;
            month -= 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Ngày không xác định!`;
        }
    } else if (month == 1) {
        if ((day > 1) && (day <= 31)) {
            day -= 1;
            showResult = `${day}/${month}/${year}`;
        } else if ((day == 1) && (day <= 31)) {
            day = 31;
            month = 12;
            year -= 1;
            showResult = `${day}/${month}/${year}`;
        } else {
            showResult = `Năm không xác định!`;
        }
    }
    else {
        showResult = `Tháng không xác định!`;
    }
    document.getElementById('showResultDayMonthYear').innerHTML = showResult;
}

// --------------------------------------------------------
/**
 * BÀI TẬP 2 : TÍNH SỐ NGÀY CỦA THÁNG NĂM
 */

document.getElementById('btnCalcDays').onclick = function () {
    var monthValue = document.getElementById('month').value;
    var yearValue = document.getElementById('year').value;

    if (monthValue > 0 && monthValue <= 12 && yearValue > 0) {
        var resultDaysOfMonth = getDaysOfMonth(yearValue, monthValue);
        document.getElementById('showResultDayOnMonth').innerHTML = `Tháng ${monthValue} năm ${yearValue}  có ${resultDaysOfMonth} ngày`;
    } else {
        document.getElementById('showResultDayOnMonth').innerHTML = `Kiểm tra lại giá trị nhập`;

    }
}
function getDaysOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


// --------------------------------------------------------
/**
 * BÀI TẬP 3 : ĐẾM SỐ
 */

document.getElementById('btnReadNumber').onclick = function () {
    var numberValue = document.getElementById('number').value;

    // Tính hàngTrăm, hàngChục, hàngĐơnVị
    var soHangTram = Math.floor(numberValue / 100);
    var soHangChuc = Math.floor((numberValue % 100) / 10);
    var soDonVi = Math.floor((numberValue % 100) % 10);

    var resultSpellNumber = `${spellNumber(soHangTram)} trăm ${spellNumber(soHangChuc)} mươi ${spellNumber(soDonVi)}`;
    document.getElementById('showResultSpellNumber').innerHTML = resultSpellNumber;
}
// Hàm đọc số
var spellNumber = function (number) {
    var resultSpell = "";
    switch (number) {
        case 1:
            return resultSpell = "một";
        case 2:
            return resultSpell = "hai";
        case 3:
            return resultSpell = "ba";
        case 4:
            return resultSpell = "bốn";
        case 5:
            return resultSpell = "năm";
        case 6:
            return resultSpell = "sáu";
        case 7:
            return resultSpell = "bảy";
        case 8:
            return resultSpell = "tám";
        case 9:
            return resultSpell = "chín"
        default:
            return resultSpell = "";
    }
}

// --------------------------------------------------------
/**
 * BÀI TẬP 4 : TÌM SINH VIÊN XA TRƯỜNG NHẤT
 */

document.getElementById('btnCalcDistance').onclick = function () {

    var xToaDo_A = document.getElementById('xToaDoA').value;
    var yToaDo_A = document.getElementById('yToaDoA').value;

    var xToaDo_B = document.getElementById('xToaDoB').value;
    var yToaDo_B = document.getElementById('yToaDoB').value;

    var xToaDo_C = document.getElementById('xToaDoC').value;
    var yToaDo_C = document.getElementById('yToaDoC').value;

    var xToaDoTruong = document.getElementById('xToaDoTruong').value;
    var yToaDoTruong = document.getElementById('yToaDoTruong').value;

    var resultDistanceAD = getDistance(xToaDo_A, yToaDo_A, xToaDoTruong, yToaDoTruong);
    var resultDistanceBD = getDistance(xToaDo_B, yToaDo_B, xToaDoTruong, yToaDoTruong);
    var resultDistanceCD = getDistance(xToaDo_C, yToaDo_C, xToaDoTruong, yToaDoTruong);

    var resultMaxDistance = getMaxDistance(resultDistanceAD, resultDistanceBD, resultDistanceCD);

    document.getElementById('showResultDistance').innerHTML = resultMaxDistance;
}
// Tính khoảng cách từ nhà SV đến trường
function getDistance(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;

    return Math.floor(Math.sqrt(x * x + y * y));
}

// Lấy khoảng cách xa nhất
function getMaxDistance(distanceAD, distanceBD, distanceCD) {
    var sinhVien_A = document.getElementById('nameA').value;
    var sinhVien_B = document.getElementById('nameB').value;
    var sinhVien_C = document.getElementById('nameC').value;

    var maxDistance = distanceAD;
    if (distanceBD > maxDistance) {
        maxDistance = distanceBD;
        return resultDistance = `Sinh viên ở xa trường nhất : ${sinhVien_B}`;
    }
    if (distanceCD > maxDistance) {
        maxDistance = distanceCD;
        return resultDistance = `Sinh viên ở xa trường nhất:  ${sinhVien_C}`;
    }
    return resultDistance = `Sinh viên ở xa trường nhất  ${sinhVien_A}`;

}

