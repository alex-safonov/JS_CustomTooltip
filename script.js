// Кастомный title для рейтинга
let ratingBlock = document.querySelector('.rating');
let ratingBlockTitle = document.querySelector('.rating-block__title');

ratingBlock.addEventListener("mouseover", function() {
	ratingBlockTitle.style.display = 'block';
});
ratingBlock.addEventListener("mouseout", function() {
  ratingBlockTitle.style.display = 'none';
});
ratingBlockTitle.addEventListener("mouseover", function() {
	ratingBlockTitle.style.display = 'block';
});
ratingBlockTitle.addEventListener("mouseout", function() {
	ratingBlockTitle.style.display = 'none';
});
