// swap cart
function showSectionById(id) {
  document.getElementById('donateCartSection').classList.add('hidden');
  document.getElementById('historySection').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}

// swap button bg color:
function showBgColorById(id) {
  document.getElementById('show-donation-cart').classList.remove('bg-[#B4F461]');
  document.getElementById('show-history-cart').classList.remove('bg-[#B4F461]');

  document.getElementById(id).classList.add('bg-[#B4F461]');
}

document.getElementById('show-history-cart').addEventListener('click', function () {

  showSectionById('historySection');

  showBgColorById('show-history-cart');
})
document.getElementById('show-donation-cart').addEventListener('click', function () {

  showSectionById('donateCartSection');

  showBgColorById('show-donation-cart');
})