function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('result').innerText = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
        return;
    }

    var imc = weight / (height * height);
    var interpretation = '';

    if (imc < 16.5) {
        interpretation = 'dénutrition';
    } else if (imc < 18.5) {
        interpretation = 'maigreur';
    } else if (imc < 25) {
        interpretation = 'poids normal';
    } else if (imc < 30) {
        interpretation = 'surpoids';
    } else if (imc < 35) {
        interpretation = 'obésité modérée';
    } else if (imc < 40) {
        interpretation = 'obésité sévère';
    } else {
        interpretation = 'obésité morbide ou massive';
    }

    document.getElementById('result').innerText = 'Votre IMC est ' + imc.toFixed(2) + ' (' + interpretation + ')';
}
