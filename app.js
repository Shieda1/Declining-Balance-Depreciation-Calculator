// https://calculator.swiftutors.com/declining-balance-depreciation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const decliningBalanceDepreciationRadio = document.getElementById('decliningBalanceDepreciationRadio');
const depreciationRateRadio = document.getElementById('depreciationRateRadio');
const bookValueofAssetRadio = document.getElementById('bookValueofAssetRadio');

let decliningBalanceDepreciation;
let depreciationRate = v1;
let bookValueofAsset = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

decliningBalanceDepreciationRadio.addEventListener('click', function() {
  variable1.textContent = 'Depreciation Rate';
  variable2.textContent = 'Book Value of Asset';
  depreciationRate = v1;
  bookValueofAsset = v2;
  result.textContent = '';
});

depreciationRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Declining Balance Depreciation';
  variable2.textContent = 'Book Value of Asset';
  decliningBalanceDepreciation = v1;
  bookValueofAsset = v2;
  result.textContent = '';
});

bookValueofAssetRadio.addEventListener('click', function() {
  variable1.textContent = 'Declining Balance Depreciation';
  variable2.textContent = 'Depreciation Rate';
  decliningBalanceDepreciation = v1;
  depreciationRate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(decliningBalanceDepreciationRadio.checked)
    result.textContent = `Declining Balance Depreciation = ${computeDecliningBalanceDepreciation().toFixed(2)}`;

  else if(depreciationRateRadio.checked)
    result.textContent = `Depreciation Rate = ${computeDepreciationRate().toFixed(2)}`;

  else if(bookValueofAssetRadio.checked)
    result.textContent = `Depreciation = ${computeBookValueofAsset().toFixed(2)}`;
})

// calculation

function computeDecliningBalanceDepreciation() {
  return Number(depreciationRate.value) * Number(bookValueofAsset.value);
}

function computeDepreciationRate() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeBookValueofAsset() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}