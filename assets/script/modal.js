const btn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

btn.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'block';
})

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
})