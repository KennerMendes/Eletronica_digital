//control home carousel-----------------------------------------------------------------------------------------------------
let slide = 0;
document.getElementById('next').onclick = function()
{
  let id_ind = "ind" + slide;
  document.getElementById(id_ind).className = '';
  let id_img = "carousel-img" + slide;
  document.getElementById(id_img).className = "carousel-item";
  slide++;
  if(slide > 3)
  {
    slide = 0;
  }
  id_ind = "ind" + slide;
  id_img = "carousel-img" + slide;
  document.getElementById(id_ind).className = 'active';
  document.getElementById(id_img).className = "carousel-item active";
}

document.getElementById('prev').onclick = function()
{
  let id_ind = "ind" + slide;
  document.getElementById(id_ind).className = '';
  let id_img = "carousel-img" + slide;
  document.getElementById(id_img).className = "carousel-item";
  slide--;
  if(slide < 0)
  {
    slide = 3;
  }
  id_ind = "ind" + slide;
  id_img = "carousel-img" + slide;
  document.getElementById(id_ind).className = 'active';
  document.getElementById(id_img).className = "carousel-item active";
}


